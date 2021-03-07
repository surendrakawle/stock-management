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
          <i class="material-icons">library_books</i> Product
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
                    @click="id=''"
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
                                v-model="name"
                                type="text"
                                class="form-control"
                                placeholder="Enter Product Name"
                              />
                               <input
                                v-model="id"
                                type="hidden"
                                class="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <label for="category">Category</label>
                          <div class="form-group">
                            <div class="form-line">
                              <select v-model="category">
                                <option v-for="c in category1" :value="c.id"> {{c.name}} </option>
                              </select>
                            </div>
                          </div>
                          <label for="stock">QTY Stock</label>
                          <div class="form-group">
                            <div class="form-line">
                              <input
                                v-model="qty"
                                type="number"
                                class="form-control"
                                placeholder="Enter Stock Quantity"
                              />
                            </div>
                          </div>
                          <label for="price">Price</label>
                          <div class="form-group">
                            <div class="form-line">
                              <input
                                v-model="price"
                                type="number"
                                class="form-control"
                                placeholder="Enter Price"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          @click="add()"
                          type="button"
                          class="btn btn-success m-t-15 waves-effect"
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
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(product, index) in product" :key="index">
                      <td>{{ product.name }}</td>
                      <td>{{ product.qty }}</td>
                      <td>{{ product.price }}</td>
                      <td>
                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" @click="edit(product.id, product.name, product.category, product.qty, product.price)">
                          <div class="demo-google-material-icon"> <i class="material-icons">mode_edit</i> </div>
                        </div>
                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" @click="deleteProduct(product.id)">
                          <div class="demo-google-material-icon"> <i class="material-icons">delete</i> </div>
                        </div>
                      </td>
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
      title: "Product List",
      modalTitle: "Add Product",
      category: '',
      price: 0, 
      qty: 0, 
      id: '',
      name: '',
      category1: [],
      product: [],
    };
  },
  created() {
    this.categories();
    this.list();
    this.$store.dispatch("setTab", "product");
    // console.log(this.$store);
  },
  methods: {
    list() {
      let instance = this;
      api
        .post("/api/get-product", [], this)
        .then(function (res) {
          instance.product = res.data;
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    categories() {
      let instance = this;
      api
        .post("/api/get-category", [], this)
        .then(function (res) {
          instance.category1 = res.data;
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    add() {
      let instance = this;
      instance.modalTitle = "Add Product";
      let data = { name: instance.name, id: instance.id, category: instance.category, qty: instance.qty, price: instance.price}
      api
        .post("/api/add-product", data, this)
        .then(function (res) {
          $('#addUpdateModal').modal('toggle');
          instance.list()
        })
        .catch(function (e) {
          $('#addUpdateModal').modal('toggle');
          console.log(e);
        });
    },
    deleteProduct(id) {
      let instance = this;
      let f = confirm("Are you sure to delete!");
      if(!f) return false;
      api
        .post("/api/delete-product", { id: id }, this)
        .then(function (res) {
          instance.list()
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    edit(id, name, category, qty, price) {
      let instance = this;
      instance.id = id;
      instance.name = name;
      instance.category = category;
      instance.qty = qty; 
      instance.price = price; 
      instance.modalTitle = "Edit Category";
      $('#addUpdateModal').modal('toggle');

    },
  },
};
</script>

<style>
</style>