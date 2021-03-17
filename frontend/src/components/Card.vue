<template>
  <div class="card" style="width: 18rem">
    <div class="card_header">
      <div class="card_img">
        <img :src="data.image.url" alt="image-contact" />
      </div>
      <div class="card_title">
        <h2>{{ data.name | nameMask  }}</h2>
      </div>
    </div>

    <div class="card_body">
      <p>e-mail: {{ data.email }}</p>
      <div class="card_footer">
        <span>phone: {{ data.phone | phoneMask  }}</span>
        <div class="card_btn">
          <button
            @click="watchContact"
            class="btn btn-rounded btn-sm btn-outline-primary"
          >
            <i class="fas fa-eye text-primary"></i>
          </button>
          <button
            @click="deleteContact"
            class="btn btn-rounded btn-sm btn-outline-info"
          >
            <i class="fas fa-trash text-info"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-component",
  props: ["data"],
  methods: {
    watchContact() {
      this.$emit("watch");
    },
    deleteContact() {
      this.$emit("deleteContact");
    },
  },
};
</script>

<style>
.card {
  height: 150px;
  width: 100%;
}
.card_header {
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.card_img {
  height: 70px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card_header img {
  height: 80%;
  width: 80%;
  border-radius: 50%;
}
.card_title {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.card_header h2 {
  padding: 5px;
  font-size: 1rem;
}
.card_btn {
  width: 80px;
  display: flex;
  justify-content: space-around;
}

.card_body {
  width: 100%;
  display: block;
  padding: 0 10px;
}
.card_footer {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card_body p {
  margin: 0;
  padding: 0;
}

.btn-rounded {
  height: 35px;
  width: 35px;
  border-radius: 50% !important;
}

.btn i:hover {
  color: white !important;
}
</style>