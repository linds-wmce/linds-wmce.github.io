import Application from 'a11ycat/app';
import config from 'a11ycat/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import 'qunit-theme-ember/qunit.css';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
