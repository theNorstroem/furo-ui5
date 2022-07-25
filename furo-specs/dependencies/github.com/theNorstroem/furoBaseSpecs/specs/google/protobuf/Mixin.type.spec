name: Mixin
type: Mixin
description: |-
    Declares an API Interface to be included in this interface. The including
     interface must redeclare all the methods from the included interface, but
     documentation and options are inherited as follows:

     - If after comment and whitespace stripping, the documentation
       string of the redeclared method is empty, it will be inherited
       from the original method.

     - Each annotation belonging to the service config (http,
       visibility) which is not set in the redeclared method will be
       inherited.

     - If an http annotation is inherited, the path pattern will be
       modified as follows. Any version prefix will be replaced by the
       version of the including interface plus the [root][] path if
       specified.

     Example of a simple mixin:

         package google.acl.v1;
         service AccessControl {
           // Get the underlying ACL object.
           rpc GetAcl(GetAclRequest) returns (Acl) {
             option (google.api.http).get = "/v1/{resource=**}:getAcl";
           }
         }

         package google.storage.v2;
         service Storage {
           rpc GetAcl(GetAclRequest) returns (Acl);

           // Get a data record.
           rpc GetData(GetDataRequest) returns (Data) {
             option (google.api.http).get = "/v2/{resource=**}";
           }
         }

     Example of a mixin configuration:

         apis:
         - name: google.storage.v2.Storage
           mixins:
           - name: google.acl.v1.AccessControl

     The mixin construct implies that all methods in `AccessControl` are
     also declared with same name and request/response types in
     `Storage`. A documentation generator or annotation processor will
     see the effective `Storage.GetAcl` method after inheriting
     documentation and annotations as follows:

         service Storage {
           // Get the underlying ACL object.
           rpc GetAcl(GetAclRequest) returns (Acl) {
             option (google.api.http).get = "/v2/{resource=**}:getAcl";
           }
           ...
         }

     Note how the version in the path pattern changed from `v1` to `v2`.

     If the `root` field in the mixin is specified, it should be a
     relative path under which inherited HTTP paths are placed. Example:

         apis:
         - name: google.storage.v2.Storage
           mixins:
           - name: google.acl.v1.AccessControl
             root: acls

     This implies the following inherited HTTP annotation:

         service Storage {
           // Get the underlying ACL object.
           rpc GetAcl(GetAclRequest) returns (Acl) {
             option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
           }
           ...
         }
lifecycle: null
__proto:
    package: google.protobuf
    targetfile: api.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/protobuf;protobufpb
        java_multiple_files: "true"
        java_outer_classname: ApiProto
        java_package: google.protobuf
fields:
    name:
        type: string
        description: The fully qualified name of the interface which is included.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.mixin.name.placeholder
            hint: ""
            label: google.protobuf.mixin.name.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    root:
        type: string
        description: |-
            If non-empty specifies a path under which inherited HTTP paths
             are rooted.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.mixin.root.placeholder
            hint: ""
            label: google.protobuf.mixin.root.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
