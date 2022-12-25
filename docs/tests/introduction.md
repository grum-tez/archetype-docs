---
sidebar_position: 0
sidebar_label: Introduction
---

# Introduction

This section presents the test framework for [Archetype](/docs/introduction) contracts.

⚡️ It supports all Archetype features, and also <u>contracts written in Michelson</u>.

## Definition

Testing a smart contract is a critical aspect of the *development* process as it is the main way to ensure the *correctness* of a smart contract, that is to ensure that the contract behaves as expected once deployed. The correctness of a smart contract is all the more critical that the contract deals with high value assets or critical protocol process, and that the blockchain execution is basically irreversible.

It consists in writing test programs that verifiy that the contract behaves as expected. The types of tests of special interest for smart contracts are:
* unit tests, to verify single features
* integration tests, to verify that different units of feature work correctly when they are combined and integrated with each other (may typically involve other contracts)
* security tests, to verify that the implemented secure and resistant to hacking and other security threats

The developement effort of a smart contract project is mainly spent in writing tests. Hence the choice of a technical framework for tests is as key as the smart contract language itself.

## Limits

The garantee of correctness provided by the tests is limited to the cases they implement. Hence they ensure only *partial* correctness. And that there is no systemic way to garantee that a critical case has not been forgotten.

Moreover, as any program, a test may also contain bugs. It is hence highly recommended to complement the testing approach by any of the following:
* peer code review
* external code audit
* [formal verification](https://completium.com/docs/verification)
