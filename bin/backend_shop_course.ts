#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BackendShopCourseStack } from '../lib/backend_shop_course-stack';

const app = new cdk.App();
new BackendShopCourseStack(app, 'BackendShopCourseStack');