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
 * Class representing a TesterAppResponse.
 * @extends models['BasicAppResponse']
 */
class TesterAppResponse extends models['BasicAppResponse'] {
  /**
   * Create a TesterAppResponse.
   * @property {boolean} [microsoftInternal] it indicates if the app is
   * microsoft internal
   * @property {array} [permissions] The permissions associated with the app
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TesterAppResponse
   *
   * @returns {object} metadata of TesterAppResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TesterAppResponse',
      type: {
        name: 'Composite',
        className: 'TesterAppResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          iconUrl: {
            required: false,
            serializedName: 'icon_url',
            type: {
              name: 'String'
            }
          },
          iconSource: {
            required: false,
            serializedName: 'icon_source',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          os: {
            required: true,
            serializedName: 'os',
            type: {
              name: 'String'
            }
          },
          owner: {
            required: true,
            serializedName: 'owner',
            type: {
              name: 'Composite',
              className: 'Owner'
            }
          },
          microsoftInternal: {
            required: false,
            serializedName: 'microsoft_internal',
            type: {
              name: 'Boolean'
            }
          },
          permissions: {
            required: false,
            serializedName: 'permissions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TesterAppResponse;
