import DS from 'ember-data';
import AdminModelMixin from 'ember-admin/mixins/admin-model-mixin';

export default DS.Model.extend(AdminModelMixin, {
  title: DS.attr('string'),
  author: DS.belongsTo('author'),
  library: DS.belongsTo('library')
});
