import DS from 'ember-data';
import AdminModelMixin from 'ember-admin/mixins/admin-model-mixin';

export default DS.Model.extend(AdminModelMixin, {
  email: DS.attr('string')
});
