<template>
  <div class="spinner spinner-primary spinner-lg" v-if="loadingClient"></div>
  <div class="card mb-5" v-else-if="client">
    <h2 class="card-header">Seguimiento</h2>
    <div class="card-body">
      <div class="row mb-4">
        <div class="col-md-4">
          <div><strong>Cliente</strong></div>
          {{client.name}}
        </div>
        <div class="col-md-4">
          <div><strong>Rut</strong></div>
          {{client.rut}}
        </div>
        <div class="col-md-4">
          <div><strong>Teléfono</strong></div>
          {{client.primary_phone}}
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4">
          <div><strong>Correo</strong></div>
          {{client.email}}
        </div>
        <div class="col-md-4">
          <div><strong>Sitio web</strong></div>
          {{client.website}}
        </div>
        <div class="col-md-4">
          <div><strong>Giro</strong></div>
          {{client.category}}
        </div>
      </div>
    </div>
  </div>

  <div class="card card-custom">
    <div class="card-header">
      <div class="card-title">
        <h3 class="card-label">Actividades</h3>
      </div>
    </div>
    <div class="card-body">
      <div id="kt_calendar"></div>
    </div>
  </div>

  <div class="modal" tabindex="-1" role="dialog" id="modalAddEvent">
    <form class="modal-dialog" role="document" @submit.prevent="onActivityFormSubmit">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{editMode ? 'Editar' : 'Agregar'}} actividad</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i aria-hidden="true" class="ki ki-close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="date">Fecha</label>
            <input type="date" class="form-control form-control-solid" :class="{'is-invalid': errors?.date}" id="date" readonly v-model="eventForm.date">
            <div class="invalid-feedback" v-if="errors?.date">
              {{errors?.date[0]}}
            </div>
          </div>
          <div class="form-group">
            <label for="time">Fecha</label>
            <input type="time" class="form-control form-control-solid" :class="{'is-invalid': errors?.time}" id="time" v-model="eventForm.time">
            <div class="invalid-feedback" v-if="errors?.time">
              {{errors?.time[0]}}
            </div>
          </div>
          <div class="form-group">
            <label for="contact">Contacto<sup>*</sup></label>
            <input type="text" class="form-control form-control-solid" :class="{'is-invalid': errors?.contact}" id="contact" v-model="eventForm.contact">
            <div class="invalid-feedback" v-if="errors?.contact">
              {{errors?.contact[0]}}
            </div>
          </div>
          <div class="form-group">
            <label for="action">Acción<sup>*</sup></label>
            <input type="text" class="form-control form-control-solid" :class="{'is-invalid': errors?.action}" id="action" v-model="eventForm.action">
            <div class="invalid-feedback" v-if="errors?.action">
              {{errors?.action[0]}}
            </div>
          </div>
          <div class="form-group">
            <label for="comment">Comentario</label>
            <textarea id="comment" rows="3" class="form-control form-control-solid" :class="{'is-invalid': errors?.comment}" v-model="eventForm.comment"></textarea>
            <div class="invalid-feedback" v-if="errors?.comment">
              {{errors?.comment[0]}}
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex">
          <button class="btn btn-danger" v-show="editMode" @click="deleteActivity">Eliminar</button>
          <div class="ml-auto">
            <button type="button" class="btn btn-secondary mr-2" data-dismiss="modal">Cancelar</button>
            <button
              type="submit"
              class="btn btn-primary"
              :class="{'spinner spinner-white spinner-right': activityFormLoading}"
              :disabled="activityFormLoading"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import useClient from '@/hooks/useClient';
import useCreateClientActivity from '@/hooks/useCreateClientActivity';
import useUpdateClientActivity from '@/hooks/useUpdateClientActivity';
import useDeleteClientActivity from '@/hooks/useDeleteClientActivity';
import SectionTitle from '@/components/SectionTitle';
import {useRoute} from 'vue-router';
import { computed, reactive, ref, watch } from 'vue';

const MODAL_ADD_EVENT_SELECTOR = '#modalAddEvent';

