import state from 'src/store/tasks/state';
import * as getters from 'src/store/tasks/getters';
import * as mutations from 'src/store/tasks/mutations';
import * as actions from 'src/store/tasks/actions';

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};
