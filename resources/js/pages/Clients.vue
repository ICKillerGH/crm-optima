<template>
  <SectionTitle>
    Clientes
    <template v-slot:right-section>
      <button class="btn btn-success btn-sm" @click="onAddClientClicked">Agregar Cliente</button>
    </template>
  </SectionTitle>

  <div class="card">
    <div class="card-body table-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Rut</th>
            <th scope="col">Nombre</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Estado</th>
            <th scope="col">Mail</th>
            <th scope="col">Próx. Acción</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="clients">
            <tr
              v-for="client in clients.data"
              :key="client.id"
            >
              <td scope="col">{{client.id}}</td>
              <td scope="col">{{client.rut}}</td>
              <td scope="col">{{client.name}}</td>
              <td scope="col">{{client.primary_phone}}</td>
              <td scope="col">{{client.status}}</td>
              <td scope="col">{{client.email}}</td>
              <td scope="col">{{client.next_activity?.action ?? 'Sin acción'}}</td>
              <td scope="col">
                <div class="dropdown">
                  <button class="btn btn-danger btn-sm dropdown-toggle" type="button" id="actionsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Acciones
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionsDropdown">
                    <li><router-link class="dropdown-item" :to="`/clientes/${client.id}`">Ver detalles</router-link></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="onEditClicked(client)">Editar</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="deleteClient(client.id)">Eliminar</a></li>
                  </div>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="card-footer" v-if="clients">
      <!--begin::Pagination-->
      <div class="d-flex justify-content-between align-items-center flex-wrap">
          <div class="d-flex flex-wrap py-2 mr-3">
              <a href="#" class="btn btn-icon btn-sm btn-light mr-2 my-1"><i class="ki ki-bold-double-arrow-back icon-xs"></i></a>
              <a href="#" class="btn btn-icon btn-sm btn-light mr-2 my-1"><i class="ki ki-bold-arrow-back icon-xs"></i></a>

              <a
                href="#"
                class="btn btn-icon btn-sm border-0 btn-light mr-2 my-1"
              >
                23
              </a>
              <a href="#" class="btn btn-icon btn-sm border-0 btn-light btn-hover-primary active mr-2 my-1">24</a>

              <a href="#" class="btn btn-icon btn-sm btn-light mr-2 my-1"><i class="ki ki-bold-arrow-next icon-xs"></i></a>
              <a href="#" class="btn btn-icon btn-sm btn-light mr-2 my-1"><i class="ki ki-bold-double-arrow-next icon-xs"></i></a>
          </div>
          <div class="d-flex align-items-center py-3">
              <select class="form-control form-control-sm font-weight-bold mr-4 border-0 bg-light" style="width: 75px;">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
              </select>
              <span class="text-muted">Displaying 10 of 230 records</span>
          </div>
      </div>
      <!--end:: Pagination-->
      {{pages}}
    </div>
  </div>

  <div class="modal" tabindex="-1" id="clientModal">
    <form class="modal-dialog modal-lg" @submit.prevent="onClientFormSubmitted">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{editMode ? 'Editar' : 'Agregar'}} actividad</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i aria-hidden="true" class="ki ki-close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="row mb-4">
            <div class="form-group col-md-6">
              <label for="rut">Rut</label>
              <input type="text" id="rut" class="form-control form-control-solid" :class="{'is-invalid': errors?.rut}" placeholder="ej: 11111111-0" v-model="form.rut">
              <div class="invalid-feedback" v-if="errors?.rut">
                {{errors?.rut[0]}}
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="email">Correo</label>
              <input type="text" id="email" class="form-control form-control-solid" :class="{'is-invalid': errors?.email}" placeholder="ej: correo@ejemplo.cl" v-model="form.email">
              <div class="invalid-feedback" v-if="errors?.email">
                {{errors?.email[0]}}
              </div>
            </div>
          </div>

          <div class="form-group mb-4">
            <label for="name">Nombre o Razón social</label>
            <input type="text" id="name" class="form-control form-control-solid" :class="{'is-invalid': errors?.name}" placeholder="ej: Distribuidora" v-model="form.name">
            <div class="invalid-feedback" v-if="errors?.name">
              {{errors?.name[0]}}
            </div>
          </div>

          <div class="row mb-4">
            <div class="form-group col-md-4">
              <label for="primaryPhone">Teléfono</label>
              <input type="text" id="primaryPhone" class="form-control form-control-solid" :class="{'is-invalid': errors?.primaryPhone}" placeholder="ej: +569 55435 443" v-model="form.primaryPhone">
              <div class="invalid-feedback" v-if="errors?.primaryPhone">
                {{errors?.primaryPhone[0]}}
              </div>
            </div>
            <div class="form-group col-md-4">
              <label for="secondaryPhone">Teléfono 2</label>
              <input type="text" for="secondaryPhone" class="form-control form-control-solid" :class="{'is-invalid': errors?.secondaryPhone}" placeholder="ej: +22 2343 234" v-model="form.secondaryPhone">
              <div class="invalid-feedback" v-if="errors?.secondaryPhone">
                {{errors?.secondaryPhone[0]}}
              </div>
            </div>
            <div class="form-group col-md-4">
              <label for="category">Giro</label>
              <input type="text" for="category" class="form-control form-control-solid" :class="{'is-invalid': errors?.category}" placeholder="ej: Ventas al por mayor" v-model="form.category">
              <div class="invalid-feedback" v-if="errors?.category">
                {{errors?.category[0]}}
              </div>
            </div>
          </div>

          <div class="row mb-4">
            <div class="form-group col-md-6">
              <label for="website">Sitio web</label>
              <input type="text" id="website" class="form-control form-control-solid" :class="{'is-invalid': errors?.website}" placeholder="ej: www.ejemplo.cl" v-model="form.website">
              <div class="invalid-feedback" v-if="errors?.website">
                {{errors?.website[0]}}
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="region">Región</label>
              <select name="region" id="region" class="form-control form-control-solid" :class="{'is-invalid': errors?.stateId}" v-model="form.stateId">
                <option value="" disabled selected>Region...</option>
                <option
                  v-for="state in states?.data"
                  :key="state.id"
                  :value="state.id"
                >
                  {{state.name}}
                </option>
              </select>
              <div class="invalid-feedback" v-if="errors?.stateId">
                {{errors?.stateId[0]}}
              </div>
            </div>
          </div>

          <div class="row mb-4">
            <div class="form-group col-md-6">
              <label for="city">Comuna</label>
              <select name="city" id="city" class="form-control form-control-solid" :class="{'is-invalid': errors?.cityId}" v-model="form.cityId">
                <option value="" disabled selected>Comunas...</option>
                <option
                  v-for="city in cities?.data"
                  :key="city.id"
                  :value="city.id"
                >
                  {{city.name}}
                </option>
              </select>
              <div class="invalid-feedback" v-if="errors?.cityId">
                {{errors?.cityId[0]}}
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="type">Tipo de cliente</label>
              <select name="type" id="type" class="form-control form-control-solid" :class="{'is-invalid': errors?.type}" v-model="form.type">
                <option value="" disabled selected>Tipo de cliente...</option>
                <option value="persona-natural">Persona natural</option>
                <option value="persona-juridica">Persona jurídica</option>
              </select>
              <div class="invalid-feedback" v-if="errors?.type">
                {{errors?.type[0]}}
              </div>
            </div>
          </div>

          <div class="row mb-4">
            <div class="form-group col-md-6">
              <label for="address">Dirección</label>
              <input type="text" id="address" class="form-control form-control-solid" :class="{'is-invalid': errors?.address}" v-model="form.address">
              <div class="invalid-feedback" v-if="errors?.address">
                {{errors?.address[0]}}
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="contactName">Nombre contacto</label>
              <input type="text" id="contactName" class="form-control form-control-solid" :class="{'is-invalid': errors?.contactName}" v-model="form.contactName">
              <div class="invalid-feedback" v-if="errors?.contactName">
                {{errors?.contactName[0]}}
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex">
          <button type="button" class="btn btn-danger" v-show="editMode" @click="deleteClient(form.id)">Eliminar</button>
          <div class="ml-auto">
            <button type="button" class="btn btn-secondary mr-2" data-dismiss="modal">Cancelar</button>
            <button
              type="submit"
              class="btn btn-primary"
              :class="{'spinner spinner-white spinner-right': clientFormLoading}"
              :disabled="clientFormLoading"
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
import SectionTitle from '@/components/SectionTitle';
import useClients from '@/hooks/useClients';
import useStates from '@/hooks/useStates';
import useCities from '@/hooks/useCities';
import useCreateClient from '@/hooks/useCreateClient';
import useUpdateClient from '@/hooks/useUpdateClient';
import useDeleteClient from '@/hooks/useDeleteClient';
import { computed, reactive, ref, watch } from 'vue';