const showAddEventModal = () => $(MODAL_ADD_EVENT_SELECTOR).modal('show');

const hideModal = () => $(MODAL_ADD_EVENT_SELECTOR).modal('hide');

export default {
  components: {
    SectionTitle,
  },
  setup() {
    const route = useRoute();
    const {data: client, loading: loadingClient, fetchClient} = useClient({defaultId: route.params.id});
    const events = computed(() => client.value?.activities?.map(activity => activity.event_data) ?? []);
    const eventForm = reactive({});
    const errors = reactive({});
    const editMode = ref(false);

    const onEventClicked = ({event: {extendedProps}}) => {
      const [date, time] = extendedProps.date.split(' ');

      eventForm.date = date;
      eventForm.time = time;
      eventForm.contact = extendedProps.contact;
      eventForm.action = extendedProps.action;
      eventForm.comment = extendedProps.comment;
      eventForm.id = extendedProps.id;

      editMode.value = true;

      showAddEventModal();
    }

    const onDateClicked = (info) => {
      editMode.value = false;
      eventForm.date = info.dateStr;
      showAddEventModal();
    };

    watch(events, (events) => {
      initCalendar({events, onEventClicked, onDateClicked});
    });

    const {createActivity, data: createdActivity, error: createActivityError, loading: creatingActivity} = useCreateClientActivity();
    const {updateActivity, data: updatedActivity, error: updateActivityError, loading: updatingActivity} = useUpdateClientActivity();
    const {deleteActivity, loading: deletingActivity} = useDeleteClientActivity();

    watch([createActivityError, updateActivityError], ([createActivityError, updateActivityError]) => {
      if (createActivityError?.response?.status === 422) {
        Object.keys(createActivityError.response.data.errors).forEach(key => errors[key] = createActivityError.response.data.errors[key]);
      } else if (updateActivityError?.response?.status === 422) {
        Object.keys(updateActivityError.response.data.errors).forEach(key => errors[key] = updateActivityError.response.data.errors[key]);
      }
    });

    const resetFormModalAndClient = () => {
      Object.keys(eventForm).forEach(key => eventForm[key] = '');
      hideModal();
      fetchClient();
    }

    watch([createdActivity, updatedActivity], ([createdActivity, updatedActivity]) => {
      if (createdActivity || updatedActivity) {
        resetFormModalAndClient();
      }
    });

    return {
      client,
      loadingClient,
      eventForm,
      async onActivityFormSubmit() {
        if (editMode.value) {
          await updateActivity({
            clientId: client.value.id,
            id: eventForm.id,
            data: eventForm
          });
        } else {
          await createActivity({id: client.value.id, data: eventForm});
        }
      },
      async deleteActivity() {
        await deleteActivity({clientId: client.value.id, id: eventForm.id});
      },
      activityFormLoading: computed(() => creatingActivity.value || updatingActivity.value || deletingActivity.value),
      editMode,
      errors,
    };
  }
}

const initCalendar = ({events, onEventClicked, onDateClicked}) => {
  var todayDate = moment().startOf('day');
  var TODAY = todayDate.format('YYYY-MM-DD');

  var calendarEl = document.getElementById('kt_calendar');

  $(calendarEl).empty();

  var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'bootstrap', 'interaction', 'dayGrid', 'timeGrid', 'list' ],
      themeSystem: 'bootstrap',

      header: {
          left: 'prev,next today',
          center: 'title',
      },

      height: 800,
      contentHeight: 780,
      aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio

      nowIndicator: true,
      now: TODAY + 'T09:25:00', // just for demo

      views: {
          dayGridMonth: { buttonText: 'month' },
          timeGridWeek: { buttonText: 'week' },
          timeGridDay: { buttonText: 'day' }
      },

      defaultView: 'dayGridMonth',
      defaultDate: TODAY,

      locale: 'es',

      dateClick: onDateClicked,

      eventClick: onEventClicked,

      editable: true,
      eventLimit: true, // allow "more" link when too many events
      navLinks: true,
      events,
  });

  calendar.render();
}
</script>
