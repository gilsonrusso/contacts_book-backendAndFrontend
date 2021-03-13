<template>
  <div class="container">
    <Modal
      v-if="showModal"
      :data="contact"
      @save="createContact"
      @cancel="cancelModal"
    />
    <div class="row first">
      <div class="col-12 col-sm-6 col-md-6">
        <button @click="showModal = !showModal" class="btn btn-outline-primary">
          New Contact
        </button>
      </div>
    </div>
    <div class="row">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
        <div
          v-for="contact in listContacts"
          :key="contact.id"
          class="col-12 mb-2"
        >
          <Card @save="createContact()" :data="contact" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Api from "@/services/apiServices";

export default {
  name: "home-view",
  components: { Card, Modal },
  data() {
    return {
      showModal: false,
      contact: {},
      listContacts: [],
    };
  },
  methods: {
    async getContacts() {
      await Api.listar()
        .then((response) => {
          this.listContacts = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async createContact() {
      const formData = new FormData();

      formData.append("name", this.contact.name);
      formData.append("email", this.contact.email);
      formData.append("phone", this.contact.phone);
      formData.append("file", this.contact.file, this.contact.file.name);

      await Api.create(formData)
        .then(() => {
          this.getContacts();
          this.cleanForm();
          this.showModal = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancelModal() {
      this.cleanForm();
      this.showModal = false;
    },
    cleanForm() {
      this.contact = {};
    },
  },
  mounted() {
    this.getContacts();
  },
};
</script>

<style>
.first {
  height: 14vh;
  align-content: center;
}
</style>