const showClientModal = () => $('#clientModal').modal('show');
const hideClientModal = () => $('#clientModal').modal('hide');

export default {
  components: {
    SectionTitle
  },
  setup() {
    const {data: clients, fetchClients} = useClients({defaultPerPage: 10});
    const {data: states} = useStates({defaultPerPage: 200});
    const {data: cities, fetchCities} = useCities({manual: true, defaultPerPage: 200});

    const {data: createdClient, loading: creatingClient, createClient, error: createClientError} = useCreateClient();
    const {data: updatedClient, loading: updatingClient, updateClient, error: updateClientError} = useUpdateClient();
    const form = reactive({});
    const errors = reactive({});

    watch([createClientError, updateClientError], ([createClientError, updateClientError]) => {
      if (createClientError?.response?.status === 422) {
        Object.keys(createClientError.response.data.errors).forEach(key => errors[key] = createClientError.response.data.errors[key]);
      } else if (updateClientError?.response?.status === 422) {
        Object.keys(updateClientError.response.data.errors).forEach(key => errors[key] = updateClientError.response.data.errors[key]);
      }
    });

    watch(() => form.stateId, (stateId) => {
      if (stateId) {
        fetchCities({stateId});
      }
    });

    const {deleteClient} = useDeleteClient();

    const editMode = ref(false);

    const resetFormModalAndClient = () => {
      Object.keys(form).forEach(key => form[key] = '');
      hideClientModal();
      fetchClients();
    }

    watch([createdClient, updatedClient], ([createdClient, updatedClient]) => {
      if (createdClient || updatedClient) {
        resetFormModalAndClient();
      }
    });

    const onAddClientClicked = () => {
      editMode.value = false;
      showClientModal();
    };

    const onEditClicked = (client) => {
      editMode.value = true;
      form.rut = client.rut;
      form.email = client.email;
      form.name = client.name;
      form.primaryPhone = client.primary_phone;
      form.secondaryPhone = client.secondary_phone;
      form.category = client.category;
      form.website = client.website;
      form.stateId = client.state_id;
      form.cityId = client.city_id;
      form.type = client.type;
      form.address = client.address;
      form.contactName = client.contact_name;
      form.id = client.id;
      showClientModal();
    };

    const pages = ref([]);

    watch(clients, (clients) => pages.value = clients ? Array.from(Array(clients.last_page).keys).map(n => n + 1) : []);

    return {
      clients,
      states,
      cities,
      form,
      clientFormLoading: computed(() => creatingClient.value || updatingClient.value),
      async onClientFormSubmitted() {
        Object.keys(errors).forEach(key => errors[key] = null);

        if (editMode.value) {
          await updateClient({id: form.id, data: form});
        } else {
          await createClient({data: form});
        }
      },
      async deleteClient(id) {
        await deleteClient({id});
      },
      onAddClientClicked,
      onEditClicked,
      editMode,
      errors,
      pages
    }
  }
}
</script>
