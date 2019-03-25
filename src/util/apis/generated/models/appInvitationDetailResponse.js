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
 * Class representing a AppInvitationDetailResponse.
 */
class AppInvitationDetailResponse {
  /**
   * Create a AppInvitationDetailResponse.
   * @property {uuid} id The unique ID (UUID) of the invitation
   * @property {object} app
   * @property {string} [app.appSecret] A unique and secret key used to
   * identify the app in communication with the ingestion endpoint for crash
   * reporting and analytics
   * @property {object} [app.azureSubscription]
   * @property {uuid} [app.azureSubscription.subscriptionId] The azure
   * subscription id
   * @property {uuid} [app.azureSubscription.tenantId] The tenant id of the
   * azure subscription belongs to
   * @property {string} [app.azureSubscription.subscriptionName] The name of
   * the azure subscription
   * @property {boolean} [app.azureSubscription.isBilling] If the subscription
   * is used for billing
   * @property {boolean} [app.azureSubscription.isBillable] If the subscription
   * can be used for billing
   * @property {boolean} [app.azureSubscription.isMicrosoftInternal] If the
   * subscription is internal Microsoft subscription
   * @property {string} [app.platform] The platform of the app. Possible values
   * include: 'Java', 'Objective-C-Swift', 'UWP', 'Cordova', 'React-Native',
   * 'Unity', 'Xamarin', 'Unknown'
   * @property {string} [app.origin] The creation origin of this app. Possible
   * values include: 'appcenter', 'hockeyapp', 'codepush'
   * @property {string} [app.createdAt] The created date of this app
   * @property {string} [app.updatedAt] The last updated date of this app
   * @property {array} [app.memberPermissions] The permissions of the calling
   * user
   * @property {string} email The email address of the invited user
   * @property {string} inviteType The invitation type. Possible values
   * include: 'developer', 'tester'
   * @property {object} invitedBy
   * @property {uuid} [invitedBy.id] The unique id (UUID) of the user
   * @property {string} [invitedBy.avatarUrl] The avatar URL of the user
   * @property {boolean} [invitedBy.canChangePassword] User is required to send
   * an old password in order to change the password.
   * @property {string} [invitedBy.displayName] The full name of the user.
   * Might for example be first and last name
   * @property {string} [invitedBy.email] The email address of the user
   * @property {string} [invitedBy.name] The unique name that is used to
   * identify the user.
   * @property {array} [invitedBy.permissions] The permissions the user has for
   * the app
   * @property {string} [invitedBy.origin] The creation origin of this user.
   * Possible values include: 'appcenter', 'hockeyapp', 'codepush'
   * @property {boolean} isExistingUser Indicates whether the invited user
   * already exists
   * @property {array} [permissions] The permissions the user has for the app
   * @property {number} [appCount] The number of apps in the group
   * @property {object} [distributionGroup] The organization that owns the
   * distribution group, if it exists
   * @property {object} [distributionGroup.owner]
   * @property {uuid} [distributionGroup.owner.id] The unique id (UUID) of the
   * owner
   * @property {string} [distributionGroup.owner.avatarUrl] The avatar URL of
   * the owner
   * @property {string} [distributionGroup.owner.displayName] The owner's
   * display name
   * @property {string} [distributionGroup.owner.email] The owner's email
   * address
   * @property {string} [distributionGroup.owner.name] The unique name that
   * used to identify the owner
   * @property {string} [distributionGroup.owner.type] The owner type. Can
   * either be 'org' or 'user'. Possible values include: 'org', 'user'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppInvitationDetailResponse
   *
   * @returns {object} metadata of AppInvitationDetailResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppInvitationDetailResponse',
      type: {
        name: 'Composite',
        className: 'AppInvitationDetailResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          app: {
            required: true,
            serializedName: 'app',
            type: {
              name: 'Composite',
              className: 'AppResponse'
            }
          },
          email: {
            required: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          inviteType: {
            required: true,
            serializedName: 'invite_type',
            type: {
              name: 'String'
            }
          },
          invitedBy: {
            required: true,
            serializedName: 'invited_by',
            type: {
              name: 'Composite',
              className: 'UserProfileResponse'
            }
          },
          isExistingUser: {
            required: true,
            serializedName: 'is_existing_user',
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
          },
          appCount: {
            required: false,
            serializedName: 'app_count',
            type: {
              name: 'Number'
            }
          },
          distributionGroup: {
            required: false,
            serializedName: 'distribution_group',
            type: {
              name: 'Composite',
              className: 'AppInvitationDetailResponseDistributionGroup'
            }
          }
        }
      }
    };
  }
}

module.exports = AppInvitationDetailResponse;
