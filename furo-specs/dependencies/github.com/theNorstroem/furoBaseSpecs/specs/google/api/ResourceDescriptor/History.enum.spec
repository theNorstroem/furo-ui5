type: History
description: |-
    A simple descriptor of a resource type.

     ResourceDescriptor annotates a resource message (either by means of a
     protobuf annotation or use in the service config), and associates the
     resource's schema, the resource type, and the pattern of the resource name.

     Example:

         message Topic {
           // Indicates this message defines a resource schema.
           // Declares the resource type in the format of {service}/{kind}.
           // For Kubernetes resources, the format is {api group}/{kind}.
           option (google.api.resource) = {
             type: "pubsub.googleapis.com/Topic"
             name_descriptor: {
               pattern: "projects/{project}/topics/{topic}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
               parent_name_extractor: "projects/{project}"
             }
           };
         }

     The ResourceDescriptor Yaml config will look like:

         resources:
         - type: "pubsub.googleapis.com/Topic"
           name_descriptor:
             - pattern: "projects/{project}/topics/{topic}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
               parent_name_extractor: "projects/{project}"

     Sometimes, resources have multiple patterns, typically because they can
     live under multiple parents.

     Example:

         message LogEntry {
           option (google.api.resource) = {
             type: "logging.googleapis.com/LogEntry"
             name_descriptor: {
               pattern: "projects/{project}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
               parent_name_extractor: "projects/{project}"
             }
             name_descriptor: {
               pattern: "folders/{folder}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Folder"
               parent_name_extractor: "folders/{folder}"
             }
             name_descriptor: {
               pattern: "organizations/{organization}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Organization"
               parent_name_extractor: "organizations/{organization}"
             }
             name_descriptor: {
               pattern: "billingAccounts/{billing_account}/logs/{log}"
               parent_type: "billing.googleapis.com/BillingAccount"
               parent_name_extractor: "billingAccounts/{billing_account}"
             }
           };
         }

     The ResourceDescriptor Yaml config will look like:

         resources:
         - type: 'logging.googleapis.com/LogEntry'
           name_descriptor:
             - pattern: "projects/{project}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
               parent_name_extractor: "projects/{project}"
             - pattern: "folders/{folder}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Folder"
               parent_name_extractor: "folders/{folder}"
             - pattern: "organizations/{organization}/logs/{log}"
               parent_type: "cloudresourcemanager.googleapis.com/Organization"
               parent_name_extractor: "organizations/{organization}"
             - pattern: "billingAccounts/{billing_account}/logs/{log}"
               parent_type: "billing.googleapis.com/BillingAccount"
               parent_name_extractor: "billingAccounts/{billing_account}"

     For flexible resources, the resource name doesn't contain parent names, but
     the resource itself has parents for policy evaluation.

     Example:

         message Shelf {
           option (google.api.resource) = {
             type: "library.googleapis.com/Shelf"
             name_descriptor: {
               pattern: "shelves/{shelf}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
             }
             name_descriptor: {
               pattern: "shelves/{shelf}"
               parent_type: "cloudresourcemanager.googleapis.com/Folder"
             }
           };
         }

     The ResourceDescriptor Yaml config will look like:

         resources:
         - type: 'library.googleapis.com/Shelf'
           name_descriptor:
             - pattern: "shelves/{shelf}"
               parent_type: "cloudresourcemanager.googleapis.com/Project"
             - pattern: "shelves/{shelf}"
               parent_type: "cloudresourcemanager.googleapis.com/Folder"
lifecycle: null
__proto:
    package: google.api.ResourceDescriptor
    targetfile: ENUM_resource.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/ResourceDescriptor;ResourceDescriptorpb
        java_multiple_files: "true"
        java_outer_classname: Enum.ResourceProto
        java_package: google.api.ResourceDescriptor
    allow_alias: false
values:
    HISTORY_UNSPECIFIED: 0
    ORIGINALLY_SINGLE_PATTERN: 1
    FUTURE_MULTI_PATTERN: 2
