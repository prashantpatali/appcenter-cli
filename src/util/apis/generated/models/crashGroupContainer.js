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
 * Class representing a CrashGroupContainer.
 */
class CrashGroupContainer {
  /**
   * Create a CrashGroupContainer.
   * @property {array} crashGroups
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashGroupContainer
   *
   * @returns {object} metadata of CrashGroupContainer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashGroupContainer',
      type: {
        name: 'Composite',
        className: 'CrashGroupContainer',
        modelProperties: {
          crashGroups: {
            required: true,
            serializedName: 'crash_groups',
            constraints: {
              MinItems: 1
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CrashGroupAndVersionElementType',
                  type: {
                    name: 'Composite',
                    className: 'CrashGroupAndVersion'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CrashGroupContainer;
