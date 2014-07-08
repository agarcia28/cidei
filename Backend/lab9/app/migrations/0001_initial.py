# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Category'
        db.create_table(u'app_category', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=255)),
            ('slug', self.gf('django.db.models.fields.SlugField')(unique=True, max_length=255)),
            ('type_category', self.gf('django.db.models.fields.CharField')(default='u', max_length=1)),
            ('description', self.gf('django.db.models.fields.TextField')(default='description')),
            ('posted_on', self.gf('django.db.models.fields.DateTimeField')(auto_now_add=True, blank=True)),
            ('update_category', self.gf('django.db.models.fields.DateTimeField')()),
        ))
        db.send_create_signal(u'app', ['Category'])

        # Adding model 'Item'
        db.create_table(u'app_item', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('listing', self.gf('django.db.models.fields.CharField')(default='t', max_length=1)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=120)),
            ('category', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['app.Category'])),
            ('department', self.gf('django.db.models.fields.CharField')(max_length=255)),
            ('description', self.gf('django.db.models.fields.TextField')()),
            ('posted_on', self.gf('django.db.models.fields.DateTimeField')(auto_now_add=True, blank=True)),
            ('update_item', self.gf('django.db.models.fields.DateTimeField')()),
        ))
        db.send_create_signal(u'app', ['Item'])

        # Adding model 'Pictures'
        db.create_table(u'app_pictures', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('item', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['app.Item'])),
            ('url', self.gf('django.db.models.fields.CharField')(max_length=255)),
        ))
        db.send_create_signal(u'app', ['Pictures'])


    def backwards(self, orm):
        # Deleting model 'Category'
        db.delete_table(u'app_category')

        # Deleting model 'Item'
        db.delete_table(u'app_item')

        # Deleting model 'Pictures'
        db.delete_table(u'app_pictures')


    models = {
        u'app.category': {
            'Meta': {'object_name': 'Category'},
            'description': ('django.db.models.fields.TextField', [], {'default': "'description'"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'posted_on': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'slug': ('django.db.models.fields.SlugField', [], {'unique': 'True', 'max_length': '255'}),
            'type_category': ('django.db.models.fields.CharField', [], {'default': "'u'", 'max_length': '1'}),
            'update_category': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'app.item': {
            'Meta': {'object_name': 'Item'},
            'category': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['app.Category']"}),
            'department': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'description': ('django.db.models.fields.TextField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'listing': ('django.db.models.fields.CharField', [], {'default': "'t'", 'max_length': '1'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '120'}),
            'posted_on': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'update_item': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'app.pictures': {
            'Meta': {'object_name': 'Pictures'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'item': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['app.Item']"}),
            'url': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        }
    }

    complete_apps = ['app']