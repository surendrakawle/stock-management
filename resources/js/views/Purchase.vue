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
          <i class="material-icons">library_books</i> Purchase
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
                                placeholder="Enter Purchase name"
                              />
                            </div>
                          </div>
                          <label for="name">Product</label>
                          <div class="form-group">
                            <div class="form-line">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Purchase name"
                              />
                            </div>
                          </div>
                          <label for="name">Price</label>
                          <div class="form-group">
                            <div class="form-line">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Purchase Price"
                              />
                            </div>
                          </div>
                          <label for="name">QTY</label>
                          <div class="form-group">
                            <div class="form-line">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Purchase name"
                              />
                            </div>
                          </div>
                          <label for="name">Defective QTY</label>
                          <div class="form-group">
                            <div class="form-line">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Purchase name"
                              />
                            </div>
                          </div>
                          <label for="name">Discount</label>
                          <div class="form-group">
                            <div class="form-line">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Purchase name"
                              />
                            </div>
                          </div>
                          <label for="name">Tax</label>
                          <div class="form-group">
                            <div class="form-line">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Purchase name"
                              />
                            </div>
                          </div>
                          <label for="name">Extra Charges</label>
                          <div class="form-group">
                            <div class="form-line">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Purchase name"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
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
                      <th>#</th>
                      <th>Task</th>
                      <th>Status</th>
                      <th>Manager</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Task A</td>
                      <td><span class="label bg-green">Doing</span></td>
                      <td>John Doe</td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-green"
                            role="progressbar"
                            aria-valuenow="62"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width: 62%"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Task B</td>
                      <td><span class="label bg-blue">To Do</span></td>
                      <td>John Doe</td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-blue"
                            role="progressbar"
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width: 40%"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Task C</td>
                      <td><span class="label bg-light-blue">On Hold</span></td>
                      <td>John Doe</td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-light-blue"
                            role="progressbar"
                            aria-valuenow="72"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width: 72%"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Task D</td>
                      <td>
                        <span class="label bg-orange">Wait Approvel</span>
                      </td>
                      <td>John Doe</td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-orange"
                            role="progressbar"
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width: 95%"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Task E</td>
                      <td>
                        <span class="label bg-red">Suspended</span>
                      </td>
                      <td>John Doe</td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-red"
                            role="progressbar"
                            aria-valuenow="87"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style="width: 87%"
                          ></div>
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
export default {
  data: function () {
    return {
      title: "Purchase List",
      modalTitle: "Add Purchase",
    };
  },
  created() {
    this.$store.dispatch("setTab", "purchase");
    // console.log(this.$store);
  },
};
</script>

<style>
</style>