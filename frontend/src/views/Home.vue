<template>
  <div class="home">
    <Modal
      v-if="showModal"
      :data="contact"
      @save="createContact"
      @update="updateContact"
      @cancel="cancelModal"
    />

    <div class="menu">
      <button @click="showModal = !showModal" class="btn btn-outline-primary">
        New Contact
      </button>
    </div>

    <div class="container_main">
      <div
        class="card_decker"
        v-for="contact in listContacts"
        :key="contact.id"
      >
        <Card
          @watch="watchContact(contact)"
          @deleteContact="deleteContact(contact)"
          :data="contact"
        />
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
      await Api.list()
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
    async deleteContact({ _id }) {
      await Api.delete(_id).then(() => {
        this.getContacts();
        this.cleanForm();
        this.showModal = false;
      });
    },
    async updateContact() {
      const formData = new FormData();

      formData.append("name", this.contact.name);
      formData.append("email", this.contact.email);
      formData.append("phone", this.contact.phone);
      formData.append("file", this.contact.file, this.contact.file.name);

      await Api.update(this.contact._id, formData).then(() => {
        this.getContacts();
        this.cleanForm();
        this.showModal = false;
      });
    },

    watchContact(contact) {
      this.contact = { ...contact };
      this.showModal = true;
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
.home {
  max-width: 1300px;
  min-width: 300px;
  margin: 0 auto;
  padding: 20px;
}

.menu {
  margin-left: 10px;
}

.container_main {
  display: flex;
  flex-wrap: wrap;
}

.card_decker {
  margin: 10px;
}
</style>