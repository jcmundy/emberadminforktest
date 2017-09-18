import AdminAdapterMixin from 'ember-admin/mixins/admin-adapter-mixin';
import DS from 'ember-data';

const {
  JSONAPIAdapter
} = DS;

export default JSONAPIAdapter.extend(AdminAdapterMixin, {});
