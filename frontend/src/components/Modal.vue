<template>
  <div class="overlay animationDown">
    <div class="card card_style animationRight">
      <div class="container_card">
        <div class="header">
          <h3>Contact</h3>
        </div>
        <div class="body">
          <div class="row">
            <div class="col-12">
              <div class="input-group mb-3 card_img_modal">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                  sm
                />
                <!-- <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="inputGroupFileAddon04"
                >
                  Button
                </button> -->
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="inputName" class="form-label">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="Full name"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label for="inputEmail" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="name@example.com"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="mb-3">
                <label for="inputPhone" class="form-label">Phone Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPhone"
                  placeholder="92 999999999"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <button @click="cancel" class="btn btn-outline-info">Cancel</button>
          <button class="btn btn-outline-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-component",
  data() {
    return {};
  },
  methods: {
    cancel() {
      this.$emit("cancelModal");
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
}

.container_card {
  padding: 10px 40px;
}

.card_img_modal {
  display: flex;
  justify-content: center;
}
.card_img_modal img {
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
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