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
 * Billing Plans for a single service
 *
 */
class ServiceBillingPlans {
  /**
   * Create a ServiceBillingPlans.
   * @property {boolean} [canSelectTrialPlan] Can customer select trial plan
   * for that service (if it exists)?
   * @property {string} [lastTrialPlanExpirationTime] Expiration time of the
   * last selected trial plan. Will be null if trial plan was not used.
   * @property {object} [currentBillingPeriod]
   * @property {string} [currentBillingPeriod.startTime] Inclusive start of the
   * period
   * @property {string} [currentBillingPeriod.endTime] Exclusive end of the
   * period.
   * @property {object} [currentBillingPeriod.byAccount]
   * @property {number} [currentBillingPeriod.byAccount.count] Number of
   * instances of the billing plan.
   * @property {object} [currentBillingPeriod.byAccount.plan]
   * @property {string} [currentBillingPeriod.byAccount.plan.id] The Billing
   * Plan ID
   * @property {string} [currentBillingPeriod.byAccount.plan.version] Version
   * of the Billing Plan schema
   * @property {number} [currentBillingPeriod.byAccount.plan.price] Price of
   * the Billing Plan
   * @property {string} [currentBillingPeriod.byAccount.plan.paymentSource]
   * Service that receives payments for this billing plan. Possible values
   * include: 'None', 'AppCenter', 'GitHub', 'Xtc'
   * @property {string} [currentBillingPeriod.byAccount.plan.service] Name of
   * the service that the plan applies to. Possible values include: 'Build',
   * 'Test'
   * @property {object} [currentBillingPeriod.byAccount.plan.limits]
   * @property {object} [currentBillingPeriod.byAccount.plan.attributes]
   * @property {string} [currentBillingPeriod.byAccount.plan.parentId]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceBillingPlans
   *
   * @returns {object} metadata of ServiceBillingPlans
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceBillingPlans',
      type: {
        name: 'Composite',
        className: 'ServiceBillingPlans',
        modelProperties: {
          canSelectTrialPlan: {
            required: false,
            serializedName: 'canSelectTrialPlan',
            type: {
              name: 'Boolean'
            }
          },
          lastTrialPlanExpirationTime: {
            required: false,
            serializedName: 'lastTrialPlanExpirationTime',
            type: {
              name: 'String'
            }
          },
          currentBillingPeriod: {
            required: false,
            serializedName: 'currentBillingPeriod',
            type: {
              name: 'Composite',
              className: 'BillingPeriod'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceBillingPlans;
