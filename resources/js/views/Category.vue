<template>
  <section class="content">
    <div class="container-fluid">
      <ol class="breadcrumb breadcrumb-bg-pink">
        <li>
          <router-link :to="{ name: 'home' }">
            <i class="material-icons">home</i> Home
          </router-link>
        </li>
        <li class="active">
          <i class="material-icons">library_books</i> Category
        </li>
      </ol>

      <div class="row clearfix">
        <!-- Task Info -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="card">
            <div class="header">
              <div class="row clearfix">
                <div class="col-xs-12 col-sm-6">
                  <h2>{{ title }}</h2>
                </div>

                <div class="col-xs-12 col-sm-6 align-right">
                  <button
                    type="button"
                    class="btn btn-success waves-effect"
                    data-toggle="modal"
                    data-target="#addUpdateModal"
                  >
                    <i class="material-icons">add</i>
                  </button>
                </div>
                <!-- Default Size -->
                <div
                  class="modal fade"
                  id="addUpdateModal"
                  tabindex="-1"
                  role="dialog"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="header">
                        <h2 class="modal-title">{{ modalTitle }}</h2>
                      </div>
                      <div class="modal-body">
                        <form>
                          <label for="name">Name</label>
                          <div class="form-group">
                            <div class="form-line">
                              <input
                                type="text"
                                class="form-control"
                                v-model="name"
                                placeholder="Enter category name"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-success m-t-15 waves-effect"
                          @click="add"
                        >
                          SAVE
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger m-t-15 waves-effect"
                          data-dismiss="modal"
                        >
                          CLOSE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="body">
              <div class="table-responsive">
                <table class="table table-hover dashboard-task-infos">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(category, index) in itemsWithSno" :key="index">
                      <td>{{ category.sno }}</td>
                      <td>{{ category.name }}</td>
                      <td><span class="label bg-green">Doing</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- #END# Task Info -->
      </div>
    </div>
  </section>
</template>

<script>
import api from "../api";
export default {
  data: function () {
    return {
      title: "Category List",
      modalTitle: "Add Category",
      categories: [],
      id: "",
      name: "",
    };
  },
  computed: {
    itemsWithSno() {
      return this.categories.map((d, index) => ({ ...d, sno: index + 1 }));
    },
  },
  created() {
    this.$store.dispatch("setTab", "category");
    this.list();
  },
  methods: {
    list() {
      let instance = this;
      
      api
        .post("/api/get-category", [], this)
        .then(function (res) {
          instance.categories = res.data;
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    add() {
      let instance = this;
      api
        .post("/api/add-category", { name: instance.name }, this)
        .then(function (res) {})
        .catch(function (e) {
          console.log(e);
        });
    },
  },
};
</script>

<style>
</style>