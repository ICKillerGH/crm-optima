<template>
  <SectionTitle>Clientes</SectionTitle>

  <div class="d-flex justify-content-between mb-3">
    <div>
      Mostrar <select name="" id=""><option value="">10</option></select> registros
    </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createClientModal">Agregar cliente</button>
  </div>

  <div class="table-container">
    <table class="table">
      <thead class="thead-dark">
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
        <tr
          v-for="client in clients"
          :key="client.id"
        >
          <td scope="col">{{client.id}}</td>
          <td scope="col">{{client.rut}}</td>
          <td scope="col">{{client.name}}</td>
          <td scope="col">{{client.primary_phone}}</td>
          <td scope="col">{{client.category}}</td>
          <td scope="col">{{client.email}}</td>
          <td scope="col">Próx. Acción</td>
          <td scope="col">
            <div class="dropdown">
              <button class="btn btn-sm btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Acciones
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Ver detalles</a></li>
                <li><a class="dropdown-item" href="#">Editar</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="modal" tabindex="-1" id="createClientModal">
    <form class="modal-dialog modal-lg" @submit.prevent="createClient">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Agregar Cliente</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row mb-4">
            <div class="form-group col-md-6">
              <label for="rut">Rut</label>
              <input type="text" id="rut" class="form-control" placeholder="ej: 11111111-0" v-model="form.rut">
            </div>
            <div class="form-group col-md-6">
              <label for="email">Correo</label>
              <input type="text" id="email" class="form-control" placeholder="ej: correo@ejemplo.cl" v-model="form.email">
            </div>
          </div>

          <div class="form-group mb-4">
            <label for="name">Nombre o Razón social</label>
            <input type="text" id="name" class="form-control" placeholder="ej: Distribuidora" v-model="form.name">
          </div>

          <div class="row mb-4">
            <div class="form-group col-md-4">
              <label for="primaryPhone">Teléfono</label>
              <input type="text" id="primaryPhone" class="form-control" placeholder="ej: +569 55435 443" v-model="form.primaryPhone">
            </div>
            <div class="form-group col-md-4">
              <label for="secondaryPhone">Teléfono 2</label>
              <input type="text" for="secondaryPhone" class="form-control" placeholder="ej: +22 2343 234" v-model="form.secondaryPhone">
            </div>
            <div class="form-group col-md-4">
              <label for="category">Giro</label>
              <input type="text" for="category" class="form-control" placeholder="ej: Ventas al por mayor" v-model="form.category">
            </div>
          </div>

          <div class="row mb-4">
            <div class="form-group col-md-6">
              <label for="website">Sitio web</label>
              <input type="text" id="website" class="form-control" placeholder="ej: www.ejemplo.cl" v-model="form.website">
            </div>
            <div class="form-group col-md-6">
              <label for="region">Región</label>
              <select name="region" id="region" class="form-control" v-model="form.stateId">
                <option value="" disabled selected>Region...</option>
                <option
                  v-for="state in states"
                  :key="state.id"
                  :value="state.id"
                >
                  {{state.name}}
                </option>
              </select>
            </div>
          </div>

          <div class="row mb-4">
            <div class="form-group col-md-6">
              <label for="city">Comuna</label>
              <select name="city" id="city" class="form-control" v-model="form.cityId">
                <option value="" disabled selected>Comunas...</option>
                <option
                  v-for="city in cities"
                  :key="city.id"
                  :value="city.id"
                >
                  {{city.name}}
                </option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="type">Tipo de cliente</label>
              <select name="type" id="type" class="form-control" v-model="form.type">
                <option value="" disabled selected>Tipo de cliente...</option>
                <option value="persona-natural">Persona natural</option>
                <option value="persona-juridica">Persona jurídica</option>
              </select>
            </div>
          </div>

          <div class="row mb-4">
            <div class="form-group col-md-6">
              <label for="address">Dirección</label>
              <input type="text" id="address" class="form-control" v-model="form.address">
            </div>
            <div class="form-group col-md-6">
              <label for="contactName">Nombre contacto</label>
              <input type="text" id="contactName" class="form-control" v-model="form.contactName">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="submit" class="btn btn-primary" :disabled="creatingClient">Guardar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import SectionTitle from '../../components/SectionTitle';
import statesAPI from '../../api/statesAPI';
import citiesAPI from '../../api/citiesAPI';
import clientsAPI from '../../api/clientsAPI';

export default {
  components: {
    SectionTitle,
  },
  data() {
    return {
      states: [],
      cities: [],
      clients: [],
      form: {},
      creatingClient: false,
    };
  },
  async mounted() {
    const statesRes = await statesAPI.get({perPage: 200});
    this.states = statesRes.data.data;

    const citiesRes = await citiesAPI.get({perPage: 200});
    this.cities = citiesRes.data.data;

    this.fetchClients();
  },
  methods: {
    async createClient() {
      if (this.creatingClient) return;

      this.creatingClient = true;

      try {
        const res = await clientsAPI.create({data: this.form});
        this.fetchClients();
      } catch(error) {
        console.log(error.response)
      } finally {
        this.creatingClient = false;
      }
    },
    async fetchClients() {
      const clientsRes = await clientsAPI.get({perPage: 10});
      this.clients = clientsRes.data.data;
    }
  }
}
</script>
