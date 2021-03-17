<template>
  <div class="overlay animationDown">
    <form @submit.prevent="saveContact" class="card card_style animationRight">
      <div class="container_card">
        <div class="header">
          <h3>Contact</h3>
        </div>
        <div class="body">
          <div class="row">
            <div class="col-12 container-camera">
              <button
                :disabled="this.data._id"
                class="container-image"
                type="button"
                @click="openFileDialog()"
              >
                <img v-if="avatar" class="image-camera" :src="avatar" alt="" />
                <img
                  v-else
                  class="image-camera img-camera"
                  :src="cameraImage"
                  alt=""
                />
              </button>

              <button
                :disabled="this.data._id"
                v-show="avatar"
                @click="avatar = null"
                class="btn badge badge-light"
                type="button"
              >
                <i class="fa fa-trash text-danger"></i>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="input-group">
                <input
                  :disabled="this.data._id"
                  ref="inputFile"
                  type="file"
                  name="image"
                  accept="image/*"
                  class="d-none"
                  @change="handleFile"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="inputName" class="form-label">Full Name</label>
                <input
                  :disabled="this.data._id"
                  v-model="data.name"
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="Full name"
                  minlength="8"
                  maxlength="40"
                  required
                  :class="nameRequired"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="inputEmail" class="form-label">Email address</label>
                <input
                  :disabled="this.data._id"
                  v-model="data.email"
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="name@example.com"
                  maxlength="40"
                  required
                  :class="emailRequired"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="mb-3">
                <label for="inputPhone" class="form-label">Phone Number</label>
                <input
                  :disabled="this.data._id"
                  v-model="data.phone"
                  type="text"
                  class="form-control"
                  id="inputPhone"
                  placeholder="DDD999999999"
                  minlength="11"
                  maxlength="12"
                  required
                  :class="phoneRequired"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <button @click="cancel" class="btn btn-outline-info">Cancel</button>
          <button
            :disabled="disabledButton"
            type="submit"
            class="btn btn-outline-primary"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "modal-component",
  props: ["data"],
  data() {
    return {
      cameraImage: require("@/assets/camera.svg"),
      avatar: this.data._id ? this.data.image.url : null,
    };
  },
  methods: {
    saveContact() {
      if (this.data._id) {
        this.$emit("update");
      } else {
        this.$emit("save");
      }
    },
    cancel() {
      this.$emit("cancel");
    },
    openFileDialog() {
      this.$refs.inputFile.value = null;
      this.$refs.inputFile.click();
    },
    handleFile(e) {
      let image = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.avatar = e.target.result;
      };
      this.data.file = image;
    },
  },
  computed: {
    nameRequired: function () {
      return this.data.name == "" ? "requiredField" : "";
    },
    emailRequired: function () {
      return this.data.email == "" ? "requiredField" : "";
    },
    phoneRequired: function () {
      return this.data.phone == "" ? "requiredField" : "";
    },
    disabledButton: function () {
      return this.data._id || this.avatar == null ? true : false;
    },
  },
};
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 1rem;
}

.card.card_style {
  height: 35rem;
  width: 30rem;
  min-width: 360px;
}

.container_card {
  padding: 10px 40px;
}

.container-camera {
  min-height: 9rem;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-image {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 120px;
  width: 120px;
  border-radius: 50%;
}

button.container-image {
  border: none;
}
button.container-image:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.image-camera {
  height: 120px;
  width: 120px;
  border-radius: 100%;
}

.image-camera.img-camera {
  height: 40% !important;
  border-radius: 0 !important;
}

.footer {
  display: flex;
  justify-content: space-between;
}

.footer .btn {
  width: 6.25rem;
}

.animationLetf {
  animation: moveLeft 0.5s ease-in;
}
.animationRight {
  animation: moveRight 0.5s ease-in;
}
.animationUp {
  animation: moveUp 0.5s ease-in;
}
.animationDown {
  animation: moveDown 0.5s ease-in;
}
.requiredField {
  border: 1px solid red !important;
}

@keyframes moveLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes moveRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes moveUp {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
@keyframes moveDown {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>