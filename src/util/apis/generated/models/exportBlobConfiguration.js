/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Configuration for export to Blob Storage with blob format
 *
 * @extends models['ExportConfiguration']
 */
class ExportBlobConfiguration extends models['ExportConfiguration'] {
  /**
   * Create a ExportBlobConfiguration.
   * @property {string} [blobPathFormatKind] The path to the blob when enum set
   * to 'WithoutAppId' is 'year/month/day/hour/minute' and when set to
   * 'WithAppId' is 'appId/year/month/day/hour/minute'. Possible values
   * include: 'WithoutAppId', 'WithAppId'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ExportBlobConfiguration
   *
   * @returns {object} metadata of ExportBlobConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'export_blob_configuration',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'ExportConfiguration',
        className: 'ExportBlobConfiguration',
        modelProperties: {
          exportEntities: {
            required: false,
            serializedName: 'export_entities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExportEntityElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'crashes', 'errors', 'attachments' ]
                  }
              }
            }
          },
          resourceName: {
            required: false,
            serializedName: 'resource_name',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            serializedName: 'resource_group',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          blobPathFormatKind: {
            required: false,
            serializedName: 'blob_path_format_kind',
            type: {
              name: 'Enum',
              allowedValues: [ 'WithoutAppId', 'WithAppId' ]
            }
          }
        }
      }
    };
  }
}

module.exports = ExportBlobConfiguration;
