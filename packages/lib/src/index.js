// module information
const version = 'v' + require('../package.json').version

// helpers
import decodeLogs from './helpers/decodeLogs'
import encodeCall from './helpers/encodeCall'
import sleep from './helpers/sleep'

// utils
import ABI from './utils/ABIs'
import Semver from './utils/Semver'
import Logger from './utils/Logger'
import FileSystem from './utils/FileSystem'
import Contracts from './utils/Contracts'
import ZWeb3 from './artifacts/ZWeb3'
import { bodyCode, constructorCode, bytecodeDigest, replaceSolidityLibAddress, isSolidityLib, getSolidityLibNames } from './utils/Bytecode'
import { sendTransaction, deploy, isGanacheNode, awaitConfirmations, hasBytecode } from './utils/Transactions'
import { flattenSourceCode } from './utils/Solidity'
import { semanticVersionEqual, toSemanticVersion, semanticVersionToString } from './utils/Semver';

// validations
import { getStorageLayout, getStructsOrEnums } from './validations/Storage';
import { getBuildArtifacts } from './utils/BuildArtifacts';
import { compareStorageLayouts } from './validations/Layout';
import { validate, newValidationErrors, validationPasses } from './validations';

// test behaviors
import { behaviors, helpers } from './test'
const assertions = helpers.assertions
const assertRevert = helpers.assertRevert
const assertEvent = helpers.assertEvent

// model objects
import Proxy from './proxy/Proxy'
import App from './app/App'
import Package from './package/Package'
import ImplementationDirectory from './directory/ImplementationDirectory'
import BasePackageProject from './project/BasePackageProject'
import PackageProject from './project/PackageProject'
import AppProject from './project/AppProject'
import SimpleProject from './project/SimpleProject'

export {
  version,
  decodeLogs,
  encodeCall,
  assertRevert,
  assertEvent,
  assertions,
  behaviors,
  sendTransaction,
  deploy,
  getBuildArtifacts,
  getStorageLayout,
  compareStorageLayouts,
  getStructsOrEnums,
  validate,
  newValidationErrors,
  validationPasses,
  bodyCode, 
  constructorCode, 
  bytecodeDigest, 
  flattenSourceCode,
  semanticVersionEqual, 
  toSemanticVersion,
  semanticVersionToString,
  replaceSolidityLibAddress, 
  getSolidityLibNames,
  isSolidityLib,
  sleep,
  isGanacheNode,
  awaitConfirmations,
  hasBytecode,
  Proxy,
  Logger,
  ABI,
  Semver,
  FileSystem,
  ZWeb3,
  Contracts,
  App,
  ImplementationDirectory,
  Package,
  BasePackageProject,
  PackageProject,
  AppProject,
  SimpleProject
}
