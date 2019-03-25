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

/**
 * Class representing a BasicAppResponse.
 */
class BasicAppResponse {
  /**
   * Create a BasicAppResponse.
   * @property {uuid} id The unique ID (UUID) of the app
   * @property {string} [description] The description of the app
   * @property {string} displayName The display name of the app
   * @property {string} [iconUrl] The string representation of the URL pointing
   * to the app's icon
   * @property {string} [iconSource] The string representation of the source of
   * the app's icon
   * @property {string} name The name of the app used in URLs
   * @property {string} os The OS the app will be running on. Possible values
   * include: 'Android', 'iOS', 'macOS', 'Tizen', 'tvOS', 'Windows', 'Custom'
   * @property {object} owner
   * @property {uuid} [owner.id] The unique id (UUID) of the owner
   * @property {string} [owner.avatarUrl] The avatar URL of the owner
   * @property {string} [owner.displayName] The owner's display name
   * @property {string} [owner.email] The owner's email address
   * @property {string} [owner.name] The unique name that used to identify the
   * owner
   * @property {string} [owner.type] The owner type. Can either be 'org' or
   * 'user'. Possible values include: 'org', 'user'
   */
  constructor() {
  }

  /**
   * Defines the metadata of BasicAppResponse
   *
   * @returns {object} metadata of BasicAppResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BasicAppResponse',
      type: {
        name: 'Composite',
        className: 'BasicAppResponse',
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
          }
        }
      }
    };
  }
}

module.exports = BasicAppResponse;
