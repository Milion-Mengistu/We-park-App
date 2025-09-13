
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * *
 *  * NextAuth default models (supports Google OAuth and other providers)
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model ParkingLocation
 * 
 */
export type ParkingLocation = $Result.DefaultSelection<Prisma.$ParkingLocationPayload>
/**
 * Model ParkingSlot
 * 
 */
export type ParkingSlot = $Result.DefaultSelection<Prisma.$ParkingSlotPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model ParkingAnalytics
 * 
 */
export type ParkingAnalytics = $Result.DefaultSelection<Prisma.$ParkingAnalyticsPayload>
/**
 * Model SystemSettings
 * 
 */
export type SystemSettings = $Result.DefaultSelection<Prisma.$SystemSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingLocation`: Exposes CRUD operations for the **ParkingLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingLocations
    * const parkingLocations = await prisma.parkingLocation.findMany()
    * ```
    */
  get parkingLocation(): Prisma.ParkingLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingSlot`: Exposes CRUD operations for the **ParkingSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSlots
    * const parkingSlots = await prisma.parkingSlot.findMany()
    * ```
    */
  get parkingSlot(): Prisma.ParkingSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingAnalytics`: Exposes CRUD operations for the **ParkingAnalytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingAnalytics
    * const parkingAnalytics = await prisma.parkingAnalytics.findMany()
    * ```
    */
  get parkingAnalytics(): Prisma.ParkingAnalyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSettings`: Exposes CRUD operations for the **SystemSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSettings.findMany()
    * ```
    */
  get systemSettings(): Prisma.SystemSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    UserRole: 'UserRole',
    ParkingLocation: 'ParkingLocation',
    ParkingSlot: 'ParkingSlot',
    Booking: 'Booking',
    Payment: 'Payment',
    Notification: 'Notification',
    Incident: 'Incident',
    ParkingAnalytics: 'ParkingAnalytics',
    SystemSettings: 'SystemSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "userRole" | "parkingLocation" | "parkingSlot" | "booking" | "payment" | "notification" | "incident" | "parkingAnalytics" | "systemSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      ParkingLocation: {
        payload: Prisma.$ParkingLocationPayload<ExtArgs>
        fields: Prisma.ParkingLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLocationPayload>
          }
          findFirst: {
            args: Prisma.ParkingLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLocationPayload>
          }
          findMany: {
            args: Prisma.ParkingLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLocationPayload>[]
          }
          create: {
            args: Prisma.ParkingLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLocationPayload>
          }
          createMany: {
            args: Prisma.ParkingLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLocationPayload>[]
          }
          delete: {
            args: Prisma.ParkingLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLocationPayload>
          }
          update: {
            args: Prisma.ParkingLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLocationPayload>
          }
          deleteMany: {
            args: Prisma.ParkingLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLocationPayload>[]
          }
          upsert: {
            args: Prisma.ParkingLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLocationPayload>
          }
          aggregate: {
            args: Prisma.ParkingLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingLocation>
          }
          groupBy: {
            args: Prisma.ParkingLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingLocationCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingLocationCountAggregateOutputType> | number
          }
        }
      }
      ParkingSlot: {
        payload: Prisma.$ParkingSlotPayload<ExtArgs>
        fields: Prisma.ParkingSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          findFirst: {
            args: Prisma.ParkingSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          findMany: {
            args: Prisma.ParkingSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          create: {
            args: Prisma.ParkingSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          createMany: {
            args: Prisma.ParkingSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          delete: {
            args: Prisma.ParkingSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          update: {
            args: Prisma.ParkingSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          upsert: {
            args: Prisma.ParkingSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          aggregate: {
            args: Prisma.ParkingSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSlot>
          }
          groupBy: {
            args: Prisma.ParkingSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSlotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      ParkingAnalytics: {
        payload: Prisma.$ParkingAnalyticsPayload<ExtArgs>
        fields: Prisma.ParkingAnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingAnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingAnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingAnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingAnalyticsPayload>
          }
          findFirst: {
            args: Prisma.ParkingAnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingAnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingAnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingAnalyticsPayload>
          }
          findMany: {
            args: Prisma.ParkingAnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingAnalyticsPayload>[]
          }
          create: {
            args: Prisma.ParkingAnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingAnalyticsPayload>
          }
          createMany: {
            args: Prisma.ParkingAnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingAnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingAnalyticsPayload>[]
          }
          delete: {
            args: Prisma.ParkingAnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingAnalyticsPayload>
          }
          update: {
            args: Prisma.ParkingAnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingAnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.ParkingAnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingAnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingAnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingAnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.ParkingAnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingAnalyticsPayload>
          }
          aggregate: {
            args: Prisma.ParkingAnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingAnalytics>
          }
          groupBy: {
            args: Prisma.ParkingAnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingAnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingAnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingAnalyticsCountAggregateOutputType> | number
          }
        }
      }
      SystemSettings: {
        payload: Prisma.$SystemSettingsPayload<ExtArgs>
        fields: Prisma.SystemSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findMany: {
            args: Prisma.SystemSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          create: {
            args: Prisma.SystemSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          createMany: {
            args: Prisma.SystemSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          update: {
            args: Prisma.SystemSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSettings>
          }
          groupBy: {
            args: Prisma.SystemSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    userRole?: UserRoleOmit
    parkingLocation?: ParkingLocationOmit
    parkingSlot?: ParkingSlotOmit
    booking?: BookingOmit
    payment?: PaymentOmit
    notification?: NotificationOmit
    incident?: IncidentOmit
    parkingAnalytics?: ParkingAnalyticsOmit
    systemSettings?: SystemSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    bookings: number
    notifications: number
    payments: number
    userRoles: number
    incidents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    userRoles?: boolean | UserCountOutputTypeCountUserRolesArgs
    incidents?: boolean | UserCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Count Type ParkingLocationCountOutputType
   */

  export type ParkingLocationCountOutputType = {
    slots: number
    userRoles: number
    incidents: number
    analytics: number
  }

  export type ParkingLocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | ParkingLocationCountOutputTypeCountSlotsArgs
    userRoles?: boolean | ParkingLocationCountOutputTypeCountUserRolesArgs
    incidents?: boolean | ParkingLocationCountOutputTypeCountIncidentsArgs
    analytics?: boolean | ParkingLocationCountOutputTypeCountAnalyticsArgs
  }

  // Custom InputTypes
  /**
   * ParkingLocationCountOutputType without action
   */
  export type ParkingLocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocationCountOutputType
     */
    select?: ParkingLocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingLocationCountOutputType without action
   */
  export type ParkingLocationCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotWhereInput
  }

  /**
   * ParkingLocationCountOutputType without action
   */
  export type ParkingLocationCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * ParkingLocationCountOutputType without action
   */
  export type ParkingLocationCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * ParkingLocationCountOutputType without action
   */
  export type ParkingLocationCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingAnalyticsWhereInput
  }


  /**
   * Count Type ParkingSlotCountOutputType
   */

  export type ParkingSlotCountOutputType = {
    bookings: number
  }

  export type ParkingSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ParkingSlotCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotCountOutputType
     */
    select?: ParkingSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    incidents: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | BookingCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    incidents?: boolean | User$incidentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    incidents?: boolean | User$incidentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRoles<T extends User$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends User$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, User$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.userRoles
   */
  export type User$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.incidents
   */
  export type User$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    locationId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    role: string | null
    locationId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    locationId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    locationId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    locationId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    locationId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: string
    userId: string
    role: string
    locationId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    locationId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | UserRole$locationArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    locationId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | UserRole$locationArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    locationId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | UserRole$locationArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    locationId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "role" | "locationId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | UserRole$locationArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | UserRole$locationArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | UserRole$locationArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      location: Prisma.$ParkingLocationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      role: string
      locationId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends UserRole$locationArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$locationArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'String'>
    readonly userId: FieldRef<"UserRole", 'String'>
    readonly role: FieldRef<"UserRole", 'String'>
    readonly locationId: FieldRef<"UserRole", 'String'>
    readonly isActive: FieldRef<"UserRole", 'Boolean'>
    readonly createdAt: FieldRef<"UserRole", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole.location
   */
  export type UserRole$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLocationInclude<ExtArgs> | null
    where?: ParkingLocationWhereInput
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model ParkingLocation
   */

  export type AggregateParkingLocation = {
    _count: ParkingLocationCountAggregateOutputType | null
    _avg: ParkingLocationAvgAggregateOutputType | null
    _sum: ParkingLocationSumAggregateOutputType | null
    _min: ParkingLocationMinAggregateOutputType | null
    _max: ParkingLocationMaxAggregateOutputType | null
  }

  export type ParkingLocationAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ParkingLocationSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ParkingLocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    description: string | null
    features: string | null
    operatingHours: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingLocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    description: string | null
    features: string | null
    operatingHours: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingLocationCountAggregateOutputType = {
    id: number
    name: number
    address: number
    latitude: number
    longitude: number
    description: number
    features: number
    operatingHours: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingLocationAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ParkingLocationSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ParkingLocationMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    description?: true
    features?: true
    operatingHours?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingLocationMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    description?: true
    features?: true
    operatingHours?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingLocationCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    description?: true
    features?: true
    operatingHours?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLocation to aggregate.
     */
    where?: ParkingLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLocations to fetch.
     */
    orderBy?: ParkingLocationOrderByWithRelationInput | ParkingLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingLocations
    **/
    _count?: true | ParkingLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingLocationMaxAggregateInputType
  }

  export type GetParkingLocationAggregateType<T extends ParkingLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingLocation[P]>
      : GetScalarType<T[P], AggregateParkingLocation[P]>
  }




  export type ParkingLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLocationWhereInput
    orderBy?: ParkingLocationOrderByWithAggregationInput | ParkingLocationOrderByWithAggregationInput[]
    by: ParkingLocationScalarFieldEnum[] | ParkingLocationScalarFieldEnum
    having?: ParkingLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingLocationCountAggregateInputType | true
    _avg?: ParkingLocationAvgAggregateInputType
    _sum?: ParkingLocationSumAggregateInputType
    _min?: ParkingLocationMinAggregateInputType
    _max?: ParkingLocationMaxAggregateInputType
  }

  export type ParkingLocationGroupByOutputType = {
    id: string
    name: string
    address: string
    latitude: number | null
    longitude: number | null
    description: string | null
    features: string | null
    operatingHours: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ParkingLocationCountAggregateOutputType | null
    _avg: ParkingLocationAvgAggregateOutputType | null
    _sum: ParkingLocationSumAggregateOutputType | null
    _min: ParkingLocationMinAggregateOutputType | null
    _max: ParkingLocationMaxAggregateOutputType | null
  }

  type GetParkingLocationGroupByPayload<T extends ParkingLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingLocationGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingLocationGroupByOutputType[P]>
        }
      >
    >


  export type ParkingLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    features?: boolean
    operatingHours?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slots?: boolean | ParkingLocation$slotsArgs<ExtArgs>
    userRoles?: boolean | ParkingLocation$userRolesArgs<ExtArgs>
    incidents?: boolean | ParkingLocation$incidentsArgs<ExtArgs>
    analytics?: boolean | ParkingLocation$analyticsArgs<ExtArgs>
    _count?: boolean | ParkingLocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLocation"]>

  export type ParkingLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    features?: boolean
    operatingHours?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parkingLocation"]>

  export type ParkingLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    features?: boolean
    operatingHours?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parkingLocation"]>

  export type ParkingLocationSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    features?: boolean
    operatingHours?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "latitude" | "longitude" | "description" | "features" | "operatingHours" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingLocation"]>
  export type ParkingLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | ParkingLocation$slotsArgs<ExtArgs>
    userRoles?: boolean | ParkingLocation$userRolesArgs<ExtArgs>
    incidents?: boolean | ParkingLocation$incidentsArgs<ExtArgs>
    analytics?: boolean | ParkingLocation$analyticsArgs<ExtArgs>
    _count?: boolean | ParkingLocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParkingLocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParkingLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingLocation"
    objects: {
      slots: Prisma.$ParkingSlotPayload<ExtArgs>[]
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
      analytics: Prisma.$ParkingAnalyticsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      latitude: number | null
      longitude: number | null
      description: string | null
      features: string | null
      operatingHours: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkingLocation"]>
    composites: {}
  }

  type ParkingLocationGetPayload<S extends boolean | null | undefined | ParkingLocationDefaultArgs> = $Result.GetResult<Prisma.$ParkingLocationPayload, S>

  type ParkingLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingLocationCountAggregateInputType | true
    }

  export interface ParkingLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingLocation'], meta: { name: 'ParkingLocation' } }
    /**
     * Find zero or one ParkingLocation that matches the filter.
     * @param {ParkingLocationFindUniqueArgs} args - Arguments to find a ParkingLocation
     * @example
     * // Get one ParkingLocation
     * const parkingLocation = await prisma.parkingLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingLocationFindUniqueArgs>(args: SelectSubset<T, ParkingLocationFindUniqueArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingLocationFindUniqueOrThrowArgs} args - Arguments to find a ParkingLocation
     * @example
     * // Get one ParkingLocation
     * const parkingLocation = await prisma.parkingLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLocationFindFirstArgs} args - Arguments to find a ParkingLocation
     * @example
     * // Get one ParkingLocation
     * const parkingLocation = await prisma.parkingLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingLocationFindFirstArgs>(args?: SelectSubset<T, ParkingLocationFindFirstArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLocationFindFirstOrThrowArgs} args - Arguments to find a ParkingLocation
     * @example
     * // Get one ParkingLocation
     * const parkingLocation = await prisma.parkingLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingLocations
     * const parkingLocations = await prisma.parkingLocation.findMany()
     * 
     * // Get first 10 ParkingLocations
     * const parkingLocations = await prisma.parkingLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingLocationWithIdOnly = await prisma.parkingLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingLocationFindManyArgs>(args?: SelectSubset<T, ParkingLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingLocation.
     * @param {ParkingLocationCreateArgs} args - Arguments to create a ParkingLocation.
     * @example
     * // Create one ParkingLocation
     * const ParkingLocation = await prisma.parkingLocation.create({
     *   data: {
     *     // ... data to create a ParkingLocation
     *   }
     * })
     * 
     */
    create<T extends ParkingLocationCreateArgs>(args: SelectSubset<T, ParkingLocationCreateArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingLocations.
     * @param {ParkingLocationCreateManyArgs} args - Arguments to create many ParkingLocations.
     * @example
     * // Create many ParkingLocations
     * const parkingLocation = await prisma.parkingLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingLocationCreateManyArgs>(args?: SelectSubset<T, ParkingLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingLocations and returns the data saved in the database.
     * @param {ParkingLocationCreateManyAndReturnArgs} args - Arguments to create many ParkingLocations.
     * @example
     * // Create many ParkingLocations
     * const parkingLocation = await prisma.parkingLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingLocations and only return the `id`
     * const parkingLocationWithIdOnly = await prisma.parkingLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingLocation.
     * @param {ParkingLocationDeleteArgs} args - Arguments to delete one ParkingLocation.
     * @example
     * // Delete one ParkingLocation
     * const ParkingLocation = await prisma.parkingLocation.delete({
     *   where: {
     *     // ... filter to delete one ParkingLocation
     *   }
     * })
     * 
     */
    delete<T extends ParkingLocationDeleteArgs>(args: SelectSubset<T, ParkingLocationDeleteArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingLocation.
     * @param {ParkingLocationUpdateArgs} args - Arguments to update one ParkingLocation.
     * @example
     * // Update one ParkingLocation
     * const parkingLocation = await prisma.parkingLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingLocationUpdateArgs>(args: SelectSubset<T, ParkingLocationUpdateArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingLocations.
     * @param {ParkingLocationDeleteManyArgs} args - Arguments to filter ParkingLocations to delete.
     * @example
     * // Delete a few ParkingLocations
     * const { count } = await prisma.parkingLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingLocationDeleteManyArgs>(args?: SelectSubset<T, ParkingLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingLocations
     * const parkingLocation = await prisma.parkingLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingLocationUpdateManyArgs>(args: SelectSubset<T, ParkingLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLocations and returns the data updated in the database.
     * @param {ParkingLocationUpdateManyAndReturnArgs} args - Arguments to update many ParkingLocations.
     * @example
     * // Update many ParkingLocations
     * const parkingLocation = await prisma.parkingLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingLocations and only return the `id`
     * const parkingLocationWithIdOnly = await prisma.parkingLocation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingLocation.
     * @param {ParkingLocationUpsertArgs} args - Arguments to update or create a ParkingLocation.
     * @example
     * // Update or create a ParkingLocation
     * const parkingLocation = await prisma.parkingLocation.upsert({
     *   create: {
     *     // ... data to create a ParkingLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingLocation we want to update
     *   }
     * })
     */
    upsert<T extends ParkingLocationUpsertArgs>(args: SelectSubset<T, ParkingLocationUpsertArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLocationCountArgs} args - Arguments to filter ParkingLocations to count.
     * @example
     * // Count the number of ParkingLocations
     * const count = await prisma.parkingLocation.count({
     *   where: {
     *     // ... the filter for the ParkingLocations we want to count
     *   }
     * })
    **/
    count<T extends ParkingLocationCountArgs>(
      args?: Subset<T, ParkingLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingLocationAggregateArgs>(args: Subset<T, ParkingLocationAggregateArgs>): Prisma.PrismaPromise<GetParkingLocationAggregateType<T>>

    /**
     * Group by ParkingLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingLocationGroupByArgs['orderBy'] }
        : { orderBy?: ParkingLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingLocation model
   */
  readonly fields: ParkingLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slots<T extends ParkingLocation$slotsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLocation$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRoles<T extends ParkingLocation$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLocation$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends ParkingLocation$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLocation$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analytics<T extends ParkingLocation$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLocation$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingLocation model
   */
  interface ParkingLocationFieldRefs {
    readonly id: FieldRef<"ParkingLocation", 'String'>
    readonly name: FieldRef<"ParkingLocation", 'String'>
    readonly address: FieldRef<"ParkingLocation", 'String'>
    readonly latitude: FieldRef<"ParkingLocation", 'Float'>
    readonly longitude: FieldRef<"ParkingLocation", 'Float'>
    readonly description: FieldRef<"ParkingLocation", 'String'>
    readonly features: FieldRef<"ParkingLocation", 'String'>
    readonly operatingHours: FieldRef<"ParkingLocation", 'String'>
    readonly isActive: FieldRef<"ParkingLocation", 'Boolean'>
    readonly createdAt: FieldRef<"ParkingLocation", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingLocation findUnique
   */
  export type ParkingLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLocationInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLocation to fetch.
     */
    where: ParkingLocationWhereUniqueInput
  }

  /**
   * ParkingLocation findUniqueOrThrow
   */
  export type ParkingLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLocationInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLocation to fetch.
     */
    where: ParkingLocationWhereUniqueInput
  }

  /**
   * ParkingLocation findFirst
   */
  export type ParkingLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLocationInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLocation to fetch.
     */
    where?: ParkingLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLocations to fetch.
     */
    orderBy?: ParkingLocationOrderByWithRelationInput | ParkingLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLocations.
     */
    cursor?: ParkingLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLocations.
     */
    distinct?: ParkingLocationScalarFieldEnum | ParkingLocationScalarFieldEnum[]
  }

  /**
   * ParkingLocation findFirstOrThrow
   */
  export type ParkingLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLocationInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLocation to fetch.
     */
    where?: ParkingLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLocations to fetch.
     */
    orderBy?: ParkingLocationOrderByWithRelationInput | ParkingLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLocations.
     */
    cursor?: ParkingLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLocations.
     */
    distinct?: ParkingLocationScalarFieldEnum | ParkingLocationScalarFieldEnum[]
  }

  /**
   * ParkingLocation findMany
   */
  export type ParkingLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLocationInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLocations to fetch.
     */
    where?: ParkingLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLocations to fetch.
     */
    orderBy?: ParkingLocationOrderByWithRelationInput | ParkingLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingLocations.
     */
    cursor?: ParkingLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLocations.
     */
    skip?: number
    distinct?: ParkingLocationScalarFieldEnum | ParkingLocationScalarFieldEnum[]
  }

  /**
   * ParkingLocation create
   */
  export type ParkingLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingLocation.
     */
    data: XOR<ParkingLocationCreateInput, ParkingLocationUncheckedCreateInput>
  }

  /**
   * ParkingLocation createMany
   */
  export type ParkingLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingLocations.
     */
    data: ParkingLocationCreateManyInput | ParkingLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingLocation createManyAndReturn
   */
  export type ParkingLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingLocations.
     */
    data: ParkingLocationCreateManyInput | ParkingLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingLocation update
   */
  export type ParkingLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingLocation.
     */
    data: XOR<ParkingLocationUpdateInput, ParkingLocationUncheckedUpdateInput>
    /**
     * Choose, which ParkingLocation to update.
     */
    where: ParkingLocationWhereUniqueInput
  }

  /**
   * ParkingLocation updateMany
   */
  export type ParkingLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingLocations.
     */
    data: XOR<ParkingLocationUpdateManyMutationInput, ParkingLocationUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLocations to update
     */
    where?: ParkingLocationWhereInput
    /**
     * Limit how many ParkingLocations to update.
     */
    limit?: number
  }

  /**
   * ParkingLocation updateManyAndReturn
   */
  export type ParkingLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * The data used to update ParkingLocations.
     */
    data: XOR<ParkingLocationUpdateManyMutationInput, ParkingLocationUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLocations to update
     */
    where?: ParkingLocationWhereInput
    /**
     * Limit how many ParkingLocations to update.
     */
    limit?: number
  }

  /**
   * ParkingLocation upsert
   */
  export type ParkingLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingLocation to update in case it exists.
     */
    where: ParkingLocationWhereUniqueInput
    /**
     * In case the ParkingLocation found by the `where` argument doesn't exist, create a new ParkingLocation with this data.
     */
    create: XOR<ParkingLocationCreateInput, ParkingLocationUncheckedCreateInput>
    /**
     * In case the ParkingLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingLocationUpdateInput, ParkingLocationUncheckedUpdateInput>
  }

  /**
   * ParkingLocation delete
   */
  export type ParkingLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLocationInclude<ExtArgs> | null
    /**
     * Filter which ParkingLocation to delete.
     */
    where: ParkingLocationWhereUniqueInput
  }

  /**
   * ParkingLocation deleteMany
   */
  export type ParkingLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLocations to delete
     */
    where?: ParkingLocationWhereInput
    /**
     * Limit how many ParkingLocations to delete.
     */
    limit?: number
  }

  /**
   * ParkingLocation.slots
   */
  export type ParkingLocation$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    where?: ParkingSlotWhereInput
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    cursor?: ParkingSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingLocation.userRoles
   */
  export type ParkingLocation$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * ParkingLocation.incidents
   */
  export type ParkingLocation$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * ParkingLocation.analytics
   */
  export type ParkingLocation$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsInclude<ExtArgs> | null
    where?: ParkingAnalyticsWhereInput
    orderBy?: ParkingAnalyticsOrderByWithRelationInput | ParkingAnalyticsOrderByWithRelationInput[]
    cursor?: ParkingAnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingAnalyticsScalarFieldEnum | ParkingAnalyticsScalarFieldEnum[]
  }

  /**
   * ParkingLocation without action
   */
  export type ParkingLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLocation
     */
    select?: ParkingLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLocation
     */
    omit?: ParkingLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLocationInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSlot
   */

  export type AggregateParkingSlot = {
    _count: ParkingSlotCountAggregateOutputType | null
    _avg: ParkingSlotAvgAggregateOutputType | null
    _sum: ParkingSlotSumAggregateOutputType | null
    _min: ParkingSlotMinAggregateOutputType | null
    _max: ParkingSlotMaxAggregateOutputType | null
  }

  export type ParkingSlotAvgAggregateOutputType = {
    basePrice: number | null
  }

  export type ParkingSlotSumAggregateOutputType = {
    basePrice: number | null
  }

  export type ParkingSlotMinAggregateOutputType = {
    id: string | null
    slotNumber: string | null
    locationId: string | null
    type: string | null
    basePrice: number | null
    status: string | null
    features: string | null
    rules: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingSlotMaxAggregateOutputType = {
    id: string | null
    slotNumber: string | null
    locationId: string | null
    type: string | null
    basePrice: number | null
    status: string | null
    features: string | null
    rules: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingSlotCountAggregateOutputType = {
    id: number
    slotNumber: number
    locationId: number
    type: number
    basePrice: number
    status: number
    features: number
    rules: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingSlotAvgAggregateInputType = {
    basePrice?: true
  }

  export type ParkingSlotSumAggregateInputType = {
    basePrice?: true
  }

  export type ParkingSlotMinAggregateInputType = {
    id?: true
    slotNumber?: true
    locationId?: true
    type?: true
    basePrice?: true
    status?: true
    features?: true
    rules?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingSlotMaxAggregateInputType = {
    id?: true
    slotNumber?: true
    locationId?: true
    type?: true
    basePrice?: true
    status?: true
    features?: true
    rules?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingSlotCountAggregateInputType = {
    id?: true
    slotNumber?: true
    locationId?: true
    type?: true
    basePrice?: true
    status?: true
    features?: true
    rules?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlot to aggregate.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSlots
    **/
    _count?: true | ParkingSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSlotMaxAggregateInputType
  }

  export type GetParkingSlotAggregateType<T extends ParkingSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSlot[P]>
      : GetScalarType<T[P], AggregateParkingSlot[P]>
  }




  export type ParkingSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotWhereInput
    orderBy?: ParkingSlotOrderByWithAggregationInput | ParkingSlotOrderByWithAggregationInput[]
    by: ParkingSlotScalarFieldEnum[] | ParkingSlotScalarFieldEnum
    having?: ParkingSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSlotCountAggregateInputType | true
    _avg?: ParkingSlotAvgAggregateInputType
    _sum?: ParkingSlotSumAggregateInputType
    _min?: ParkingSlotMinAggregateInputType
    _max?: ParkingSlotMaxAggregateInputType
  }

  export type ParkingSlotGroupByOutputType = {
    id: string
    slotNumber: string
    locationId: string
    type: string
    basePrice: number
    status: string
    features: string | null
    rules: string | null
    createdAt: Date
    updatedAt: Date
    _count: ParkingSlotCountAggregateOutputType | null
    _avg: ParkingSlotAvgAggregateOutputType | null
    _sum: ParkingSlotSumAggregateOutputType | null
    _min: ParkingSlotMinAggregateOutputType | null
    _max: ParkingSlotMaxAggregateOutputType | null
  }

  type GetParkingSlotGroupByPayload<T extends ParkingSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSlotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSlotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    locationId?: boolean
    type?: boolean
    basePrice?: boolean
    status?: boolean
    features?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
    bookings?: boolean | ParkingSlot$bookingsArgs<ExtArgs>
    _count?: boolean | ParkingSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    locationId?: boolean
    type?: boolean
    basePrice?: boolean
    status?: boolean
    features?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    locationId?: boolean
    type?: boolean
    basePrice?: boolean
    status?: boolean
    features?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectScalar = {
    id?: boolean
    slotNumber?: boolean
    locationId?: boolean
    type?: boolean
    basePrice?: boolean
    status?: boolean
    features?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slotNumber" | "locationId" | "type" | "basePrice" | "status" | "features" | "rules" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingSlot"]>
  export type ParkingSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
    bookings?: boolean | ParkingSlot$bookingsArgs<ExtArgs>
    _count?: boolean | ParkingSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
  }
  export type ParkingSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
  }

  export type $ParkingSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSlot"
    objects: {
      location: Prisma.$ParkingLocationPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slotNumber: string
      locationId: string
      type: string
      basePrice: number
      status: string
      features: string | null
      rules: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkingSlot"]>
    composites: {}
  }

  type ParkingSlotGetPayload<S extends boolean | null | undefined | ParkingSlotDefaultArgs> = $Result.GetResult<Prisma.$ParkingSlotPayload, S>

  type ParkingSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingSlotCountAggregateInputType | true
    }

  export interface ParkingSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSlot'], meta: { name: 'ParkingSlot' } }
    /**
     * Find zero or one ParkingSlot that matches the filter.
     * @param {ParkingSlotFindUniqueArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSlotFindUniqueArgs>(args: SelectSubset<T, ParkingSlotFindUniqueArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingSlotFindUniqueOrThrowArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindFirstArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSlotFindFirstArgs>(args?: SelectSubset<T, ParkingSlotFindFirstArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindFirstOrThrowArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSlots
     * const parkingSlots = await prisma.parkingSlot.findMany()
     * 
     * // Get first 10 ParkingSlots
     * const parkingSlots = await prisma.parkingSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingSlotFindManyArgs>(args?: SelectSubset<T, ParkingSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingSlot.
     * @param {ParkingSlotCreateArgs} args - Arguments to create a ParkingSlot.
     * @example
     * // Create one ParkingSlot
     * const ParkingSlot = await prisma.parkingSlot.create({
     *   data: {
     *     // ... data to create a ParkingSlot
     *   }
     * })
     * 
     */
    create<T extends ParkingSlotCreateArgs>(args: SelectSubset<T, ParkingSlotCreateArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingSlots.
     * @param {ParkingSlotCreateManyArgs} args - Arguments to create many ParkingSlots.
     * @example
     * // Create many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSlotCreateManyArgs>(args?: SelectSubset<T, ParkingSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSlots and returns the data saved in the database.
     * @param {ParkingSlotCreateManyAndReturnArgs} args - Arguments to create many ParkingSlots.
     * @example
     * // Create many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSlots and only return the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingSlot.
     * @param {ParkingSlotDeleteArgs} args - Arguments to delete one ParkingSlot.
     * @example
     * // Delete one ParkingSlot
     * const ParkingSlot = await prisma.parkingSlot.delete({
     *   where: {
     *     // ... filter to delete one ParkingSlot
     *   }
     * })
     * 
     */
    delete<T extends ParkingSlotDeleteArgs>(args: SelectSubset<T, ParkingSlotDeleteArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingSlot.
     * @param {ParkingSlotUpdateArgs} args - Arguments to update one ParkingSlot.
     * @example
     * // Update one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSlotUpdateArgs>(args: SelectSubset<T, ParkingSlotUpdateArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingSlots.
     * @param {ParkingSlotDeleteManyArgs} args - Arguments to filter ParkingSlots to delete.
     * @example
     * // Delete a few ParkingSlots
     * const { count } = await prisma.parkingSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSlotDeleteManyArgs>(args?: SelectSubset<T, ParkingSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSlotUpdateManyArgs>(args: SelectSubset<T, ParkingSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlots and returns the data updated in the database.
     * @param {ParkingSlotUpdateManyAndReturnArgs} args - Arguments to update many ParkingSlots.
     * @example
     * // Update many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingSlots and only return the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingSlot.
     * @param {ParkingSlotUpsertArgs} args - Arguments to update or create a ParkingSlot.
     * @example
     * // Update or create a ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.upsert({
     *   create: {
     *     // ... data to create a ParkingSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSlot we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSlotUpsertArgs>(args: SelectSubset<T, ParkingSlotUpsertArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotCountArgs} args - Arguments to filter ParkingSlots to count.
     * @example
     * // Count the number of ParkingSlots
     * const count = await prisma.parkingSlot.count({
     *   where: {
     *     // ... the filter for the ParkingSlots we want to count
     *   }
     * })
    **/
    count<T extends ParkingSlotCountArgs>(
      args?: Subset<T, ParkingSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingSlotAggregateArgs>(args: Subset<T, ParkingSlotAggregateArgs>): Prisma.PrismaPromise<GetParkingSlotAggregateType<T>>

    /**
     * Group by ParkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSlotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSlot model
   */
  readonly fields: ParkingSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends ParkingLocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLocationDefaultArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends ParkingSlot$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlot$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingSlot model
   */
  interface ParkingSlotFieldRefs {
    readonly id: FieldRef<"ParkingSlot", 'String'>
    readonly slotNumber: FieldRef<"ParkingSlot", 'String'>
    readonly locationId: FieldRef<"ParkingSlot", 'String'>
    readonly type: FieldRef<"ParkingSlot", 'String'>
    readonly basePrice: FieldRef<"ParkingSlot", 'Float'>
    readonly status: FieldRef<"ParkingSlot", 'String'>
    readonly features: FieldRef<"ParkingSlot", 'String'>
    readonly rules: FieldRef<"ParkingSlot", 'String'>
    readonly createdAt: FieldRef<"ParkingSlot", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSlot findUnique
   */
  export type ParkingSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot findUniqueOrThrow
   */
  export type ParkingSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot findFirst
   */
  export type ParkingSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlots.
     */
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot findFirstOrThrow
   */
  export type ParkingSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlots.
     */
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot findMany
   */
  export type ParkingSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlots to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot create
   */
  export type ParkingSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSlot.
     */
    data: XOR<ParkingSlotCreateInput, ParkingSlotUncheckedCreateInput>
  }

  /**
   * ParkingSlot createMany
   */
  export type ParkingSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSlots.
     */
    data: ParkingSlotCreateManyInput | ParkingSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSlot createManyAndReturn
   */
  export type ParkingSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingSlots.
     */
    data: ParkingSlotCreateManyInput | ParkingSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSlot update
   */
  export type ParkingSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSlot.
     */
    data: XOR<ParkingSlotUpdateInput, ParkingSlotUncheckedUpdateInput>
    /**
     * Choose, which ParkingSlot to update.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot updateMany
   */
  export type ParkingSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSlots.
     */
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlots to update
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to update.
     */
    limit?: number
  }

  /**
   * ParkingSlot updateManyAndReturn
   */
  export type ParkingSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * The data used to update ParkingSlots.
     */
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlots to update
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSlot upsert
   */
  export type ParkingSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSlot to update in case it exists.
     */
    where: ParkingSlotWhereUniqueInput
    /**
     * In case the ParkingSlot found by the `where` argument doesn't exist, create a new ParkingSlot with this data.
     */
    create: XOR<ParkingSlotCreateInput, ParkingSlotUncheckedCreateInput>
    /**
     * In case the ParkingSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSlotUpdateInput, ParkingSlotUncheckedUpdateInput>
  }

  /**
   * ParkingSlot delete
   */
  export type ParkingSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter which ParkingSlot to delete.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot deleteMany
   */
  export type ParkingSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlots to delete
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to delete.
     */
    limit?: number
  }

  /**
   * ParkingSlot.bookings
   */
  export type ParkingSlot$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * ParkingSlot without action
   */
  export type ParkingSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    totalAmount: number | null
    extendedTimes: number | null
  }

  export type BookingSumAggregateOutputType = {
    totalAmount: number | null
    extendedTimes: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    slotId: string | null
    startTime: Date | null
    endTime: Date | null
    actualStartTime: Date | null
    actualEndTime: Date | null
    totalAmount: number | null
    status: string | null
    qrCode: string | null
    checkInCode: string | null
    extendedTimes: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    slotId: string | null
    startTime: Date | null
    endTime: Date | null
    actualStartTime: Date | null
    actualEndTime: Date | null
    totalAmount: number | null
    status: string | null
    qrCode: string | null
    checkInCode: string | null
    extendedTimes: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    slotId: number
    startTime: number
    endTime: number
    actualStartTime: number
    actualEndTime: number
    totalAmount: number
    status: number
    qrCode: number
    checkInCode: number
    extendedTimes: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    totalAmount?: true
    extendedTimes?: true
  }

  export type BookingSumAggregateInputType = {
    totalAmount?: true
    extendedTimes?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    slotId?: true
    startTime?: true
    endTime?: true
    actualStartTime?: true
    actualEndTime?: true
    totalAmount?: true
    status?: true
    qrCode?: true
    checkInCode?: true
    extendedTimes?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    slotId?: true
    startTime?: true
    endTime?: true
    actualStartTime?: true
    actualEndTime?: true
    totalAmount?: true
    status?: true
    qrCode?: true
    checkInCode?: true
    extendedTimes?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    slotId?: true
    startTime?: true
    endTime?: true
    actualStartTime?: true
    actualEndTime?: true
    totalAmount?: true
    status?: true
    qrCode?: true
    checkInCode?: true
    extendedTimes?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    slotId: string
    startTime: Date
    endTime: Date
    actualStartTime: Date | null
    actualEndTime: Date | null
    totalAmount: number
    status: string
    qrCode: string | null
    checkInCode: string | null
    extendedTimes: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    slotId?: boolean
    startTime?: boolean
    endTime?: boolean
    actualStartTime?: boolean
    actualEndTime?: boolean
    totalAmount?: boolean
    status?: boolean
    qrCode?: boolean
    checkInCode?: boolean
    extendedTimes?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    incidents?: boolean | Booking$incidentsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    slotId?: boolean
    startTime?: boolean
    endTime?: boolean
    actualStartTime?: boolean
    actualEndTime?: boolean
    totalAmount?: boolean
    status?: boolean
    qrCode?: boolean
    checkInCode?: boolean
    extendedTimes?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    slotId?: boolean
    startTime?: boolean
    endTime?: boolean
    actualStartTime?: boolean
    actualEndTime?: boolean
    totalAmount?: boolean
    status?: boolean
    qrCode?: boolean
    checkInCode?: boolean
    extendedTimes?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    slotId?: boolean
    startTime?: boolean
    endTime?: boolean
    actualStartTime?: boolean
    actualEndTime?: boolean
    totalAmount?: boolean
    status?: boolean
    qrCode?: boolean
    checkInCode?: boolean
    extendedTimes?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "slotId" | "startTime" | "endTime" | "actualStartTime" | "actualEndTime" | "totalAmount" | "status" | "qrCode" | "checkInCode" | "extendedTimes" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    incidents?: boolean | Booking$incidentsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      slot: Prisma.$ParkingSlotPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      slotId: string
      startTime: Date
      endTime: Date
      actualStartTime: Date | null
      actualEndTime: Date | null
      totalAmount: number
      status: string
      qrCode: string | null
      checkInCode: string | null
      extendedTimes: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slot<T extends ParkingSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlotDefaultArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Booking$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    incidents<T extends Booking$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly slotId: FieldRef<"Booking", 'String'>
    readonly startTime: FieldRef<"Booking", 'DateTime'>
    readonly endTime: FieldRef<"Booking", 'DateTime'>
    readonly actualStartTime: FieldRef<"Booking", 'DateTime'>
    readonly actualEndTime: FieldRef<"Booking", 'DateTime'>
    readonly totalAmount: FieldRef<"Booking", 'Float'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly qrCode: FieldRef<"Booking", 'String'>
    readonly checkInCode: FieldRef<"Booking", 'String'>
    readonly extendedTimes: FieldRef<"Booking", 'Int'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.payment
   */
  export type Booking$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Booking.incidents
   */
  export type Booking$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bookingId: string | null
    amount: number | null
    method: string | null
    status: string | null
    transactionId: string | null
    gatewayResponse: string | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bookingId: string | null
    amount: number | null
    method: string | null
    status: string | null
    transactionId: string | null
    gatewayResponse: string | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    bookingId: number
    amount: number
    method: number
    status: number
    transactionId: number
    gatewayResponse: number
    paidAt: number
    refundedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
    amount?: true
    method?: true
    status?: true
    transactionId?: true
    gatewayResponse?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
    amount?: true
    method?: true
    status?: true
    transactionId?: true
    gatewayResponse?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
    amount?: true
    method?: true
    status?: true
    transactionId?: true
    gatewayResponse?: true
    paidAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    bookingId: string
    amount: number
    method: string
    status: string
    transactionId: string | null
    gatewayResponse: string | null
    paidAt: Date | null
    refundedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    transactionId?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    transactionId?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    transactionId?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    transactionId?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookingId" | "amount" | "method" | "status" | "transactionId" | "gatewayResponse" | "paidAt" | "refundedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bookingId: string
      amount: number
      method: string
      status: string
      transactionId: string | null
      gatewayResponse: string | null
      paidAt: Date | null
      refundedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly bookingId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly gatewayResponse: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly refundedAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    priority: string | null
    isRead: boolean | null
    readAt: Date | null
    data: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    priority: string | null
    isRead: boolean | null
    readAt: Date | null
    data: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    type: number
    priority: number
    isRead: number
    readAt: number
    data: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    priority?: true
    isRead?: true
    readAt?: true
    data?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    priority?: true
    isRead?: true
    readAt?: true
    data?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    priority?: true
    isRead?: true
    readAt?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    type: string
    priority: string
    isRead: boolean
    readAt: Date | null
    data: string | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    priority?: boolean
    isRead?: boolean
    readAt?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    priority?: boolean
    isRead?: boolean
    readAt?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    priority?: boolean
    isRead?: boolean
    readAt?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    priority?: boolean
    isRead?: boolean
    readAt?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "type" | "priority" | "isRead" | "readAt" | "data" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      type: string
      priority: string
      isRead: boolean
      readAt: Date | null
      data: string | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly priority: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly data: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    locationId: string | null
    reporterId: string | null
    type: string | null
    severity: string | null
    title: string | null
    description: string | null
    status: string | null
    resolution: string | null
    resolvedBy: string | null
    resolvedAt: Date | null
    images: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    locationId: string | null
    reporterId: string | null
    type: string | null
    severity: string | null
    title: string | null
    description: string | null
    status: string | null
    resolution: string | null
    resolvedBy: string | null
    resolvedAt: Date | null
    images: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    bookingId: number
    locationId: number
    reporterId: number
    type: number
    severity: number
    title: number
    description: number
    status: number
    resolution: number
    resolvedBy: number
    resolvedAt: number
    images: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IncidentMinAggregateInputType = {
    id?: true
    bookingId?: true
    locationId?: true
    reporterId?: true
    type?: true
    severity?: true
    title?: true
    description?: true
    status?: true
    resolution?: true
    resolvedBy?: true
    resolvedAt?: true
    images?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    bookingId?: true
    locationId?: true
    reporterId?: true
    type?: true
    severity?: true
    title?: true
    description?: true
    status?: true
    resolution?: true
    resolvedBy?: true
    resolvedAt?: true
    images?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    bookingId?: true
    locationId?: true
    reporterId?: true
    type?: true
    severity?: true
    title?: true
    description?: true
    status?: true
    resolution?: true
    resolvedBy?: true
    resolvedAt?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: string
    bookingId: string | null
    locationId: string
    reporterId: string
    type: string
    severity: string
    title: string
    description: string
    status: string
    resolution: string | null
    resolvedBy: string | null
    resolvedAt: Date | null
    images: string | null
    createdAt: Date
    updatedAt: Date
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    locationId?: boolean
    reporterId?: boolean
    type?: boolean
    severity?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    resolution?: boolean
    resolvedBy?: boolean
    resolvedAt?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | Incident$bookingArgs<ExtArgs>
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    locationId?: boolean
    reporterId?: boolean
    type?: boolean
    severity?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    resolution?: boolean
    resolvedBy?: boolean
    resolvedAt?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | Incident$bookingArgs<ExtArgs>
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    locationId?: boolean
    reporterId?: boolean
    type?: boolean
    severity?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    resolution?: boolean
    resolvedBy?: boolean
    resolvedAt?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | Incident$bookingArgs<ExtArgs>
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    bookingId?: boolean
    locationId?: boolean
    reporterId?: boolean
    type?: boolean
    severity?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    resolution?: boolean
    resolvedBy?: boolean
    resolvedAt?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "locationId" | "reporterId" | "type" | "severity" | "title" | "description" | "status" | "resolution" | "resolvedBy" | "resolvedAt" | "images" | "createdAt" | "updatedAt", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | Incident$bookingArgs<ExtArgs>
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | Incident$bookingArgs<ExtArgs>
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | Incident$bookingArgs<ExtArgs>
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs> | null
      location: Prisma.$ParkingLocationPayload<ExtArgs>
      reporter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string | null
      locationId: string
      reporterId: string
      type: string
      severity: string
      title: string
      description: string
      status: string
      resolution: string | null
      resolvedBy: string | null
      resolvedAt: Date | null
      images: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends Incident$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Incident$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    location<T extends ParkingLocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLocationDefaultArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reporter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'String'>
    readonly bookingId: FieldRef<"Incident", 'String'>
    readonly locationId: FieldRef<"Incident", 'String'>
    readonly reporterId: FieldRef<"Incident", 'String'>
    readonly type: FieldRef<"Incident", 'String'>
    readonly severity: FieldRef<"Incident", 'String'>
    readonly title: FieldRef<"Incident", 'String'>
    readonly description: FieldRef<"Incident", 'String'>
    readonly status: FieldRef<"Incident", 'String'>
    readonly resolution: FieldRef<"Incident", 'String'>
    readonly resolvedBy: FieldRef<"Incident", 'String'>
    readonly resolvedAt: FieldRef<"Incident", 'DateTime'>
    readonly images: FieldRef<"Incident", 'String'>
    readonly createdAt: FieldRef<"Incident", 'DateTime'>
    readonly updatedAt: FieldRef<"Incident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident.booking
   */
  export type Incident$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model ParkingAnalytics
   */

  export type AggregateParkingAnalytics = {
    _count: ParkingAnalyticsCountAggregateOutputType | null
    _avg: ParkingAnalyticsAvgAggregateOutputType | null
    _sum: ParkingAnalyticsSumAggregateOutputType | null
    _min: ParkingAnalyticsMinAggregateOutputType | null
    _max: ParkingAnalyticsMaxAggregateOutputType | null
  }

  export type ParkingAnalyticsAvgAggregateOutputType = {
    totalSlots: number | null
    occupiedSlots: number | null
    totalBookings: number | null
    totalRevenue: number | null
    averageStayTime: number | null
  }

  export type ParkingAnalyticsSumAggregateOutputType = {
    totalSlots: number | null
    occupiedSlots: number | null
    totalBookings: number | null
    totalRevenue: number | null
    averageStayTime: number | null
  }

  export type ParkingAnalyticsMinAggregateOutputType = {
    id: string | null
    locationId: string | null
    date: Date | null
    totalSlots: number | null
    occupiedSlots: number | null
    totalBookings: number | null
    totalRevenue: number | null
    averageStayTime: number | null
    peakHours: string | null
    createdAt: Date | null
  }

  export type ParkingAnalyticsMaxAggregateOutputType = {
    id: string | null
    locationId: string | null
    date: Date | null
    totalSlots: number | null
    occupiedSlots: number | null
    totalBookings: number | null
    totalRevenue: number | null
    averageStayTime: number | null
    peakHours: string | null
    createdAt: Date | null
  }

  export type ParkingAnalyticsCountAggregateOutputType = {
    id: number
    locationId: number
    date: number
    totalSlots: number
    occupiedSlots: number
    totalBookings: number
    totalRevenue: number
    averageStayTime: number
    peakHours: number
    createdAt: number
    _all: number
  }


  export type ParkingAnalyticsAvgAggregateInputType = {
    totalSlots?: true
    occupiedSlots?: true
    totalBookings?: true
    totalRevenue?: true
    averageStayTime?: true
  }

  export type ParkingAnalyticsSumAggregateInputType = {
    totalSlots?: true
    occupiedSlots?: true
    totalBookings?: true
    totalRevenue?: true
    averageStayTime?: true
  }

  export type ParkingAnalyticsMinAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    totalSlots?: true
    occupiedSlots?: true
    totalBookings?: true
    totalRevenue?: true
    averageStayTime?: true
    peakHours?: true
    createdAt?: true
  }

  export type ParkingAnalyticsMaxAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    totalSlots?: true
    occupiedSlots?: true
    totalBookings?: true
    totalRevenue?: true
    averageStayTime?: true
    peakHours?: true
    createdAt?: true
  }

  export type ParkingAnalyticsCountAggregateInputType = {
    id?: true
    locationId?: true
    date?: true
    totalSlots?: true
    occupiedSlots?: true
    totalBookings?: true
    totalRevenue?: true
    averageStayTime?: true
    peakHours?: true
    createdAt?: true
    _all?: true
  }

  export type ParkingAnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingAnalytics to aggregate.
     */
    where?: ParkingAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingAnalytics to fetch.
     */
    orderBy?: ParkingAnalyticsOrderByWithRelationInput | ParkingAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingAnalytics
    **/
    _count?: true | ParkingAnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingAnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingAnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingAnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingAnalyticsMaxAggregateInputType
  }

  export type GetParkingAnalyticsAggregateType<T extends ParkingAnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingAnalytics[P]>
      : GetScalarType<T[P], AggregateParkingAnalytics[P]>
  }




  export type ParkingAnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingAnalyticsWhereInput
    orderBy?: ParkingAnalyticsOrderByWithAggregationInput | ParkingAnalyticsOrderByWithAggregationInput[]
    by: ParkingAnalyticsScalarFieldEnum[] | ParkingAnalyticsScalarFieldEnum
    having?: ParkingAnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingAnalyticsCountAggregateInputType | true
    _avg?: ParkingAnalyticsAvgAggregateInputType
    _sum?: ParkingAnalyticsSumAggregateInputType
    _min?: ParkingAnalyticsMinAggregateInputType
    _max?: ParkingAnalyticsMaxAggregateInputType
  }

  export type ParkingAnalyticsGroupByOutputType = {
    id: string
    locationId: string
    date: Date
    totalSlots: number
    occupiedSlots: number
    totalBookings: number
    totalRevenue: number
    averageStayTime: number | null
    peakHours: string | null
    createdAt: Date
    _count: ParkingAnalyticsCountAggregateOutputType | null
    _avg: ParkingAnalyticsAvgAggregateOutputType | null
    _sum: ParkingAnalyticsSumAggregateOutputType | null
    _min: ParkingAnalyticsMinAggregateOutputType | null
    _max: ParkingAnalyticsMaxAggregateOutputType | null
  }

  type GetParkingAnalyticsGroupByPayload<T extends ParkingAnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingAnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingAnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingAnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingAnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type ParkingAnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    date?: boolean
    totalSlots?: boolean
    occupiedSlots?: boolean
    totalBookings?: boolean
    totalRevenue?: boolean
    averageStayTime?: boolean
    peakHours?: boolean
    createdAt?: boolean
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingAnalytics"]>

  export type ParkingAnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    date?: boolean
    totalSlots?: boolean
    occupiedSlots?: boolean
    totalBookings?: boolean
    totalRevenue?: boolean
    averageStayTime?: boolean
    peakHours?: boolean
    createdAt?: boolean
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingAnalytics"]>

  export type ParkingAnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    date?: boolean
    totalSlots?: boolean
    occupiedSlots?: boolean
    totalBookings?: boolean
    totalRevenue?: boolean
    averageStayTime?: boolean
    peakHours?: boolean
    createdAt?: boolean
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingAnalytics"]>

  export type ParkingAnalyticsSelectScalar = {
    id?: boolean
    locationId?: boolean
    date?: boolean
    totalSlots?: boolean
    occupiedSlots?: boolean
    totalBookings?: boolean
    totalRevenue?: boolean
    averageStayTime?: boolean
    peakHours?: boolean
    createdAt?: boolean
  }

  export type ParkingAnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationId" | "date" | "totalSlots" | "occupiedSlots" | "totalBookings" | "totalRevenue" | "averageStayTime" | "peakHours" | "createdAt", ExtArgs["result"]["parkingAnalytics"]>
  export type ParkingAnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
  }
  export type ParkingAnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
  }
  export type ParkingAnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | ParkingLocationDefaultArgs<ExtArgs>
  }

  export type $ParkingAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingAnalytics"
    objects: {
      location: Prisma.$ParkingLocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locationId: string
      date: Date
      totalSlots: number
      occupiedSlots: number
      totalBookings: number
      totalRevenue: number
      averageStayTime: number | null
      peakHours: string | null
      createdAt: Date
    }, ExtArgs["result"]["parkingAnalytics"]>
    composites: {}
  }

  type ParkingAnalyticsGetPayload<S extends boolean | null | undefined | ParkingAnalyticsDefaultArgs> = $Result.GetResult<Prisma.$ParkingAnalyticsPayload, S>

  type ParkingAnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingAnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingAnalyticsCountAggregateInputType | true
    }

  export interface ParkingAnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingAnalytics'], meta: { name: 'ParkingAnalytics' } }
    /**
     * Find zero or one ParkingAnalytics that matches the filter.
     * @param {ParkingAnalyticsFindUniqueArgs} args - Arguments to find a ParkingAnalytics
     * @example
     * // Get one ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingAnalyticsFindUniqueArgs>(args: SelectSubset<T, ParkingAnalyticsFindUniqueArgs<ExtArgs>>): Prisma__ParkingAnalyticsClient<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingAnalytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a ParkingAnalytics
     * @example
     * // Get one ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingAnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingAnalyticsClient<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAnalyticsFindFirstArgs} args - Arguments to find a ParkingAnalytics
     * @example
     * // Get one ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingAnalyticsFindFirstArgs>(args?: SelectSubset<T, ParkingAnalyticsFindFirstArgs<ExtArgs>>): Prisma__ParkingAnalyticsClient<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAnalyticsFindFirstOrThrowArgs} args - Arguments to find a ParkingAnalytics
     * @example
     * // Get one ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingAnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingAnalyticsClient<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.findMany()
     * 
     * // Get first 10 ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingAnalyticsWithIdOnly = await prisma.parkingAnalytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingAnalyticsFindManyArgs>(args?: SelectSubset<T, ParkingAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingAnalytics.
     * @param {ParkingAnalyticsCreateArgs} args - Arguments to create a ParkingAnalytics.
     * @example
     * // Create one ParkingAnalytics
     * const ParkingAnalytics = await prisma.parkingAnalytics.create({
     *   data: {
     *     // ... data to create a ParkingAnalytics
     *   }
     * })
     * 
     */
    create<T extends ParkingAnalyticsCreateArgs>(args: SelectSubset<T, ParkingAnalyticsCreateArgs<ExtArgs>>): Prisma__ParkingAnalyticsClient<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingAnalytics.
     * @param {ParkingAnalyticsCreateManyArgs} args - Arguments to create many ParkingAnalytics.
     * @example
     * // Create many ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingAnalyticsCreateManyArgs>(args?: SelectSubset<T, ParkingAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingAnalytics and returns the data saved in the database.
     * @param {ParkingAnalyticsCreateManyAndReturnArgs} args - Arguments to create many ParkingAnalytics.
     * @example
     * // Create many ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingAnalytics and only return the `id`
     * const parkingAnalyticsWithIdOnly = await prisma.parkingAnalytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingAnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingAnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingAnalytics.
     * @param {ParkingAnalyticsDeleteArgs} args - Arguments to delete one ParkingAnalytics.
     * @example
     * // Delete one ParkingAnalytics
     * const ParkingAnalytics = await prisma.parkingAnalytics.delete({
     *   where: {
     *     // ... filter to delete one ParkingAnalytics
     *   }
     * })
     * 
     */
    delete<T extends ParkingAnalyticsDeleteArgs>(args: SelectSubset<T, ParkingAnalyticsDeleteArgs<ExtArgs>>): Prisma__ParkingAnalyticsClient<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingAnalytics.
     * @param {ParkingAnalyticsUpdateArgs} args - Arguments to update one ParkingAnalytics.
     * @example
     * // Update one ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingAnalyticsUpdateArgs>(args: SelectSubset<T, ParkingAnalyticsUpdateArgs<ExtArgs>>): Prisma__ParkingAnalyticsClient<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingAnalytics.
     * @param {ParkingAnalyticsDeleteManyArgs} args - Arguments to filter ParkingAnalytics to delete.
     * @example
     * // Delete a few ParkingAnalytics
     * const { count } = await prisma.parkingAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingAnalyticsDeleteManyArgs>(args?: SelectSubset<T, ParkingAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingAnalyticsUpdateManyArgs>(args: SelectSubset<T, ParkingAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingAnalytics and returns the data updated in the database.
     * @param {ParkingAnalyticsUpdateManyAndReturnArgs} args - Arguments to update many ParkingAnalytics.
     * @example
     * // Update many ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingAnalytics and only return the `id`
     * const parkingAnalyticsWithIdOnly = await prisma.parkingAnalytics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingAnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingAnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingAnalytics.
     * @param {ParkingAnalyticsUpsertArgs} args - Arguments to update or create a ParkingAnalytics.
     * @example
     * // Update or create a ParkingAnalytics
     * const parkingAnalytics = await prisma.parkingAnalytics.upsert({
     *   create: {
     *     // ... data to create a ParkingAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends ParkingAnalyticsUpsertArgs>(args: SelectSubset<T, ParkingAnalyticsUpsertArgs<ExtArgs>>): Prisma__ParkingAnalyticsClient<$Result.GetResult<Prisma.$ParkingAnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAnalyticsCountArgs} args - Arguments to filter ParkingAnalytics to count.
     * @example
     * // Count the number of ParkingAnalytics
     * const count = await prisma.parkingAnalytics.count({
     *   where: {
     *     // ... the filter for the ParkingAnalytics we want to count
     *   }
     * })
    **/
    count<T extends ParkingAnalyticsCountArgs>(
      args?: Subset<T, ParkingAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingAnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingAnalyticsAggregateArgs>(args: Subset<T, ParkingAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetParkingAnalyticsAggregateType<T>>

    /**
     * Group by ParkingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAnalyticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingAnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: ParkingAnalyticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingAnalytics model
   */
  readonly fields: ParkingAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingAnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends ParkingLocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLocationDefaultArgs<ExtArgs>>): Prisma__ParkingLocationClient<$Result.GetResult<Prisma.$ParkingLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingAnalytics model
   */
  interface ParkingAnalyticsFieldRefs {
    readonly id: FieldRef<"ParkingAnalytics", 'String'>
    readonly locationId: FieldRef<"ParkingAnalytics", 'String'>
    readonly date: FieldRef<"ParkingAnalytics", 'DateTime'>
    readonly totalSlots: FieldRef<"ParkingAnalytics", 'Int'>
    readonly occupiedSlots: FieldRef<"ParkingAnalytics", 'Int'>
    readonly totalBookings: FieldRef<"ParkingAnalytics", 'Int'>
    readonly totalRevenue: FieldRef<"ParkingAnalytics", 'Float'>
    readonly averageStayTime: FieldRef<"ParkingAnalytics", 'Float'>
    readonly peakHours: FieldRef<"ParkingAnalytics", 'String'>
    readonly createdAt: FieldRef<"ParkingAnalytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingAnalytics findUnique
   */
  export type ParkingAnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ParkingAnalytics to fetch.
     */
    where: ParkingAnalyticsWhereUniqueInput
  }

  /**
   * ParkingAnalytics findUniqueOrThrow
   */
  export type ParkingAnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ParkingAnalytics to fetch.
     */
    where: ParkingAnalyticsWhereUniqueInput
  }

  /**
   * ParkingAnalytics findFirst
   */
  export type ParkingAnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ParkingAnalytics to fetch.
     */
    where?: ParkingAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingAnalytics to fetch.
     */
    orderBy?: ParkingAnalyticsOrderByWithRelationInput | ParkingAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingAnalytics.
     */
    cursor?: ParkingAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingAnalytics.
     */
    distinct?: ParkingAnalyticsScalarFieldEnum | ParkingAnalyticsScalarFieldEnum[]
  }

  /**
   * ParkingAnalytics findFirstOrThrow
   */
  export type ParkingAnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ParkingAnalytics to fetch.
     */
    where?: ParkingAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingAnalytics to fetch.
     */
    orderBy?: ParkingAnalyticsOrderByWithRelationInput | ParkingAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingAnalytics.
     */
    cursor?: ParkingAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingAnalytics.
     */
    distinct?: ParkingAnalyticsScalarFieldEnum | ParkingAnalyticsScalarFieldEnum[]
  }

  /**
   * ParkingAnalytics findMany
   */
  export type ParkingAnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which ParkingAnalytics to fetch.
     */
    where?: ParkingAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingAnalytics to fetch.
     */
    orderBy?: ParkingAnalyticsOrderByWithRelationInput | ParkingAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingAnalytics.
     */
    cursor?: ParkingAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingAnalytics.
     */
    skip?: number
    distinct?: ParkingAnalyticsScalarFieldEnum | ParkingAnalyticsScalarFieldEnum[]
  }

  /**
   * ParkingAnalytics create
   */
  export type ParkingAnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingAnalytics.
     */
    data: XOR<ParkingAnalyticsCreateInput, ParkingAnalyticsUncheckedCreateInput>
  }

  /**
   * ParkingAnalytics createMany
   */
  export type ParkingAnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingAnalytics.
     */
    data: ParkingAnalyticsCreateManyInput | ParkingAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingAnalytics createManyAndReturn
   */
  export type ParkingAnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingAnalytics.
     */
    data: ParkingAnalyticsCreateManyInput | ParkingAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingAnalytics update
   */
  export type ParkingAnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingAnalytics.
     */
    data: XOR<ParkingAnalyticsUpdateInput, ParkingAnalyticsUncheckedUpdateInput>
    /**
     * Choose, which ParkingAnalytics to update.
     */
    where: ParkingAnalyticsWhereUniqueInput
  }

  /**
   * ParkingAnalytics updateMany
   */
  export type ParkingAnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingAnalytics.
     */
    data: XOR<ParkingAnalyticsUpdateManyMutationInput, ParkingAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which ParkingAnalytics to update
     */
    where?: ParkingAnalyticsWhereInput
    /**
     * Limit how many ParkingAnalytics to update.
     */
    limit?: number
  }

  /**
   * ParkingAnalytics updateManyAndReturn
   */
  export type ParkingAnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update ParkingAnalytics.
     */
    data: XOR<ParkingAnalyticsUpdateManyMutationInput, ParkingAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which ParkingAnalytics to update
     */
    where?: ParkingAnalyticsWhereInput
    /**
     * Limit how many ParkingAnalytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingAnalytics upsert
   */
  export type ParkingAnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingAnalytics to update in case it exists.
     */
    where: ParkingAnalyticsWhereUniqueInput
    /**
     * In case the ParkingAnalytics found by the `where` argument doesn't exist, create a new ParkingAnalytics with this data.
     */
    create: XOR<ParkingAnalyticsCreateInput, ParkingAnalyticsUncheckedCreateInput>
    /**
     * In case the ParkingAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingAnalyticsUpdateInput, ParkingAnalyticsUncheckedUpdateInput>
  }

  /**
   * ParkingAnalytics delete
   */
  export type ParkingAnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter which ParkingAnalytics to delete.
     */
    where: ParkingAnalyticsWhereUniqueInput
  }

  /**
   * ParkingAnalytics deleteMany
   */
  export type ParkingAnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingAnalytics to delete
     */
    where?: ParkingAnalyticsWhereInput
    /**
     * Limit how many ParkingAnalytics to delete.
     */
    limit?: number
  }

  /**
   * ParkingAnalytics without action
   */
  export type ParkingAnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingAnalytics
     */
    select?: ParkingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingAnalytics
     */
    omit?: ParkingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingAnalyticsInclude<ExtArgs> | null
  }


  /**
   * Model SystemSettings
   */

  export type AggregateSystemSettings = {
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  export type SystemSettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    isActive: boolean | null
    updatedBy: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type SystemSettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    isActive: boolean | null
    updatedBy: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type SystemSettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    isActive: number
    updatedBy: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type SystemSettingsMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    isActive?: true
    updatedBy?: true
    updatedAt?: true
    createdAt?: true
  }

  export type SystemSettingsMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    isActive?: true
    updatedBy?: true
    updatedAt?: true
    createdAt?: true
  }

  export type SystemSettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    isActive?: true
    updatedBy?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type SystemSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to aggregate.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type GetSystemSettingsAggregateType<T extends SystemSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSettings[P]>
      : GetScalarType<T[P], AggregateSystemSettings[P]>
  }




  export type SystemSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingsWhereInput
    orderBy?: SystemSettingsOrderByWithAggregationInput | SystemSettingsOrderByWithAggregationInput[]
    by: SystemSettingsScalarFieldEnum[] | SystemSettingsScalarFieldEnum
    having?: SystemSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingsCountAggregateInputType | true
    _min?: SystemSettingsMinAggregateInputType
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type SystemSettingsGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string | null
    isActive: boolean
    updatedBy: string | null
    updatedAt: Date
    createdAt: Date
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  type GetSystemSettingsGroupByPayload<T extends SystemSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isActive?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isActive?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isActive?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isActive?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type SystemSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description" | "isActive" | "updatedBy" | "updatedAt" | "createdAt", ExtArgs["result"]["systemSettings"]>

  export type $SystemSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string | null
      isActive: boolean
      updatedBy: string | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["systemSettings"]>
    composites: {}
  }

  type SystemSettingsGetPayload<S extends boolean | null | undefined | SystemSettingsDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingsPayload, S>

  type SystemSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingsCountAggregateInputType | true
    }

  export interface SystemSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSettings'], meta: { name: 'SystemSettings' } }
    /**
     * Find zero or one SystemSettings that matches the filter.
     * @param {SystemSettingsFindUniqueArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingsFindUniqueArgs>(args: SelectSubset<T, SystemSettingsFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingsFindUniqueOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingsFindFirstArgs>(args?: SelectSubset<T, SystemSettingsFindFirstArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingsFindManyArgs>(args?: SelectSubset<T, SystemSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSettings.
     * @param {SystemSettingsCreateArgs} args - Arguments to create a SystemSettings.
     * @example
     * // Create one SystemSettings
     * const SystemSettings = await prisma.systemSettings.create({
     *   data: {
     *     // ... data to create a SystemSettings
     *   }
     * })
     * 
     */
    create<T extends SystemSettingsCreateArgs>(args: SelectSubset<T, SystemSettingsCreateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingsCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingsCreateManyArgs>(args?: SelectSubset<T, SystemSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingsCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSettings.
     * @param {SystemSettingsDeleteArgs} args - Arguments to delete one SystemSettings.
     * @example
     * // Delete one SystemSettings
     * const SystemSettings = await prisma.systemSettings.delete({
     *   where: {
     *     // ... filter to delete one SystemSettings
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingsDeleteArgs>(args: SelectSubset<T, SystemSettingsDeleteArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSettings.
     * @param {SystemSettingsUpdateArgs} args - Arguments to update one SystemSettings.
     * @example
     * // Update one SystemSettings
     * const systemSettings = await prisma.systemSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingsUpdateArgs>(args: SelectSubset<T, SystemSettingsUpdateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingsDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingsDeleteManyArgs>(args?: SelectSubset<T, SystemSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingsUpdateManyArgs>(args: SelectSubset<T, SystemSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingsUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSettings.
     * @param {SystemSettingsUpsertArgs} args - Arguments to update or create a SystemSettings.
     * @example
     * // Update or create a SystemSettings
     * const systemSettings = await prisma.systemSettings.upsert({
     *   create: {
     *     // ... data to create a SystemSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSettings we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingsUpsertArgs>(args: SelectSubset<T, SystemSettingsUpsertArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSettings.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingsCountArgs>(
      args?: Subset<T, SystemSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemSettingsAggregateArgs>(args: Subset<T, SystemSettingsAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingsAggregateType<T>>

    /**
     * Group by SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSettings model
   */
  readonly fields: SystemSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemSettings model
   */
  interface SystemSettingsFieldRefs {
    readonly id: FieldRef<"SystemSettings", 'String'>
    readonly key: FieldRef<"SystemSettings", 'String'>
    readonly value: FieldRef<"SystemSettings", 'String'>
    readonly description: FieldRef<"SystemSettings", 'String'>
    readonly isActive: FieldRef<"SystemSettings", 'Boolean'>
    readonly updatedBy: FieldRef<"SystemSettings", 'String'>
    readonly updatedAt: FieldRef<"SystemSettings", 'DateTime'>
    readonly createdAt: FieldRef<"SystemSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSettings findUnique
   */
  export type SystemSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findUniqueOrThrow
   */
  export type SystemSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findFirst
   */
  export type SystemSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findFirstOrThrow
   */
  export type SystemSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findMany
   */
  export type SystemSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings create
   */
  export type SystemSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSettings.
     */
    data: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
  }

  /**
   * SystemSettings createMany
   */
  export type SystemSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings createManyAndReturn
   */
  export type SystemSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings update
   */
  export type SystemSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSettings.
     */
    data: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
    /**
     * Choose, which SystemSettings to update.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings updateMany
   */
  export type SystemSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings updateManyAndReturn
   */
  export type SystemSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings upsert
   */
  export type SystemSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSettings to update in case it exists.
     */
    where: SystemSettingsWhereUniqueInput
    /**
     * In case the SystemSettings found by the `where` argument doesn't exist, create a new SystemSettings with this data.
     */
    create: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
    /**
     * In case the SystemSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
  }

  /**
   * SystemSettings delete
   */
  export type SystemSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter which SystemSettings to delete.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings deleteMany
   */
  export type SystemSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSettings without action
   */
  export type SystemSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    locationId: 'locationId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const ParkingLocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    description: 'description',
    features: 'features',
    operatingHours: 'operatingHours',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingLocationScalarFieldEnum = (typeof ParkingLocationScalarFieldEnum)[keyof typeof ParkingLocationScalarFieldEnum]


  export const ParkingSlotScalarFieldEnum: {
    id: 'id',
    slotNumber: 'slotNumber',
    locationId: 'locationId',
    type: 'type',
    basePrice: 'basePrice',
    status: 'status',
    features: 'features',
    rules: 'rules',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingSlotScalarFieldEnum = (typeof ParkingSlotScalarFieldEnum)[keyof typeof ParkingSlotScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    slotId: 'slotId',
    startTime: 'startTime',
    endTime: 'endTime',
    actualStartTime: 'actualStartTime',
    actualEndTime: 'actualEndTime',
    totalAmount: 'totalAmount',
    status: 'status',
    qrCode: 'qrCode',
    checkInCode: 'checkInCode',
    extendedTimes: 'extendedTimes',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookingId: 'bookingId',
    amount: 'amount',
    method: 'method',
    status: 'status',
    transactionId: 'transactionId',
    gatewayResponse: 'gatewayResponse',
    paidAt: 'paidAt',
    refundedAt: 'refundedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    priority: 'priority',
    isRead: 'isRead',
    readAt: 'readAt',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    locationId: 'locationId',
    reporterId: 'reporterId',
    type: 'type',
    severity: 'severity',
    title: 'title',
    description: 'description',
    status: 'status',
    resolution: 'resolution',
    resolvedBy: 'resolvedBy',
    resolvedAt: 'resolvedAt',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const ParkingAnalyticsScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    date: 'date',
    totalSlots: 'totalSlots',
    occupiedSlots: 'occupiedSlots',
    totalBookings: 'totalBookings',
    totalRevenue: 'totalRevenue',
    averageStayTime: 'averageStayTime',
    peakHours: 'peakHours',
    createdAt: 'createdAt'
  };

  export type ParkingAnalyticsScalarFieldEnum = (typeof ParkingAnalyticsScalarFieldEnum)[keyof typeof ParkingAnalyticsScalarFieldEnum]


  export const SystemSettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    isActive: 'isActive',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type SystemSettingsScalarFieldEnum = (typeof SystemSettingsScalarFieldEnum)[keyof typeof SystemSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    bookings?: BookingListRelationFilter
    notifications?: NotificationListRelationFilter
    payments?: PaymentListRelationFilter
    userRoles?: UserRoleListRelationFilter
    incidents?: IncidentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    userRoles?: UserRoleOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    bookings?: BookingListRelationFilter
    notifications?: NotificationListRelationFilter
    payments?: PaymentListRelationFilter
    userRoles?: UserRoleListRelationFilter
    incidents?: IncidentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: StringFilter<"UserRole"> | string
    userId?: StringFilter<"UserRole"> | string
    role?: StringFilter<"UserRole"> | string
    locationId?: StringNullableFilter<"UserRole"> | string | null
    isActive?: BoolFilter<"UserRole"> | boolean
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<ParkingLocationNullableScalarRelationFilter, ParkingLocationWhereInput> | null
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    locationId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    location?: ParkingLocationOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_role_locationId?: UserRoleUserIdRoleLocationIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    role?: StringFilter<"UserRole"> | string
    locationId?: StringNullableFilter<"UserRole"> | string | null
    isActive?: BoolFilter<"UserRole"> | boolean
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<ParkingLocationNullableScalarRelationFilter, ParkingLocationWhereInput> | null
  }, "id" | "userId_role_locationId">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    locationId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRole"> | string
    userId?: StringWithAggregatesFilter<"UserRole"> | string
    role?: StringWithAggregatesFilter<"UserRole"> | string
    locationId?: StringNullableWithAggregatesFilter<"UserRole"> | string | null
    isActive?: BoolWithAggregatesFilter<"UserRole"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
  }

  export type ParkingLocationWhereInput = {
    AND?: ParkingLocationWhereInput | ParkingLocationWhereInput[]
    OR?: ParkingLocationWhereInput[]
    NOT?: ParkingLocationWhereInput | ParkingLocationWhereInput[]
    id?: StringFilter<"ParkingLocation"> | string
    name?: StringFilter<"ParkingLocation"> | string
    address?: StringFilter<"ParkingLocation"> | string
    latitude?: FloatNullableFilter<"ParkingLocation"> | number | null
    longitude?: FloatNullableFilter<"ParkingLocation"> | number | null
    description?: StringNullableFilter<"ParkingLocation"> | string | null
    features?: StringNullableFilter<"ParkingLocation"> | string | null
    operatingHours?: StringNullableFilter<"ParkingLocation"> | string | null
    isActive?: BoolFilter<"ParkingLocation"> | boolean
    createdAt?: DateTimeFilter<"ParkingLocation"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLocation"> | Date | string
    slots?: ParkingSlotListRelationFilter
    userRoles?: UserRoleListRelationFilter
    incidents?: IncidentListRelationFilter
    analytics?: ParkingAnalyticsListRelationFilter
  }

  export type ParkingLocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    operatingHours?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slots?: ParkingSlotOrderByRelationAggregateInput
    userRoles?: UserRoleOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
    analytics?: ParkingAnalyticsOrderByRelationAggregateInput
  }

  export type ParkingLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkingLocationWhereInput | ParkingLocationWhereInput[]
    OR?: ParkingLocationWhereInput[]
    NOT?: ParkingLocationWhereInput | ParkingLocationWhereInput[]
    name?: StringFilter<"ParkingLocation"> | string
    address?: StringFilter<"ParkingLocation"> | string
    latitude?: FloatNullableFilter<"ParkingLocation"> | number | null
    longitude?: FloatNullableFilter<"ParkingLocation"> | number | null
    description?: StringNullableFilter<"ParkingLocation"> | string | null
    features?: StringNullableFilter<"ParkingLocation"> | string | null
    operatingHours?: StringNullableFilter<"ParkingLocation"> | string | null
    isActive?: BoolFilter<"ParkingLocation"> | boolean
    createdAt?: DateTimeFilter<"ParkingLocation"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLocation"> | Date | string
    slots?: ParkingSlotListRelationFilter
    userRoles?: UserRoleListRelationFilter
    incidents?: IncidentListRelationFilter
    analytics?: ParkingAnalyticsListRelationFilter
  }, "id">

  export type ParkingLocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    operatingHours?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingLocationCountOrderByAggregateInput
    _avg?: ParkingLocationAvgOrderByAggregateInput
    _max?: ParkingLocationMaxOrderByAggregateInput
    _min?: ParkingLocationMinOrderByAggregateInput
    _sum?: ParkingLocationSumOrderByAggregateInput
  }

  export type ParkingLocationScalarWhereWithAggregatesInput = {
    AND?: ParkingLocationScalarWhereWithAggregatesInput | ParkingLocationScalarWhereWithAggregatesInput[]
    OR?: ParkingLocationScalarWhereWithAggregatesInput[]
    NOT?: ParkingLocationScalarWhereWithAggregatesInput | ParkingLocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingLocation"> | string
    name?: StringWithAggregatesFilter<"ParkingLocation"> | string
    address?: StringWithAggregatesFilter<"ParkingLocation"> | string
    latitude?: FloatNullableWithAggregatesFilter<"ParkingLocation"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"ParkingLocation"> | number | null
    description?: StringNullableWithAggregatesFilter<"ParkingLocation"> | string | null
    features?: StringNullableWithAggregatesFilter<"ParkingLocation"> | string | null
    operatingHours?: StringNullableWithAggregatesFilter<"ParkingLocation"> | string | null
    isActive?: BoolWithAggregatesFilter<"ParkingLocation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ParkingLocation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingLocation"> | Date | string
  }

  export type ParkingSlotWhereInput = {
    AND?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    OR?: ParkingSlotWhereInput[]
    NOT?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    id?: StringFilter<"ParkingSlot"> | string
    slotNumber?: StringFilter<"ParkingSlot"> | string
    locationId?: StringFilter<"ParkingSlot"> | string
    type?: StringFilter<"ParkingSlot"> | string
    basePrice?: FloatFilter<"ParkingSlot"> | number
    status?: StringFilter<"ParkingSlot"> | string
    features?: StringNullableFilter<"ParkingSlot"> | string | null
    rules?: StringNullableFilter<"ParkingSlot"> | string | null
    createdAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    location?: XOR<ParkingLocationScalarRelationFilter, ParkingLocationWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type ParkingSlotOrderByWithRelationInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    locationId?: SortOrder
    type?: SortOrder
    basePrice?: SortOrder
    status?: SortOrder
    features?: SortOrderInput | SortOrder
    rules?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: ParkingLocationOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ParkingSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    locationId_slotNumber?: ParkingSlotLocationIdSlotNumberCompoundUniqueInput
    AND?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    OR?: ParkingSlotWhereInput[]
    NOT?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    slotNumber?: StringFilter<"ParkingSlot"> | string
    locationId?: StringFilter<"ParkingSlot"> | string
    type?: StringFilter<"ParkingSlot"> | string
    basePrice?: FloatFilter<"ParkingSlot"> | number
    status?: StringFilter<"ParkingSlot"> | string
    features?: StringNullableFilter<"ParkingSlot"> | string | null
    rules?: StringNullableFilter<"ParkingSlot"> | string | null
    createdAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    location?: XOR<ParkingLocationScalarRelationFilter, ParkingLocationWhereInput>
    bookings?: BookingListRelationFilter
  }, "id" | "locationId_slotNumber">

  export type ParkingSlotOrderByWithAggregationInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    locationId?: SortOrder
    type?: SortOrder
    basePrice?: SortOrder
    status?: SortOrder
    features?: SortOrderInput | SortOrder
    rules?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingSlotCountOrderByAggregateInput
    _avg?: ParkingSlotAvgOrderByAggregateInput
    _max?: ParkingSlotMaxOrderByAggregateInput
    _min?: ParkingSlotMinOrderByAggregateInput
    _sum?: ParkingSlotSumOrderByAggregateInput
  }

  export type ParkingSlotScalarWhereWithAggregatesInput = {
    AND?: ParkingSlotScalarWhereWithAggregatesInput | ParkingSlotScalarWhereWithAggregatesInput[]
    OR?: ParkingSlotScalarWhereWithAggregatesInput[]
    NOT?: ParkingSlotScalarWhereWithAggregatesInput | ParkingSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingSlot"> | string
    slotNumber?: StringWithAggregatesFilter<"ParkingSlot"> | string
    locationId?: StringWithAggregatesFilter<"ParkingSlot"> | string
    type?: StringWithAggregatesFilter<"ParkingSlot"> | string
    basePrice?: FloatWithAggregatesFilter<"ParkingSlot"> | number
    status?: StringWithAggregatesFilter<"ParkingSlot"> | string
    features?: StringNullableWithAggregatesFilter<"ParkingSlot"> | string | null
    rules?: StringNullableWithAggregatesFilter<"ParkingSlot"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingSlot"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    slotId?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    actualStartTime?: DateTimeNullableFilter<"Booking"> | Date | string | null
    actualEndTime?: DateTimeNullableFilter<"Booking"> | Date | string | null
    totalAmount?: FloatFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    qrCode?: StringNullableFilter<"Booking"> | string | null
    checkInCode?: StringNullableFilter<"Booking"> | string | null
    extendedTimes?: IntFilter<"Booking"> | number
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    slot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    incidents?: IncidentListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    slotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    actualStartTime?: SortOrderInput | SortOrder
    actualEndTime?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    checkInCode?: SortOrderInput | SortOrder
    extendedTimes?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    slot?: ParkingSlotOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    incidents?: IncidentOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qrCode?: string
    checkInCode?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    slotId?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    actualStartTime?: DateTimeNullableFilter<"Booking"> | Date | string | null
    actualEndTime?: DateTimeNullableFilter<"Booking"> | Date | string | null
    totalAmount?: FloatFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    extendedTimes?: IntFilter<"Booking"> | number
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    slot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    incidents?: IncidentListRelationFilter
  }, "id" | "qrCode" | "checkInCode">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    slotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    actualStartTime?: SortOrderInput | SortOrder
    actualEndTime?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    checkInCode?: SortOrderInput | SortOrder
    extendedTimes?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    slotId?: StringWithAggregatesFilter<"Booking"> | string
    startTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    actualStartTime?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    actualEndTime?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    totalAmount?: FloatWithAggregatesFilter<"Booking"> | number
    status?: StringWithAggregatesFilter<"Booking"> | string
    qrCode?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    checkInCode?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    extendedTimes?: IntWithAggregatesFilter<"Booking"> | number
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    bookingId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    gatewayResponse?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    transactionId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    gatewayResponse?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "bookingId" | "transactionId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    bookingId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    method?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayResponse?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    priority?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    data?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    priority?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    data?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    priority?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    data?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: StringFilter<"Incident"> | string
    bookingId?: StringNullableFilter<"Incident"> | string | null
    locationId?: StringFilter<"Incident"> | string
    reporterId?: StringFilter<"Incident"> | string
    type?: StringFilter<"Incident"> | string
    severity?: StringFilter<"Incident"> | string
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    status?: StringFilter<"Incident"> | string
    resolution?: StringNullableFilter<"Incident"> | string | null
    resolvedBy?: StringNullableFilter<"Incident"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    images?: StringNullableFilter<"Incident"> | string | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    location?: XOR<ParkingLocationScalarRelationFilter, ParkingLocationWhereInput>
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    locationId?: SortOrder
    reporterId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolution?: SortOrderInput | SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
    location?: ParkingLocationOrderByWithRelationInput
    reporter?: UserOrderByWithRelationInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    bookingId?: StringNullableFilter<"Incident"> | string | null
    locationId?: StringFilter<"Incident"> | string
    reporterId?: StringFilter<"Incident"> | string
    type?: StringFilter<"Incident"> | string
    severity?: StringFilter<"Incident"> | string
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    status?: StringFilter<"Incident"> | string
    resolution?: StringNullableFilter<"Incident"> | string | null
    resolvedBy?: StringNullableFilter<"Incident"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    images?: StringNullableFilter<"Incident"> | string | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    location?: XOR<ParkingLocationScalarRelationFilter, ParkingLocationWhereInput>
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    locationId?: SortOrder
    reporterId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolution?: SortOrderInput | SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incident"> | string
    bookingId?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    locationId?: StringWithAggregatesFilter<"Incident"> | string
    reporterId?: StringWithAggregatesFilter<"Incident"> | string
    type?: StringWithAggregatesFilter<"Incident"> | string
    severity?: StringWithAggregatesFilter<"Incident"> | string
    title?: StringWithAggregatesFilter<"Incident"> | string
    description?: StringWithAggregatesFilter<"Incident"> | string
    status?: StringWithAggregatesFilter<"Incident"> | string
    resolution?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    resolvedBy?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    images?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
  }

  export type ParkingAnalyticsWhereInput = {
    AND?: ParkingAnalyticsWhereInput | ParkingAnalyticsWhereInput[]
    OR?: ParkingAnalyticsWhereInput[]
    NOT?: ParkingAnalyticsWhereInput | ParkingAnalyticsWhereInput[]
    id?: StringFilter<"ParkingAnalytics"> | string
    locationId?: StringFilter<"ParkingAnalytics"> | string
    date?: DateTimeFilter<"ParkingAnalytics"> | Date | string
    totalSlots?: IntFilter<"ParkingAnalytics"> | number
    occupiedSlots?: IntFilter<"ParkingAnalytics"> | number
    totalBookings?: IntFilter<"ParkingAnalytics"> | number
    totalRevenue?: FloatFilter<"ParkingAnalytics"> | number
    averageStayTime?: FloatNullableFilter<"ParkingAnalytics"> | number | null
    peakHours?: StringNullableFilter<"ParkingAnalytics"> | string | null
    createdAt?: DateTimeFilter<"ParkingAnalytics"> | Date | string
    location?: XOR<ParkingLocationScalarRelationFilter, ParkingLocationWhereInput>
  }

  export type ParkingAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    totalSlots?: SortOrder
    occupiedSlots?: SortOrder
    totalBookings?: SortOrder
    totalRevenue?: SortOrder
    averageStayTime?: SortOrderInput | SortOrder
    peakHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    location?: ParkingLocationOrderByWithRelationInput
  }

  export type ParkingAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    locationId_date?: ParkingAnalyticsLocationIdDateCompoundUniqueInput
    AND?: ParkingAnalyticsWhereInput | ParkingAnalyticsWhereInput[]
    OR?: ParkingAnalyticsWhereInput[]
    NOT?: ParkingAnalyticsWhereInput | ParkingAnalyticsWhereInput[]
    locationId?: StringFilter<"ParkingAnalytics"> | string
    date?: DateTimeFilter<"ParkingAnalytics"> | Date | string
    totalSlots?: IntFilter<"ParkingAnalytics"> | number
    occupiedSlots?: IntFilter<"ParkingAnalytics"> | number
    totalBookings?: IntFilter<"ParkingAnalytics"> | number
    totalRevenue?: FloatFilter<"ParkingAnalytics"> | number
    averageStayTime?: FloatNullableFilter<"ParkingAnalytics"> | number | null
    peakHours?: StringNullableFilter<"ParkingAnalytics"> | string | null
    createdAt?: DateTimeFilter<"ParkingAnalytics"> | Date | string
    location?: XOR<ParkingLocationScalarRelationFilter, ParkingLocationWhereInput>
  }, "id" | "locationId_date">

  export type ParkingAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    totalSlots?: SortOrder
    occupiedSlots?: SortOrder
    totalBookings?: SortOrder
    totalRevenue?: SortOrder
    averageStayTime?: SortOrderInput | SortOrder
    peakHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ParkingAnalyticsCountOrderByAggregateInput
    _avg?: ParkingAnalyticsAvgOrderByAggregateInput
    _max?: ParkingAnalyticsMaxOrderByAggregateInput
    _min?: ParkingAnalyticsMinOrderByAggregateInput
    _sum?: ParkingAnalyticsSumOrderByAggregateInput
  }

  export type ParkingAnalyticsScalarWhereWithAggregatesInput = {
    AND?: ParkingAnalyticsScalarWhereWithAggregatesInput | ParkingAnalyticsScalarWhereWithAggregatesInput[]
    OR?: ParkingAnalyticsScalarWhereWithAggregatesInput[]
    NOT?: ParkingAnalyticsScalarWhereWithAggregatesInput | ParkingAnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingAnalytics"> | string
    locationId?: StringWithAggregatesFilter<"ParkingAnalytics"> | string
    date?: DateTimeWithAggregatesFilter<"ParkingAnalytics"> | Date | string
    totalSlots?: IntWithAggregatesFilter<"ParkingAnalytics"> | number
    occupiedSlots?: IntWithAggregatesFilter<"ParkingAnalytics"> | number
    totalBookings?: IntWithAggregatesFilter<"ParkingAnalytics"> | number
    totalRevenue?: FloatWithAggregatesFilter<"ParkingAnalytics"> | number
    averageStayTime?: FloatNullableWithAggregatesFilter<"ParkingAnalytics"> | number | null
    peakHours?: StringNullableWithAggregatesFilter<"ParkingAnalytics"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ParkingAnalytics"> | Date | string
  }

  export type SystemSettingsWhereInput = {
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    id?: StringFilter<"SystemSettings"> | string
    key?: StringFilter<"SystemSettings"> | string
    value?: StringFilter<"SystemSettings"> | string
    description?: StringNullableFilter<"SystemSettings"> | string | null
    isActive?: BoolFilter<"SystemSettings"> | boolean
    updatedBy?: StringNullableFilter<"SystemSettings"> | string | null
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
    createdAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }

  export type SystemSettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    value?: StringFilter<"SystemSettings"> | string
    description?: StringNullableFilter<"SystemSettings"> | string | null
    isActive?: BoolFilter<"SystemSettings"> | boolean
    updatedBy?: StringNullableFilter<"SystemSettings"> | string | null
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
    createdAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }, "id" | "key">

  export type SystemSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: SystemSettingsCountOrderByAggregateInput
    _max?: SystemSettingsMaxOrderByAggregateInput
    _min?: SystemSettingsMinOrderByAggregateInput
  }

  export type SystemSettingsScalarWhereWithAggregatesInput = {
    AND?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    OR?: SystemSettingsScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSettings"> | string
    key?: StringWithAggregatesFilter<"SystemSettings"> | string
    value?: StringWithAggregatesFilter<"SystemSettings"> | string
    description?: StringNullableWithAggregatesFilter<"SystemSettings"> | string | null
    isActive?: BoolWithAggregatesFilter<"SystemSettings"> | boolean
    updatedBy?: StringNullableWithAggregatesFilter<"SystemSettings"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutReporterInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutReporterInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutReporterNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    id?: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserRolesInput
    location?: ParkingLocationCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: string
    userId: string
    role: string
    locationId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
    location?: ParkingLocationUpdateOneWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyInput = {
    id?: string
    userId: string
    role: string
    locationId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLocationCreateInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    description?: string | null
    features?: string | null
    operatingHours?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotCreateNestedManyWithoutLocationInput
    userRoles?: UserRoleCreateNestedManyWithoutLocationInput
    incidents?: IncidentCreateNestedManyWithoutLocationInput
    analytics?: ParkingAnalyticsCreateNestedManyWithoutLocationInput
  }

  export type ParkingLocationUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    description?: string | null
    features?: string | null
    operatingHours?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotUncheckedCreateNestedManyWithoutLocationInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutLocationInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutLocationInput
    analytics?: ParkingAnalyticsUncheckedCreateNestedManyWithoutLocationInput
  }

  export type ParkingLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUpdateManyWithoutLocationNestedInput
    userRoles?: UserRoleUpdateManyWithoutLocationNestedInput
    incidents?: IncidentUpdateManyWithoutLocationNestedInput
    analytics?: ParkingAnalyticsUpdateManyWithoutLocationNestedInput
  }

  export type ParkingLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUncheckedUpdateManyWithoutLocationNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutLocationNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutLocationNestedInput
    analytics?: ParkingAnalyticsUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type ParkingLocationCreateManyInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    description?: string | null
    features?: string | null
    operatingHours?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotCreateInput = {
    id?: string
    slotNumber: string
    type?: string
    basePrice: number
    status?: string
    features?: string | null
    rules?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location: ParkingLocationCreateNestedOneWithoutSlotsInput
    bookings?: BookingCreateNestedManyWithoutSlotInput
  }

  export type ParkingSlotUncheckedCreateInput = {
    id?: string
    slotNumber: string
    locationId: string
    type?: string
    basePrice: number
    status?: string
    features?: string | null
    rules?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutSlotInput
  }

  export type ParkingSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    features?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: ParkingLocationUpdateOneRequiredWithoutSlotsNestedInput
    bookings?: BookingUpdateManyWithoutSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    features?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type ParkingSlotCreateManyInput = {
    id?: string
    slotNumber: string
    locationId: string
    type?: string
    basePrice: number
    status?: string
    features?: string | null
    rules?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    features?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    features?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    slot: ParkingSlotCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    incidents?: IncidentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    slotId: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    slot?: ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    incidents?: IncidentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    slotId: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    method: string
    status?: string
    transactionId?: string | null
    gatewayResponse?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    booking: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    bookingId: string
    amount: number
    method: string
    status?: string
    transactionId?: string | null
    gatewayResponse?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    booking?: BookingUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    bookingId: string
    amount: number
    method: string
    status?: string
    transactionId?: string | null
    gatewayResponse?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type: string
    priority?: string
    isRead?: boolean
    readAt?: Date | string | null
    data?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: string
    priority?: string
    isRead?: boolean
    readAt?: Date | string | null
    data?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: string
    priority?: string
    isRead?: boolean
    readAt?: Date | string | null
    data?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateInput = {
    id?: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingCreateNestedOneWithoutIncidentsInput
    location: ParkingLocationCreateNestedOneWithoutIncidentsInput
    reporter: UserCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: string
    bookingId?: string | null
    locationId: string
    reporterId: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutIncidentsNestedInput
    location?: ParkingLocationUpdateOneRequiredWithoutIncidentsNestedInput
    reporter?: UserUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateManyInput = {
    id?: string
    bookingId?: string | null
    locationId: string
    reporterId: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingAnalyticsCreateInput = {
    id?: string
    date: Date | string
    totalSlots: number
    occupiedSlots: number
    totalBookings: number
    totalRevenue: number
    averageStayTime?: number | null
    peakHours?: string | null
    createdAt?: Date | string
    location: ParkingLocationCreateNestedOneWithoutAnalyticsInput
  }

  export type ParkingAnalyticsUncheckedCreateInput = {
    id?: string
    locationId: string
    date: Date | string
    totalSlots: number
    occupiedSlots: number
    totalBookings: number
    totalRevenue: number
    averageStayTime?: number | null
    peakHours?: string | null
    createdAt?: Date | string
  }

  export type ParkingAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    occupiedSlots?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    averageStayTime?: NullableFloatFieldUpdateOperationsInput | number | null
    peakHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: ParkingLocationUpdateOneRequiredWithoutAnalyticsNestedInput
  }

  export type ParkingAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    occupiedSlots?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    averageStayTime?: NullableFloatFieldUpdateOperationsInput | number | null
    peakHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingAnalyticsCreateManyInput = {
    id?: string
    locationId: string
    date: Date | string
    totalSlots: number
    occupiedSlots: number
    totalBookings: number
    totalRevenue: number
    averageStayTime?: number | null
    peakHours?: string | null
    createdAt?: Date | string
  }

  export type ParkingAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    occupiedSlots?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    averageStayTime?: NullableFloatFieldUpdateOperationsInput | number | null
    peakHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    occupiedSlots?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    averageStayTime?: NullableFloatFieldUpdateOperationsInput | number | null
    peakHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    isActive?: boolean
    updatedBy?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type SystemSettingsUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    isActive?: boolean
    updatedBy?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type SystemSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateManyInput = {
    id?: string
    key: string
    value: string
    description?: string | null
    isActive?: boolean
    updatedBy?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type SystemSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ParkingLocationNullableScalarRelationFilter = {
    is?: ParkingLocationWhereInput | null
    isNot?: ParkingLocationWhereInput | null
  }

  export type UserRoleUserIdRoleLocationIdCompoundUniqueInput = {
    userId: string
    role: string
    locationId: string
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    locationId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    locationId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    locationId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ParkingSlotListRelationFilter = {
    every?: ParkingSlotWhereInput
    some?: ParkingSlotWhereInput
    none?: ParkingSlotWhereInput
  }

  export type ParkingAnalyticsListRelationFilter = {
    every?: ParkingAnalyticsWhereInput
    some?: ParkingAnalyticsWhereInput
    none?: ParkingAnalyticsWhereInput
  }

  export type ParkingSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingAnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingLocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    features?: SortOrder
    operatingHours?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingLocationAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ParkingLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    features?: SortOrder
    operatingHours?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingLocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    features?: SortOrder
    operatingHours?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingLocationSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ParkingLocationScalarRelationFilter = {
    is?: ParkingLocationWhereInput
    isNot?: ParkingLocationWhereInput
  }

  export type ParkingSlotLocationIdSlotNumberCompoundUniqueInput = {
    locationId: string
    slotNumber: string
  }

  export type ParkingSlotCountOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    locationId?: SortOrder
    type?: SortOrder
    basePrice?: SortOrder
    status?: SortOrder
    features?: SortOrder
    rules?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSlotAvgOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type ParkingSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    locationId?: SortOrder
    type?: SortOrder
    basePrice?: SortOrder
    status?: SortOrder
    features?: SortOrder
    rules?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSlotMinOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    locationId?: SortOrder
    type?: SortOrder
    basePrice?: SortOrder
    status?: SortOrder
    features?: SortOrder
    rules?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSlotSumOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ParkingSlotScalarRelationFilter = {
    is?: ParkingSlotWhereInput
    isNot?: ParkingSlotWhereInput
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    slotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    actualStartTime?: SortOrder
    actualEndTime?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    checkInCode?: SortOrder
    extendedTimes?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    extendedTimes?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    slotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    actualStartTime?: SortOrder
    actualEndTime?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    checkInCode?: SortOrder
    extendedTimes?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    slotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    actualStartTime?: SortOrder
    actualEndTime?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    checkInCode?: SortOrder
    extendedTimes?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    extendedTimes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    gatewayResponse?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    gatewayResponse?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    gatewayResponse?: SortOrder
    paidAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    locationId?: SortOrder
    reporterId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    resolvedBy?: SortOrder
    resolvedAt?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    locationId?: SortOrder
    reporterId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    resolvedBy?: SortOrder
    resolvedAt?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    locationId?: SortOrder
    reporterId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    resolvedBy?: SortOrder
    resolvedAt?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingAnalyticsLocationIdDateCompoundUniqueInput = {
    locationId: string
    date: Date | string
  }

  export type ParkingAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    totalSlots?: SortOrder
    occupiedSlots?: SortOrder
    totalBookings?: SortOrder
    totalRevenue?: SortOrder
    averageStayTime?: SortOrder
    peakHours?: SortOrder
    createdAt?: SortOrder
  }

  export type ParkingAnalyticsAvgOrderByAggregateInput = {
    totalSlots?: SortOrder
    occupiedSlots?: SortOrder
    totalBookings?: SortOrder
    totalRevenue?: SortOrder
    averageStayTime?: SortOrder
  }

  export type ParkingAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    totalSlots?: SortOrder
    occupiedSlots?: SortOrder
    totalBookings?: SortOrder
    totalRevenue?: SortOrder
    averageStayTime?: SortOrder
    peakHours?: SortOrder
    createdAt?: SortOrder
  }

  export type ParkingAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    date?: SortOrder
    totalSlots?: SortOrder
    occupiedSlots?: SortOrder
    totalBookings?: SortOrder
    totalRevenue?: SortOrder
    averageStayTime?: SortOrder
    peakHours?: SortOrder
    createdAt?: SortOrder
  }

  export type ParkingAnalyticsSumOrderByAggregateInput = {
    totalSlots?: SortOrder
    occupiedSlots?: SortOrder
    totalBookings?: SortOrder
    totalRevenue?: SortOrder
    averageStayTime?: SortOrder
  }

  export type SystemSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutReporterInput = {
    create?: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput> | IncidentCreateWithoutReporterInput[] | IncidentUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReporterInput | IncidentCreateOrConnectWithoutReporterInput[]
    createMany?: IncidentCreateManyReporterInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutReporterInput = {
    create?: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput> | IncidentCreateWithoutReporterInput[] | IncidentUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReporterInput | IncidentCreateOrConnectWithoutReporterInput[]
    createMany?: IncidentCreateManyReporterInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutReporterNestedInput = {
    create?: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput> | IncidentCreateWithoutReporterInput[] | IncidentUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReporterInput | IncidentCreateOrConnectWithoutReporterInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutReporterInput | IncidentUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: IncidentCreateManyReporterInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutReporterInput | IncidentUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutReporterInput | IncidentUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutReporterNestedInput = {
    create?: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput> | IncidentCreateWithoutReporterInput[] | IncidentUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReporterInput | IncidentCreateOrConnectWithoutReporterInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutReporterInput | IncidentUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: IncidentCreateManyReporterInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutReporterInput | IncidentUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutReporterInput | IncidentUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingLocationCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<ParkingLocationCreateWithoutUserRolesInput, ParkingLocationUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: ParkingLocationCreateOrConnectWithoutUserRolesInput
    connect?: ParkingLocationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    upsert?: UserUpsertWithoutUserRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRolesInput, UserUpdateWithoutUserRolesInput>, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type ParkingLocationUpdateOneWithoutUserRolesNestedInput = {
    create?: XOR<ParkingLocationCreateWithoutUserRolesInput, ParkingLocationUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: ParkingLocationCreateOrConnectWithoutUserRolesInput
    upsert?: ParkingLocationUpsertWithoutUserRolesInput
    disconnect?: ParkingLocationWhereInput | boolean
    delete?: ParkingLocationWhereInput | boolean
    connect?: ParkingLocationWhereUniqueInput
    update?: XOR<XOR<ParkingLocationUpdateToOneWithWhereWithoutUserRolesInput, ParkingLocationUpdateWithoutUserRolesInput>, ParkingLocationUncheckedUpdateWithoutUserRolesInput>
  }

  export type ParkingSlotCreateNestedManyWithoutLocationInput = {
    create?: XOR<ParkingSlotCreateWithoutLocationInput, ParkingSlotUncheckedCreateWithoutLocationInput> | ParkingSlotCreateWithoutLocationInput[] | ParkingSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutLocationInput | ParkingSlotCreateOrConnectWithoutLocationInput[]
    createMany?: ParkingSlotCreateManyLocationInputEnvelope
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
  }

  export type UserRoleCreateNestedManyWithoutLocationInput = {
    create?: XOR<UserRoleCreateWithoutLocationInput, UserRoleUncheckedCreateWithoutLocationInput> | UserRoleCreateWithoutLocationInput[] | UserRoleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutLocationInput | UserRoleCreateOrConnectWithoutLocationInput[]
    createMany?: UserRoleCreateManyLocationInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutLocationInput = {
    create?: XOR<IncidentCreateWithoutLocationInput, IncidentUncheckedCreateWithoutLocationInput> | IncidentCreateWithoutLocationInput[] | IncidentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutLocationInput | IncidentCreateOrConnectWithoutLocationInput[]
    createMany?: IncidentCreateManyLocationInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ParkingAnalyticsCreateNestedManyWithoutLocationInput = {
    create?: XOR<ParkingAnalyticsCreateWithoutLocationInput, ParkingAnalyticsUncheckedCreateWithoutLocationInput> | ParkingAnalyticsCreateWithoutLocationInput[] | ParkingAnalyticsUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ParkingAnalyticsCreateOrConnectWithoutLocationInput | ParkingAnalyticsCreateOrConnectWithoutLocationInput[]
    createMany?: ParkingAnalyticsCreateManyLocationInputEnvelope
    connect?: ParkingAnalyticsWhereUniqueInput | ParkingAnalyticsWhereUniqueInput[]
  }

  export type ParkingSlotUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<ParkingSlotCreateWithoutLocationInput, ParkingSlotUncheckedCreateWithoutLocationInput> | ParkingSlotCreateWithoutLocationInput[] | ParkingSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutLocationInput | ParkingSlotCreateOrConnectWithoutLocationInput[]
    createMany?: ParkingSlotCreateManyLocationInputEnvelope
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<UserRoleCreateWithoutLocationInput, UserRoleUncheckedCreateWithoutLocationInput> | UserRoleCreateWithoutLocationInput[] | UserRoleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutLocationInput | UserRoleCreateOrConnectWithoutLocationInput[]
    createMany?: UserRoleCreateManyLocationInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<IncidentCreateWithoutLocationInput, IncidentUncheckedCreateWithoutLocationInput> | IncidentCreateWithoutLocationInput[] | IncidentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutLocationInput | IncidentCreateOrConnectWithoutLocationInput[]
    createMany?: IncidentCreateManyLocationInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ParkingAnalyticsUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<ParkingAnalyticsCreateWithoutLocationInput, ParkingAnalyticsUncheckedCreateWithoutLocationInput> | ParkingAnalyticsCreateWithoutLocationInput[] | ParkingAnalyticsUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ParkingAnalyticsCreateOrConnectWithoutLocationInput | ParkingAnalyticsCreateOrConnectWithoutLocationInput[]
    createMany?: ParkingAnalyticsCreateManyLocationInputEnvelope
    connect?: ParkingAnalyticsWhereUniqueInput | ParkingAnalyticsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParkingSlotUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutLocationInput, ParkingSlotUncheckedCreateWithoutLocationInput> | ParkingSlotCreateWithoutLocationInput[] | ParkingSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutLocationInput | ParkingSlotCreateOrConnectWithoutLocationInput[]
    upsert?: ParkingSlotUpsertWithWhereUniqueWithoutLocationInput | ParkingSlotUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ParkingSlotCreateManyLocationInputEnvelope
    set?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    disconnect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    delete?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    update?: ParkingSlotUpdateWithWhereUniqueWithoutLocationInput | ParkingSlotUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ParkingSlotUpdateManyWithWhereWithoutLocationInput | ParkingSlotUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
  }

  export type UserRoleUpdateManyWithoutLocationNestedInput = {
    create?: XOR<UserRoleCreateWithoutLocationInput, UserRoleUncheckedCreateWithoutLocationInput> | UserRoleCreateWithoutLocationInput[] | UserRoleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutLocationInput | UserRoleCreateOrConnectWithoutLocationInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutLocationInput | UserRoleUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: UserRoleCreateManyLocationInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutLocationInput | UserRoleUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutLocationInput | UserRoleUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutLocationNestedInput = {
    create?: XOR<IncidentCreateWithoutLocationInput, IncidentUncheckedCreateWithoutLocationInput> | IncidentCreateWithoutLocationInput[] | IncidentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutLocationInput | IncidentCreateOrConnectWithoutLocationInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutLocationInput | IncidentUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: IncidentCreateManyLocationInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutLocationInput | IncidentUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutLocationInput | IncidentUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type ParkingAnalyticsUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ParkingAnalyticsCreateWithoutLocationInput, ParkingAnalyticsUncheckedCreateWithoutLocationInput> | ParkingAnalyticsCreateWithoutLocationInput[] | ParkingAnalyticsUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ParkingAnalyticsCreateOrConnectWithoutLocationInput | ParkingAnalyticsCreateOrConnectWithoutLocationInput[]
    upsert?: ParkingAnalyticsUpsertWithWhereUniqueWithoutLocationInput | ParkingAnalyticsUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ParkingAnalyticsCreateManyLocationInputEnvelope
    set?: ParkingAnalyticsWhereUniqueInput | ParkingAnalyticsWhereUniqueInput[]
    disconnect?: ParkingAnalyticsWhereUniqueInput | ParkingAnalyticsWhereUniqueInput[]
    delete?: ParkingAnalyticsWhereUniqueInput | ParkingAnalyticsWhereUniqueInput[]
    connect?: ParkingAnalyticsWhereUniqueInput | ParkingAnalyticsWhereUniqueInput[]
    update?: ParkingAnalyticsUpdateWithWhereUniqueWithoutLocationInput | ParkingAnalyticsUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ParkingAnalyticsUpdateManyWithWhereWithoutLocationInput | ParkingAnalyticsUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ParkingAnalyticsScalarWhereInput | ParkingAnalyticsScalarWhereInput[]
  }

  export type ParkingSlotUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutLocationInput, ParkingSlotUncheckedCreateWithoutLocationInput> | ParkingSlotCreateWithoutLocationInput[] | ParkingSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutLocationInput | ParkingSlotCreateOrConnectWithoutLocationInput[]
    upsert?: ParkingSlotUpsertWithWhereUniqueWithoutLocationInput | ParkingSlotUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ParkingSlotCreateManyLocationInputEnvelope
    set?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    disconnect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    delete?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    update?: ParkingSlotUpdateWithWhereUniqueWithoutLocationInput | ParkingSlotUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ParkingSlotUpdateManyWithWhereWithoutLocationInput | ParkingSlotUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<UserRoleCreateWithoutLocationInput, UserRoleUncheckedCreateWithoutLocationInput> | UserRoleCreateWithoutLocationInput[] | UserRoleUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutLocationInput | UserRoleCreateOrConnectWithoutLocationInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutLocationInput | UserRoleUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: UserRoleCreateManyLocationInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutLocationInput | UserRoleUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutLocationInput | UserRoleUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<IncidentCreateWithoutLocationInput, IncidentUncheckedCreateWithoutLocationInput> | IncidentCreateWithoutLocationInput[] | IncidentUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutLocationInput | IncidentCreateOrConnectWithoutLocationInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutLocationInput | IncidentUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: IncidentCreateManyLocationInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutLocationInput | IncidentUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutLocationInput | IncidentUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type ParkingAnalyticsUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ParkingAnalyticsCreateWithoutLocationInput, ParkingAnalyticsUncheckedCreateWithoutLocationInput> | ParkingAnalyticsCreateWithoutLocationInput[] | ParkingAnalyticsUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ParkingAnalyticsCreateOrConnectWithoutLocationInput | ParkingAnalyticsCreateOrConnectWithoutLocationInput[]
    upsert?: ParkingAnalyticsUpsertWithWhereUniqueWithoutLocationInput | ParkingAnalyticsUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ParkingAnalyticsCreateManyLocationInputEnvelope
    set?: ParkingAnalyticsWhereUniqueInput | ParkingAnalyticsWhereUniqueInput[]
    disconnect?: ParkingAnalyticsWhereUniqueInput | ParkingAnalyticsWhereUniqueInput[]
    delete?: ParkingAnalyticsWhereUniqueInput | ParkingAnalyticsWhereUniqueInput[]
    connect?: ParkingAnalyticsWhereUniqueInput | ParkingAnalyticsWhereUniqueInput[]
    update?: ParkingAnalyticsUpdateWithWhereUniqueWithoutLocationInput | ParkingAnalyticsUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ParkingAnalyticsUpdateManyWithWhereWithoutLocationInput | ParkingAnalyticsUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ParkingAnalyticsScalarWhereInput | ParkingAnalyticsScalarWhereInput[]
  }

  export type ParkingLocationCreateNestedOneWithoutSlotsInput = {
    create?: XOR<ParkingLocationCreateWithoutSlotsInput, ParkingLocationUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: ParkingLocationCreateOrConnectWithoutSlotsInput
    connect?: ParkingLocationWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutSlotInput = {
    create?: XOR<BookingCreateWithoutSlotInput, BookingUncheckedCreateWithoutSlotInput> | BookingCreateWithoutSlotInput[] | BookingUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSlotInput | BookingCreateOrConnectWithoutSlotInput[]
    createMany?: BookingCreateManySlotInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutSlotInput = {
    create?: XOR<BookingCreateWithoutSlotInput, BookingUncheckedCreateWithoutSlotInput> | BookingCreateWithoutSlotInput[] | BookingUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSlotInput | BookingCreateOrConnectWithoutSlotInput[]
    createMany?: BookingCreateManySlotInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParkingLocationUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<ParkingLocationCreateWithoutSlotsInput, ParkingLocationUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: ParkingLocationCreateOrConnectWithoutSlotsInput
    upsert?: ParkingLocationUpsertWithoutSlotsInput
    connect?: ParkingLocationWhereUniqueInput
    update?: XOR<XOR<ParkingLocationUpdateToOneWithWhereWithoutSlotsInput, ParkingLocationUpdateWithoutSlotsInput>, ParkingLocationUncheckedUpdateWithoutSlotsInput>
  }

  export type BookingUpdateManyWithoutSlotNestedInput = {
    create?: XOR<BookingCreateWithoutSlotInput, BookingUncheckedCreateWithoutSlotInput> | BookingCreateWithoutSlotInput[] | BookingUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSlotInput | BookingCreateOrConnectWithoutSlotInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSlotInput | BookingUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: BookingCreateManySlotInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSlotInput | BookingUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSlotInput | BookingUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: XOR<BookingCreateWithoutSlotInput, BookingUncheckedCreateWithoutSlotInput> | BookingCreateWithoutSlotInput[] | BookingUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSlotInput | BookingCreateOrConnectWithoutSlotInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSlotInput | BookingUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: BookingCreateManySlotInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSlotInput | BookingUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSlotInput | BookingUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingSlotCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ParkingSlotCreateWithoutBookingsInput, ParkingSlotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutBookingsInput
    connect?: ParkingSlotWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type IncidentCreateNestedManyWithoutBookingInput = {
    create?: XOR<IncidentCreateWithoutBookingInput, IncidentUncheckedCreateWithoutBookingInput> | IncidentCreateWithoutBookingInput[] | IncidentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutBookingInput | IncidentCreateOrConnectWithoutBookingInput[]
    createMany?: IncidentCreateManyBookingInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type IncidentUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<IncidentCreateWithoutBookingInput, IncidentUncheckedCreateWithoutBookingInput> | IncidentCreateWithoutBookingInput[] | IncidentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutBookingInput | IncidentCreateOrConnectWithoutBookingInput[]
    createMany?: IncidentCreateManyBookingInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutBookingsInput, ParkingSlotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutBookingsInput
    upsert?: ParkingSlotUpsertWithoutBookingsInput
    connect?: ParkingSlotWhereUniqueInput
    update?: XOR<XOR<ParkingSlotUpdateToOneWithWhereWithoutBookingsInput, ParkingSlotUpdateWithoutBookingsInput>, ParkingSlotUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type IncidentUpdateManyWithoutBookingNestedInput = {
    create?: XOR<IncidentCreateWithoutBookingInput, IncidentUncheckedCreateWithoutBookingInput> | IncidentCreateWithoutBookingInput[] | IncidentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutBookingInput | IncidentCreateOrConnectWithoutBookingInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutBookingInput | IncidentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: IncidentCreateManyBookingInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutBookingInput | IncidentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutBookingInput | IncidentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type IncidentUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<IncidentCreateWithoutBookingInput, IncidentUncheckedCreateWithoutBookingInput> | IncidentCreateWithoutBookingInput[] | IncidentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutBookingInput | IncidentCreateOrConnectWithoutBookingInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutBookingInput | IncidentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: IncidentCreateManyBookingInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutBookingInput | IncidentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutBookingInput | IncidentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    connect?: BookingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type BookingUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    upsert?: BookingUpsertWithoutPaymentInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentInput, BookingUpdateWithoutPaymentInput>, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type BookingCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<BookingCreateWithoutIncidentsInput, BookingUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutIncidentsInput
    connect?: BookingWhereUniqueInput
  }

  export type ParkingLocationCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<ParkingLocationCreateWithoutIncidentsInput, ParkingLocationUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: ParkingLocationCreateOrConnectWithoutIncidentsInput
    connect?: ParkingLocationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingUpdateOneWithoutIncidentsNestedInput = {
    create?: XOR<BookingCreateWithoutIncidentsInput, BookingUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutIncidentsInput
    upsert?: BookingUpsertWithoutIncidentsInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutIncidentsInput, BookingUpdateWithoutIncidentsInput>, BookingUncheckedUpdateWithoutIncidentsInput>
  }

  export type ParkingLocationUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<ParkingLocationCreateWithoutIncidentsInput, ParkingLocationUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: ParkingLocationCreateOrConnectWithoutIncidentsInput
    upsert?: ParkingLocationUpsertWithoutIncidentsInput
    connect?: ParkingLocationWhereUniqueInput
    update?: XOR<XOR<ParkingLocationUpdateToOneWithWhereWithoutIncidentsInput, ParkingLocationUpdateWithoutIncidentsInput>, ParkingLocationUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsInput
    upsert?: UserUpsertWithoutIncidentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncidentsInput, UserUpdateWithoutIncidentsInput>, UserUncheckedUpdateWithoutIncidentsInput>
  }

  export type ParkingLocationCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<ParkingLocationCreateWithoutAnalyticsInput, ParkingLocationUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: ParkingLocationCreateOrConnectWithoutAnalyticsInput
    connect?: ParkingLocationWhereUniqueInput
  }

  export type ParkingLocationUpdateOneRequiredWithoutAnalyticsNestedInput = {
    create?: XOR<ParkingLocationCreateWithoutAnalyticsInput, ParkingLocationUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: ParkingLocationCreateOrConnectWithoutAnalyticsInput
    upsert?: ParkingLocationUpsertWithoutAnalyticsInput
    connect?: ParkingLocationWhereUniqueInput
    update?: XOR<XOR<ParkingLocationUpdateToOneWithWhereWithoutAnalyticsInput, ParkingLocationUpdateWithoutAnalyticsInput>, ParkingLocationUncheckedUpdateWithoutAnalyticsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slot: ParkingSlotCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    incidents?: IncidentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    slotId: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: string
    priority?: string
    isRead?: boolean
    readAt?: Date | string | null
    data?: string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: string
    priority?: string
    isRead?: boolean
    readAt?: Date | string | null
    data?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: number
    method: string
    status?: string
    transactionId?: string | null
    gatewayResponse?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    bookingId: string
    amount: number
    method: string
    status?: string
    transactionId?: string | null
    gatewayResponse?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleCreateWithoutUserInput = {
    id?: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: ParkingLocationCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    id?: string
    role: string
    locationId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutReporterInput = {
    id?: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingCreateNestedOneWithoutIncidentsInput
    location: ParkingLocationCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutReporterInput = {
    id?: string
    bookingId?: string | null
    locationId: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateOrConnectWithoutReporterInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput>
  }

  export type IncidentCreateManyReporterInputEnvelope = {
    data: IncidentCreateManyReporterInput | IncidentCreateManyReporterInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    slotId?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    actualStartTime?: DateTimeNullableFilter<"Booking"> | Date | string | null
    actualEndTime?: DateTimeNullableFilter<"Booking"> | Date | string | null
    totalAmount?: FloatFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    qrCode?: StringNullableFilter<"Booking"> | string | null
    checkInCode?: StringNullableFilter<"Booking"> | string | null
    extendedTimes?: IntFilter<"Booking"> | number
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    priority?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    data?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    bookingId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    gatewayResponse?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    id?: StringFilter<"UserRole"> | string
    userId?: StringFilter<"UserRole"> | string
    role?: StringFilter<"UserRole"> | string
    locationId?: StringNullableFilter<"UserRole"> | string | null
    isActive?: BoolFilter<"UserRole"> | boolean
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutReporterInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutReporterInput, IncidentUncheckedUpdateWithoutReporterInput>
    create: XOR<IncidentCreateWithoutReporterInput, IncidentUncheckedCreateWithoutReporterInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutReporterInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutReporterInput, IncidentUncheckedUpdateWithoutReporterInput>
  }

  export type IncidentUpdateManyWithWhereWithoutReporterInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutReporterInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: StringFilter<"Incident"> | string
    bookingId?: StringNullableFilter<"Incident"> | string | null
    locationId?: StringFilter<"Incident"> | string
    reporterId?: StringFilter<"Incident"> | string
    type?: StringFilter<"Incident"> | string
    severity?: StringFilter<"Incident"> | string
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    status?: StringFilter<"Incident"> | string
    resolution?: StringNullableFilter<"Incident"> | string | null
    resolvedBy?: StringNullableFilter<"Incident"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    images?: StringNullableFilter<"Incident"> | string | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutReporterInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutReporterInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutReporterNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutReporterInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutReporterInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutReporterNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
  }

  export type UserCreateWithoutUserRolesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutReporterInput
  }

  export type UserUncheckedCreateWithoutUserRolesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutReporterInput
  }

  export type UserCreateOrConnectWithoutUserRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
  }

  export type ParkingLocationCreateWithoutUserRolesInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    description?: string | null
    features?: string | null
    operatingHours?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotCreateNestedManyWithoutLocationInput
    incidents?: IncidentCreateNestedManyWithoutLocationInput
    analytics?: ParkingAnalyticsCreateNestedManyWithoutLocationInput
  }

  export type ParkingLocationUncheckedCreateWithoutUserRolesInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    description?: string | null
    features?: string | null
    operatingHours?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotUncheckedCreateNestedManyWithoutLocationInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutLocationInput
    analytics?: ParkingAnalyticsUncheckedCreateNestedManyWithoutLocationInput
  }

  export type ParkingLocationCreateOrConnectWithoutUserRolesInput = {
    where: ParkingLocationWhereUniqueInput
    create: XOR<ParkingLocationCreateWithoutUserRolesInput, ParkingLocationUncheckedCreateWithoutUserRolesInput>
  }

  export type UserUpsertWithoutUserRolesInput = {
    update: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type UserUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutReporterNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
  }

  export type ParkingLocationUpsertWithoutUserRolesInput = {
    update: XOR<ParkingLocationUpdateWithoutUserRolesInput, ParkingLocationUncheckedUpdateWithoutUserRolesInput>
    create: XOR<ParkingLocationCreateWithoutUserRolesInput, ParkingLocationUncheckedCreateWithoutUserRolesInput>
    where?: ParkingLocationWhereInput
  }

  export type ParkingLocationUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: ParkingLocationWhereInput
    data: XOR<ParkingLocationUpdateWithoutUserRolesInput, ParkingLocationUncheckedUpdateWithoutUserRolesInput>
  }

  export type ParkingLocationUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUpdateManyWithoutLocationNestedInput
    incidents?: IncidentUpdateManyWithoutLocationNestedInput
    analytics?: ParkingAnalyticsUpdateManyWithoutLocationNestedInput
  }

  export type ParkingLocationUncheckedUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUncheckedUpdateManyWithoutLocationNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutLocationNestedInput
    analytics?: ParkingAnalyticsUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type ParkingSlotCreateWithoutLocationInput = {
    id?: string
    slotNumber: string
    type?: string
    basePrice: number
    status?: string
    features?: string | null
    rules?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutSlotInput
  }

  export type ParkingSlotUncheckedCreateWithoutLocationInput = {
    id?: string
    slotNumber: string
    type?: string
    basePrice: number
    status?: string
    features?: string | null
    rules?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutSlotInput
  }

  export type ParkingSlotCreateOrConnectWithoutLocationInput = {
    where: ParkingSlotWhereUniqueInput
    create: XOR<ParkingSlotCreateWithoutLocationInput, ParkingSlotUncheckedCreateWithoutLocationInput>
  }

  export type ParkingSlotCreateManyLocationInputEnvelope = {
    data: ParkingSlotCreateManyLocationInput | ParkingSlotCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleCreateWithoutLocationInput = {
    id?: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutLocationInput = {
    id?: string
    userId: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutLocationInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutLocationInput, UserRoleUncheckedCreateWithoutLocationInput>
  }

  export type UserRoleCreateManyLocationInputEnvelope = {
    data: UserRoleCreateManyLocationInput | UserRoleCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutLocationInput = {
    id?: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingCreateNestedOneWithoutIncidentsInput
    reporter: UserCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutLocationInput = {
    id?: string
    bookingId?: string | null
    reporterId: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateOrConnectWithoutLocationInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutLocationInput, IncidentUncheckedCreateWithoutLocationInput>
  }

  export type IncidentCreateManyLocationInputEnvelope = {
    data: IncidentCreateManyLocationInput | IncidentCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type ParkingAnalyticsCreateWithoutLocationInput = {
    id?: string
    date: Date | string
    totalSlots: number
    occupiedSlots: number
    totalBookings: number
    totalRevenue: number
    averageStayTime?: number | null
    peakHours?: string | null
    createdAt?: Date | string
  }

  export type ParkingAnalyticsUncheckedCreateWithoutLocationInput = {
    id?: string
    date: Date | string
    totalSlots: number
    occupiedSlots: number
    totalBookings: number
    totalRevenue: number
    averageStayTime?: number | null
    peakHours?: string | null
    createdAt?: Date | string
  }

  export type ParkingAnalyticsCreateOrConnectWithoutLocationInput = {
    where: ParkingAnalyticsWhereUniqueInput
    create: XOR<ParkingAnalyticsCreateWithoutLocationInput, ParkingAnalyticsUncheckedCreateWithoutLocationInput>
  }

  export type ParkingAnalyticsCreateManyLocationInputEnvelope = {
    data: ParkingAnalyticsCreateManyLocationInput | ParkingAnalyticsCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSlotUpsertWithWhereUniqueWithoutLocationInput = {
    where: ParkingSlotWhereUniqueInput
    update: XOR<ParkingSlotUpdateWithoutLocationInput, ParkingSlotUncheckedUpdateWithoutLocationInput>
    create: XOR<ParkingSlotCreateWithoutLocationInput, ParkingSlotUncheckedCreateWithoutLocationInput>
  }

  export type ParkingSlotUpdateWithWhereUniqueWithoutLocationInput = {
    where: ParkingSlotWhereUniqueInput
    data: XOR<ParkingSlotUpdateWithoutLocationInput, ParkingSlotUncheckedUpdateWithoutLocationInput>
  }

  export type ParkingSlotUpdateManyWithWhereWithoutLocationInput = {
    where: ParkingSlotScalarWhereInput
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyWithoutLocationInput>
  }

  export type ParkingSlotScalarWhereInput = {
    AND?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
    OR?: ParkingSlotScalarWhereInput[]
    NOT?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
    id?: StringFilter<"ParkingSlot"> | string
    slotNumber?: StringFilter<"ParkingSlot"> | string
    locationId?: StringFilter<"ParkingSlot"> | string
    type?: StringFilter<"ParkingSlot"> | string
    basePrice?: FloatFilter<"ParkingSlot"> | number
    status?: StringFilter<"ParkingSlot"> | string
    features?: StringNullableFilter<"ParkingSlot"> | string | null
    rules?: StringNullableFilter<"ParkingSlot"> | string | null
    createdAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlot"> | Date | string
  }

  export type UserRoleUpsertWithWhereUniqueWithoutLocationInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutLocationInput, UserRoleUncheckedUpdateWithoutLocationInput>
    create: XOR<UserRoleCreateWithoutLocationInput, UserRoleUncheckedCreateWithoutLocationInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutLocationInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutLocationInput, UserRoleUncheckedUpdateWithoutLocationInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutLocationInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutLocationInput>
  }

  export type IncidentUpsertWithWhereUniqueWithoutLocationInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutLocationInput, IncidentUncheckedUpdateWithoutLocationInput>
    create: XOR<IncidentCreateWithoutLocationInput, IncidentUncheckedCreateWithoutLocationInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutLocationInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutLocationInput, IncidentUncheckedUpdateWithoutLocationInput>
  }

  export type IncidentUpdateManyWithWhereWithoutLocationInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutLocationInput>
  }

  export type ParkingAnalyticsUpsertWithWhereUniqueWithoutLocationInput = {
    where: ParkingAnalyticsWhereUniqueInput
    update: XOR<ParkingAnalyticsUpdateWithoutLocationInput, ParkingAnalyticsUncheckedUpdateWithoutLocationInput>
    create: XOR<ParkingAnalyticsCreateWithoutLocationInput, ParkingAnalyticsUncheckedCreateWithoutLocationInput>
  }

  export type ParkingAnalyticsUpdateWithWhereUniqueWithoutLocationInput = {
    where: ParkingAnalyticsWhereUniqueInput
    data: XOR<ParkingAnalyticsUpdateWithoutLocationInput, ParkingAnalyticsUncheckedUpdateWithoutLocationInput>
  }

  export type ParkingAnalyticsUpdateManyWithWhereWithoutLocationInput = {
    where: ParkingAnalyticsScalarWhereInput
    data: XOR<ParkingAnalyticsUpdateManyMutationInput, ParkingAnalyticsUncheckedUpdateManyWithoutLocationInput>
  }

  export type ParkingAnalyticsScalarWhereInput = {
    AND?: ParkingAnalyticsScalarWhereInput | ParkingAnalyticsScalarWhereInput[]
    OR?: ParkingAnalyticsScalarWhereInput[]
    NOT?: ParkingAnalyticsScalarWhereInput | ParkingAnalyticsScalarWhereInput[]
    id?: StringFilter<"ParkingAnalytics"> | string
    locationId?: StringFilter<"ParkingAnalytics"> | string
    date?: DateTimeFilter<"ParkingAnalytics"> | Date | string
    totalSlots?: IntFilter<"ParkingAnalytics"> | number
    occupiedSlots?: IntFilter<"ParkingAnalytics"> | number
    totalBookings?: IntFilter<"ParkingAnalytics"> | number
    totalRevenue?: FloatFilter<"ParkingAnalytics"> | number
    averageStayTime?: FloatNullableFilter<"ParkingAnalytics"> | number | null
    peakHours?: StringNullableFilter<"ParkingAnalytics"> | string | null
    createdAt?: DateTimeFilter<"ParkingAnalytics"> | Date | string
  }

  export type ParkingLocationCreateWithoutSlotsInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    description?: string | null
    features?: string | null
    operatingHours?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: UserRoleCreateNestedManyWithoutLocationInput
    incidents?: IncidentCreateNestedManyWithoutLocationInput
    analytics?: ParkingAnalyticsCreateNestedManyWithoutLocationInput
  }

  export type ParkingLocationUncheckedCreateWithoutSlotsInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    description?: string | null
    features?: string | null
    operatingHours?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutLocationInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutLocationInput
    analytics?: ParkingAnalyticsUncheckedCreateNestedManyWithoutLocationInput
  }

  export type ParkingLocationCreateOrConnectWithoutSlotsInput = {
    where: ParkingLocationWhereUniqueInput
    create: XOR<ParkingLocationCreateWithoutSlotsInput, ParkingLocationUncheckedCreateWithoutSlotsInput>
  }

  export type BookingCreateWithoutSlotInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    incidents?: IncidentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutSlotInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutSlotInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSlotInput, BookingUncheckedCreateWithoutSlotInput>
  }

  export type BookingCreateManySlotInputEnvelope = {
    data: BookingCreateManySlotInput | BookingCreateManySlotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingLocationUpsertWithoutSlotsInput = {
    update: XOR<ParkingLocationUpdateWithoutSlotsInput, ParkingLocationUncheckedUpdateWithoutSlotsInput>
    create: XOR<ParkingLocationCreateWithoutSlotsInput, ParkingLocationUncheckedCreateWithoutSlotsInput>
    where?: ParkingLocationWhereInput
  }

  export type ParkingLocationUpdateToOneWithWhereWithoutSlotsInput = {
    where?: ParkingLocationWhereInput
    data: XOR<ParkingLocationUpdateWithoutSlotsInput, ParkingLocationUncheckedUpdateWithoutSlotsInput>
  }

  export type ParkingLocationUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserRoleUpdateManyWithoutLocationNestedInput
    incidents?: IncidentUpdateManyWithoutLocationNestedInput
    analytics?: ParkingAnalyticsUpdateManyWithoutLocationNestedInput
  }

  export type ParkingLocationUncheckedUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserRoleUncheckedUpdateManyWithoutLocationNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutLocationNestedInput
    analytics?: ParkingAnalyticsUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutSlotInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutSlotInput, BookingUncheckedUpdateWithoutSlotInput>
    create: XOR<BookingCreateWithoutSlotInput, BookingUncheckedCreateWithoutSlotInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutSlotInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutSlotInput, BookingUncheckedUpdateWithoutSlotInput>
  }

  export type BookingUpdateManyWithWhereWithoutSlotInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutSlotInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutReporterInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutReporterInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type ParkingSlotCreateWithoutBookingsInput = {
    id?: string
    slotNumber: string
    type?: string
    basePrice: number
    status?: string
    features?: string | null
    rules?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location: ParkingLocationCreateNestedOneWithoutSlotsInput
  }

  export type ParkingSlotUncheckedCreateWithoutBookingsInput = {
    id?: string
    slotNumber: string
    locationId: string
    type?: string
    basePrice: number
    status?: string
    features?: string | null
    rules?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingSlotCreateOrConnectWithoutBookingsInput = {
    where: ParkingSlotWhereUniqueInput
    create: XOR<ParkingSlotCreateWithoutBookingsInput, ParkingSlotUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    id?: string
    amount: number
    method: string
    status?: string
    transactionId?: string | null
    gatewayResponse?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: string
    userId: string
    amount: number
    method: string
    status?: string
    transactionId?: string | null
    gatewayResponse?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type IncidentCreateWithoutBookingInput = {
    id?: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location: ParkingLocationCreateNestedOneWithoutIncidentsInput
    reporter: UserCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutBookingInput = {
    id?: string
    locationId: string
    reporterId: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateOrConnectWithoutBookingInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutBookingInput, IncidentUncheckedCreateWithoutBookingInput>
  }

  export type IncidentCreateManyBookingInputEnvelope = {
    data: IncidentCreateManyBookingInput | IncidentCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutReporterNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
  }

  export type ParkingSlotUpsertWithoutBookingsInput = {
    update: XOR<ParkingSlotUpdateWithoutBookingsInput, ParkingSlotUncheckedUpdateWithoutBookingsInput>
    create: XOR<ParkingSlotCreateWithoutBookingsInput, ParkingSlotUncheckedCreateWithoutBookingsInput>
    where?: ParkingSlotWhereInput
  }

  export type ParkingSlotUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ParkingSlotWhereInput
    data: XOR<ParkingSlotUpdateWithoutBookingsInput, ParkingSlotUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingSlotUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    features?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: ParkingLocationUpdateOneRequiredWithoutSlotsNestedInput
  }

  export type ParkingSlotUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    features?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithoutBookingInput = {
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutBookingInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutBookingInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutBookingInput, IncidentUncheckedUpdateWithoutBookingInput>
    create: XOR<IncidentCreateWithoutBookingInput, IncidentUncheckedCreateWithoutBookingInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutBookingInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutBookingInput, IncidentUncheckedUpdateWithoutBookingInput>
  }

  export type IncidentUpdateManyWithWhereWithoutBookingInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutBookingInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutReporterInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutReporterInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type BookingCreateWithoutPaymentInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    slot: ParkingSlotCreateNestedOneWithoutBookingsInput
    incidents?: IncidentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    slotId: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutReporterNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
  }

  export type BookingUpsertWithoutPaymentInput = {
    update: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    slot?: ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput
    incidents?: IncidentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutReporterInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutReporterInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutReporterNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutReporterNestedInput
  }

  export type BookingCreateWithoutIncidentsInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    slot: ParkingSlotCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutIncidentsInput = {
    id?: string
    userId: string
    slotId: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutIncidentsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutIncidentsInput, BookingUncheckedCreateWithoutIncidentsInput>
  }

  export type ParkingLocationCreateWithoutIncidentsInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    description?: string | null
    features?: string | null
    operatingHours?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotCreateNestedManyWithoutLocationInput
    userRoles?: UserRoleCreateNestedManyWithoutLocationInput
    analytics?: ParkingAnalyticsCreateNestedManyWithoutLocationInput
  }

  export type ParkingLocationUncheckedCreateWithoutIncidentsInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    description?: string | null
    features?: string | null
    operatingHours?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotUncheckedCreateNestedManyWithoutLocationInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutLocationInput
    analytics?: ParkingAnalyticsUncheckedCreateNestedManyWithoutLocationInput
  }

  export type ParkingLocationCreateOrConnectWithoutIncidentsInput = {
    where: ParkingLocationWhereUniqueInput
    create: XOR<ParkingLocationCreateWithoutIncidentsInput, ParkingLocationUncheckedCreateWithoutIncidentsInput>
  }

  export type UserCreateWithoutIncidentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIncidentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIncidentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
  }

  export type BookingUpsertWithoutIncidentsInput = {
    update: XOR<BookingUpdateWithoutIncidentsInput, BookingUncheckedUpdateWithoutIncidentsInput>
    create: XOR<BookingCreateWithoutIncidentsInput, BookingUncheckedCreateWithoutIncidentsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutIncidentsInput, BookingUncheckedUpdateWithoutIncidentsInput>
  }

  export type BookingUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    slot?: ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type ParkingLocationUpsertWithoutIncidentsInput = {
    update: XOR<ParkingLocationUpdateWithoutIncidentsInput, ParkingLocationUncheckedUpdateWithoutIncidentsInput>
    create: XOR<ParkingLocationCreateWithoutIncidentsInput, ParkingLocationUncheckedCreateWithoutIncidentsInput>
    where?: ParkingLocationWhereInput
  }

  export type ParkingLocationUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: ParkingLocationWhereInput
    data: XOR<ParkingLocationUpdateWithoutIncidentsInput, ParkingLocationUncheckedUpdateWithoutIncidentsInput>
  }

  export type ParkingLocationUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUpdateManyWithoutLocationNestedInput
    userRoles?: UserRoleUpdateManyWithoutLocationNestedInput
    analytics?: ParkingAnalyticsUpdateManyWithoutLocationNestedInput
  }

  export type ParkingLocationUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUncheckedUpdateManyWithoutLocationNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutLocationNestedInput
    analytics?: ParkingAnalyticsUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type UserUpsertWithoutIncidentsInput = {
    update: XOR<UserUpdateWithoutIncidentsInput, UserUncheckedUpdateWithoutIncidentsInput>
    create: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncidentsInput, UserUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParkingLocationCreateWithoutAnalyticsInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    description?: string | null
    features?: string | null
    operatingHours?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotCreateNestedManyWithoutLocationInput
    userRoles?: UserRoleCreateNestedManyWithoutLocationInput
    incidents?: IncidentCreateNestedManyWithoutLocationInput
  }

  export type ParkingLocationUncheckedCreateWithoutAnalyticsInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    description?: string | null
    features?: string | null
    operatingHours?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotUncheckedCreateNestedManyWithoutLocationInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutLocationInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutLocationInput
  }

  export type ParkingLocationCreateOrConnectWithoutAnalyticsInput = {
    where: ParkingLocationWhereUniqueInput
    create: XOR<ParkingLocationCreateWithoutAnalyticsInput, ParkingLocationUncheckedCreateWithoutAnalyticsInput>
  }

  export type ParkingLocationUpsertWithoutAnalyticsInput = {
    update: XOR<ParkingLocationUpdateWithoutAnalyticsInput, ParkingLocationUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<ParkingLocationCreateWithoutAnalyticsInput, ParkingLocationUncheckedCreateWithoutAnalyticsInput>
    where?: ParkingLocationWhereInput
  }

  export type ParkingLocationUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: ParkingLocationWhereInput
    data: XOR<ParkingLocationUpdateWithoutAnalyticsInput, ParkingLocationUncheckedUpdateWithoutAnalyticsInput>
  }

  export type ParkingLocationUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUpdateManyWithoutLocationNestedInput
    userRoles?: UserRoleUpdateManyWithoutLocationNestedInput
    incidents?: IncidentUpdateManyWithoutLocationNestedInput
  }

  export type ParkingLocationUncheckedUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableStringFieldUpdateOperationsInput | string | null
    operatingHours?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUncheckedUpdateManyWithoutLocationNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutLocationNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type BookingCreateManyUserInput = {
    id?: string
    slotId: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    type: string
    priority?: string
    isRead?: boolean
    readAt?: Date | string | null
    data?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    bookingId: string
    amount: number
    method: string
    status?: string
    transactionId?: string | null
    gatewayResponse?: string | null
    paidAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateManyUserInput = {
    id?: string
    role: string
    locationId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateManyReporterInput = {
    id?: string
    bookingId?: string | null
    locationId: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slot?: ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    incidents?: IncidentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: ParkingLocationUpdateOneWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutIncidentsNestedInput
    location?: ParkingLocationUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotCreateManyLocationInput = {
    id?: string
    slotNumber: string
    type?: string
    basePrice: number
    status?: string
    features?: string | null
    rules?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateManyLocationInput = {
    id?: string
    userId: string
    role: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateManyLocationInput = {
    id?: string
    bookingId?: string | null
    reporterId: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingAnalyticsCreateManyLocationInput = {
    id?: string
    date: Date | string
    totalSlots: number
    occupiedSlots: number
    totalBookings: number
    totalRevenue: number
    averageStayTime?: number | null
    peakHours?: string | null
    createdAt?: Date | string
  }

  export type ParkingSlotUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    features?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    features?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    features?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutIncidentsNestedInput
    reporter?: UserUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingAnalyticsUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    occupiedSlots?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    averageStayTime?: NullableFloatFieldUpdateOperationsInput | number | null
    peakHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingAnalyticsUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    occupiedSlots?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    averageStayTime?: NullableFloatFieldUpdateOperationsInput | number | null
    peakHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingAnalyticsUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    occupiedSlots?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    averageStayTime?: NullableFloatFieldUpdateOperationsInput | number | null
    peakHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManySlotInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime: Date | string
    actualStartTime?: Date | string | null
    actualEndTime?: Date | string | null
    totalAmount: number
    status?: string
    qrCode?: string | null
    checkInCode?: string | null
    extendedTimes?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    incidents?: IncidentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualStartTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualEndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    checkInCode?: NullableStringFieldUpdateOperationsInput | string | null
    extendedTimes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateManyBookingInput = {
    id?: string
    locationId: string
    reporterId: string
    type: string
    severity?: string
    title: string
    description: string
    status?: string
    resolution?: string | null
    resolvedBy?: string | null
    resolvedAt?: Date | string | null
    images?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: ParkingLocationUpdateOneRequiredWithoutIncidentsNestedInput
    reporter?: UserUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}