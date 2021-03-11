<template>
  <div class="container">
    <Modal v-if="showModal" @cancelModal="showModal = !showModal" />
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
          <Card :data="contact" />
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
      listContacts: [],
    };
  },
  mounted() {
    Api.listar()
      .then((response) => {
        this.listContacts = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.first {
  height: 14vh;
  align-content: center;
}
</style>