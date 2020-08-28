import * as cdk from '@aws-cdk/core';
import * as bucket from '@aws-cdk/aws-s3';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here
    new bucket.Bucket(this, 'SampleBucket');
  }
}
