
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model Place
 * 
 */
export type Place = $Result.DefaultSelection<Prisma.$PlacePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model TripLike
 * 
 */
export type TripLike = $Result.DefaultSelection<Prisma.$TripLikePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.place`: Exposes CRUD operations for the **Place** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.place.findMany()
    * ```
    */
  get place(): Prisma.PlaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripLike`: Exposes CRUD operations for the **TripLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripLikes
    * const tripLikes = await prisma.tripLike.findMany()
    * ```
    */
  get tripLike(): Prisma.TripLikeDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Trip: 'Trip',
    Place: 'Place',
    Comment: 'Comment',
    TripLike: 'TripLike'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "trip" | "place" | "comment" | "tripLike"
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
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      Place: {
        payload: Prisma.$PlacePayload<ExtArgs>
        fields: Prisma.PlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findFirst: {
            args: Prisma.PlaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findMany: {
            args: Prisma.PlaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          create: {
            args: Prisma.PlaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          createMany: {
            args: Prisma.PlaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          delete: {
            args: Prisma.PlaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          update: {
            args: Prisma.PlaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          deleteMany: {
            args: Prisma.PlaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          upsert: {
            args: Prisma.PlaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          aggregate: {
            args: Prisma.PlaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlace>
          }
          groupBy: {
            args: Prisma.PlaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaceCountArgs<ExtArgs>
            result: $Utils.Optional<PlaceCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      TripLike: {
        payload: Prisma.$TripLikePayload<ExtArgs>
        fields: Prisma.TripLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLikePayload>
          }
          findFirst: {
            args: Prisma.TripLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLikePayload>
          }
          findMany: {
            args: Prisma.TripLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLikePayload>[]
          }
          create: {
            args: Prisma.TripLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLikePayload>
          }
          createMany: {
            args: Prisma.TripLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLikePayload>[]
          }
          delete: {
            args: Prisma.TripLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLikePayload>
          }
          update: {
            args: Prisma.TripLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLikePayload>
          }
          deleteMany: {
            args: Prisma.TripLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLikePayload>[]
          }
          upsert: {
            args: Prisma.TripLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripLikePayload>
          }
          aggregate: {
            args: Prisma.TripLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripLike>
          }
          groupBy: {
            args: Prisma.TripLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripLikeCountArgs<ExtArgs>
            result: $Utils.Optional<TripLikeCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    trip?: TripOmit
    place?: PlaceOmit
    comment?: CommentOmit
    tripLike?: TripLikeOmit
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
    trips: number
    comments: number
    likes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | UserCountOutputTypeCountTripsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
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
  export type UserCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripLikeWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    places: number
    comments: number
    likes: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    places?: boolean | TripCountOutputTypeCountPlacesArgs
    comments?: boolean | TripCountOutputTypeCountCommentsArgs
    likes?: boolean | TripCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountPlacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripLikeWhereInput
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
    avatarColor: string | null
    homeCity: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatarColor: string | null
    homeCity: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    avatarColor: number
    homeCity: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    avatarColor?: true
    homeCity?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    avatarColor?: true
    homeCity?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    avatarColor?: true
    homeCity?: true
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
    name: string
    avatarColor: string
    homeCity: string
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
    avatarColor?: boolean
    homeCity?: boolean
    trips?: boolean | User$tripsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatarColor?: boolean
    homeCity?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatarColor?: boolean
    homeCity?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    avatarColor?: boolean
    homeCity?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatarColor" | "homeCity", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | User$tripsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trips: Prisma.$TripPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$TripLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      avatarColor: string
      homeCity: string
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
    trips<T extends User$tripsArgs<ExtArgs> = {}>(args?: Subset<T, User$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly avatarColor: FieldRef<"User", 'String'>
    readonly homeCity: FieldRef<"User", 'String'>
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
   * User.trips
   */
  export type User$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
    where?: TripLikeWhereInput
    orderBy?: TripLikeOrderByWithRelationInput | TripLikeOrderByWithRelationInput[]
    cursor?: TripLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripLikeScalarFieldEnum | TripLikeScalarFieldEnum[]
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
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    days: number | null
    approximateCost: number | null
    rating: number | null
  }

  export type TripSumAggregateOutputType = {
    days: number | null
    approximateCost: number | null
    rating: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    city: string | null
    country: string | null
    startDate: string | null
    endDate: string | null
    days: number | null
    approximateCost: number | null
    currency: string | null
    rating: number | null
    coverImage: string | null
    notes: string | null
    createdAt: string | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    city: string | null
    country: string | null
    startDate: string | null
    endDate: string | null
    days: number | null
    approximateCost: number | null
    currency: string | null
    rating: number | null
    coverImage: string | null
    notes: string | null
    createdAt: string | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    city: number
    country: number
    startDate: number
    endDate: number
    days: number
    approximateCost: number
    currency: number
    rating: number
    coverImage: number
    notes: number
    createdAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    days?: true
    approximateCost?: true
    rating?: true
  }

  export type TripSumAggregateInputType = {
    days?: true
    approximateCost?: true
    rating?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    city?: true
    country?: true
    startDate?: true
    endDate?: true
    days?: true
    approximateCost?: true
    currency?: true
    rating?: true
    coverImage?: true
    notes?: true
    createdAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    city?: true
    country?: true
    startDate?: true
    endDate?: true
    days?: true
    approximateCost?: true
    currency?: true
    rating?: true
    coverImage?: true
    notes?: true
    createdAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    city?: true
    country?: true
    startDate?: true
    endDate?: true
    days?: true
    approximateCost?: true
    currency?: true
    rating?: true
    coverImage?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    userId: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes: string | null
    createdAt: string
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    city?: boolean
    country?: boolean
    startDate?: boolean
    endDate?: boolean
    days?: boolean
    approximateCost?: boolean
    currency?: boolean
    rating?: boolean
    coverImage?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    places?: boolean | Trip$placesArgs<ExtArgs>
    comments?: boolean | Trip$commentsArgs<ExtArgs>
    likes?: boolean | Trip$likesArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    city?: boolean
    country?: boolean
    startDate?: boolean
    endDate?: boolean
    days?: boolean
    approximateCost?: boolean
    currency?: boolean
    rating?: boolean
    coverImage?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    city?: boolean
    country?: boolean
    startDate?: boolean
    endDate?: boolean
    days?: boolean
    approximateCost?: boolean
    currency?: boolean
    rating?: boolean
    coverImage?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    city?: boolean
    country?: boolean
    startDate?: boolean
    endDate?: boolean
    days?: boolean
    approximateCost?: boolean
    currency?: boolean
    rating?: boolean
    coverImage?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "city" | "country" | "startDate" | "endDate" | "days" | "approximateCost" | "currency" | "rating" | "coverImage" | "notes" | "createdAt", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    places?: boolean | Trip$placesArgs<ExtArgs>
    comments?: boolean | Trip$commentsArgs<ExtArgs>
    likes?: boolean | Trip$likesArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      places: Prisma.$PlacePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$TripLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      city: string
      country: string
      startDate: string
      endDate: string
      days: number
      approximateCost: number
      currency: string
      rating: number
      coverImage: string
      notes: string | null
      createdAt: string
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
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
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    places<T extends Trip$placesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$placesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Trip$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Trip$likesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly userId: FieldRef<"Trip", 'String'>
    readonly title: FieldRef<"Trip", 'String'>
    readonly city: FieldRef<"Trip", 'String'>
    readonly country: FieldRef<"Trip", 'String'>
    readonly startDate: FieldRef<"Trip", 'String'>
    readonly endDate: FieldRef<"Trip", 'String'>
    readonly days: FieldRef<"Trip", 'Int'>
    readonly approximateCost: FieldRef<"Trip", 'Int'>
    readonly currency: FieldRef<"Trip", 'String'>
    readonly rating: FieldRef<"Trip", 'Int'>
    readonly coverImage: FieldRef<"Trip", 'String'>
    readonly notes: FieldRef<"Trip", 'String'>
    readonly createdAt: FieldRef<"Trip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.places
   */
  export type Trip$placesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    cursor?: PlaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Trip.comments
   */
  export type Trip$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Trip.likes
   */
  export type Trip$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
    where?: TripLikeWhereInput
    orderBy?: TripLikeOrderByWithRelationInput | TripLikeOrderByWithRelationInput[]
    cursor?: TripLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripLikeScalarFieldEnum | TripLikeScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model Place
   */

  export type AggregatePlace = {
    _count: PlaceCountAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  export type PlaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    note: string | null
    tripId: string | null
    type: string | null
  }

  export type PlaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    note: string | null
    tripId: string | null
    type: string | null
  }

  export type PlaceCountAggregateOutputType = {
    id: number
    name: number
    city: number
    note: number
    tripId: number
    type: number
    _all: number
  }


  export type PlaceMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    note?: true
    tripId?: true
    type?: true
  }

  export type PlaceMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    note?: true
    tripId?: true
    type?: true
  }

  export type PlaceCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    note?: true
    tripId?: true
    type?: true
    _all?: true
  }

  export type PlaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Place to aggregate.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Places
    **/
    _count?: true | PlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaceMaxAggregateInputType
  }

  export type GetPlaceAggregateType<T extends PlaceAggregateArgs> = {
        [P in keyof T & keyof AggregatePlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlace[P]>
      : GetScalarType<T[P], AggregatePlace[P]>
  }




  export type PlaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithAggregationInput | PlaceOrderByWithAggregationInput[]
    by: PlaceScalarFieldEnum[] | PlaceScalarFieldEnum
    having?: PlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaceCountAggregateInputType | true
    _min?: PlaceMinAggregateInputType
    _max?: PlaceMaxAggregateInputType
  }

  export type PlaceGroupByOutputType = {
    id: string
    name: string
    city: string
    note: string | null
    tripId: string
    type: string
    _count: PlaceCountAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  type GetPlaceGroupByPayload<T extends PlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaceGroupByOutputType[P]>
            : GetScalarType<T[P], PlaceGroupByOutputType[P]>
        }
      >
    >


  export type PlaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    note?: boolean
    tripId?: boolean
    type?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    note?: boolean
    tripId?: boolean
    type?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    note?: boolean
    tripId?: boolean
    type?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    note?: boolean
    tripId?: boolean
    type?: boolean
  }

  export type PlaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "note" | "tripId" | "type", ExtArgs["result"]["place"]>
  export type PlaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type PlaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type PlaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $PlacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Place"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      city: string
      note: string | null
      tripId: string
      type: string
    }, ExtArgs["result"]["place"]>
    composites: {}
  }

  type PlaceGetPayload<S extends boolean | null | undefined | PlaceDefaultArgs> = $Result.GetResult<Prisma.$PlacePayload, S>

  type PlaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaceCountAggregateInputType | true
    }

  export interface PlaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Place'], meta: { name: 'Place' } }
    /**
     * Find zero or one Place that matches the filter.
     * @param {PlaceFindUniqueArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaceFindUniqueArgs>(args: SelectSubset<T, PlaceFindUniqueArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Place that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaceFindUniqueOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaceFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaceFindFirstArgs>(args?: SelectSubset<T, PlaceFindFirstArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaceFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.place.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.place.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placeWithIdOnly = await prisma.place.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaceFindManyArgs>(args?: SelectSubset<T, PlaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Place.
     * @param {PlaceCreateArgs} args - Arguments to create a Place.
     * @example
     * // Create one Place
     * const Place = await prisma.place.create({
     *   data: {
     *     // ... data to create a Place
     *   }
     * })
     * 
     */
    create<T extends PlaceCreateArgs>(args: SelectSubset<T, PlaceCreateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Places.
     * @param {PlaceCreateManyArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaceCreateManyArgs>(args?: SelectSubset<T, PlaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Places and returns the data saved in the database.
     * @param {PlaceCreateManyAndReturnArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Places and only return the `id`
     * const placeWithIdOnly = await prisma.place.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaceCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Place.
     * @param {PlaceDeleteArgs} args - Arguments to delete one Place.
     * @example
     * // Delete one Place
     * const Place = await prisma.place.delete({
     *   where: {
     *     // ... filter to delete one Place
     *   }
     * })
     * 
     */
    delete<T extends PlaceDeleteArgs>(args: SelectSubset<T, PlaceDeleteArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Place.
     * @param {PlaceUpdateArgs} args - Arguments to update one Place.
     * @example
     * // Update one Place
     * const place = await prisma.place.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaceUpdateArgs>(args: SelectSubset<T, PlaceUpdateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Places.
     * @param {PlaceDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.place.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaceDeleteManyArgs>(args?: SelectSubset<T, PlaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaceUpdateManyArgs>(args: SelectSubset<T, PlaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places and returns the data updated in the database.
     * @param {PlaceUpdateManyAndReturnArgs} args - Arguments to update many Places.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Places and only return the `id`
     * const placeWithIdOnly = await prisma.place.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlaceUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Place.
     * @param {PlaceUpsertArgs} args - Arguments to update or create a Place.
     * @example
     * // Update or create a Place
     * const place = await prisma.place.upsert({
     *   create: {
     *     // ... data to create a Place
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Place we want to update
     *   }
     * })
     */
    upsert<T extends PlaceUpsertArgs>(args: SelectSubset<T, PlaceUpsertArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.place.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends PlaceCountArgs>(
      args?: Subset<T, PlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaceAggregateArgs>(args: Subset<T, PlaceAggregateArgs>): Prisma.PrismaPromise<GetPlaceAggregateType<T>>

    /**
     * Group by Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceGroupByArgs} args - Group by arguments.
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
      T extends PlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaceGroupByArgs['orderBy'] }
        : { orderBy?: PlaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Place model
   */
  readonly fields: PlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Place.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Place model
   */
  interface PlaceFieldRefs {
    readonly id: FieldRef<"Place", 'String'>
    readonly name: FieldRef<"Place", 'String'>
    readonly city: FieldRef<"Place", 'String'>
    readonly note: FieldRef<"Place", 'String'>
    readonly tripId: FieldRef<"Place", 'String'>
    readonly type: FieldRef<"Place", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Place findUnique
   */
  export type PlaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findUniqueOrThrow
   */
  export type PlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findFirst
   */
  export type PlaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findFirstOrThrow
   */
  export type PlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findMany
   */
  export type PlaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place create
   */
  export type PlaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Place.
     */
    data: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
  }

  /**
   * Place createMany
   */
  export type PlaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
  }

  /**
   * Place createManyAndReturn
   */
  export type PlaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Place update
   */
  export type PlaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Place.
     */
    data: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
    /**
     * Choose, which Place to update.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place updateMany
   */
  export type PlaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to update.
     */
    limit?: number
  }

  /**
   * Place updateManyAndReturn
   */
  export type PlaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Place upsert
   */
  export type PlaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Place to update in case it exists.
     */
    where: PlaceWhereUniqueInput
    /**
     * In case the Place found by the `where` argument doesn't exist, create a new Place with this data.
     */
    create: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
    /**
     * In case the Place was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
  }

  /**
   * Place delete
   */
  export type PlaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter which Place to delete.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place deleteMany
   */
  export type PlaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to delete
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to delete.
     */
    limit?: number
  }

  /**
   * Place without action
   */
  export type PlaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    authorId: string | null
    message: string | null
    createdAt: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    authorId: string | null
    message: string | null
    createdAt: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    tripId: number
    authorId: number
    message: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    tripId?: true
    authorId?: true
    message?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    tripId?: true
    authorId?: true
    message?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    tripId?: true
    authorId?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    tripId: string
    authorId: string
    message: string
    createdAt: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    authorId?: boolean
    message?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    authorId?: boolean
    message?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    authorId?: boolean
    message?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    tripId?: boolean
    authorId?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "authorId" | "message" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      authorId: string
      message: string
      createdAt: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly tripId: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly message: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model TripLike
   */

  export type AggregateTripLike = {
    _count: TripLikeCountAggregateOutputType | null
    _min: TripLikeMinAggregateOutputType | null
    _max: TripLikeMaxAggregateOutputType | null
  }

  export type TripLikeMinAggregateOutputType = {
    tripId: string | null
    userId: string | null
  }

  export type TripLikeMaxAggregateOutputType = {
    tripId: string | null
    userId: string | null
  }

  export type TripLikeCountAggregateOutputType = {
    tripId: number
    userId: number
    _all: number
  }


  export type TripLikeMinAggregateInputType = {
    tripId?: true
    userId?: true
  }

  export type TripLikeMaxAggregateInputType = {
    tripId?: true
    userId?: true
  }

  export type TripLikeCountAggregateInputType = {
    tripId?: true
    userId?: true
    _all?: true
  }

  export type TripLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripLike to aggregate.
     */
    where?: TripLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripLikes to fetch.
     */
    orderBy?: TripLikeOrderByWithRelationInput | TripLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripLikes
    **/
    _count?: true | TripLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripLikeMaxAggregateInputType
  }

  export type GetTripLikeAggregateType<T extends TripLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateTripLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripLike[P]>
      : GetScalarType<T[P], AggregateTripLike[P]>
  }




  export type TripLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripLikeWhereInput
    orderBy?: TripLikeOrderByWithAggregationInput | TripLikeOrderByWithAggregationInput[]
    by: TripLikeScalarFieldEnum[] | TripLikeScalarFieldEnum
    having?: TripLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripLikeCountAggregateInputType | true
    _min?: TripLikeMinAggregateInputType
    _max?: TripLikeMaxAggregateInputType
  }

  export type TripLikeGroupByOutputType = {
    tripId: string
    userId: string
    _count: TripLikeCountAggregateOutputType | null
    _min: TripLikeMinAggregateOutputType | null
    _max: TripLikeMaxAggregateOutputType | null
  }

  type GetTripLikeGroupByPayload<T extends TripLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripLikeGroupByOutputType[P]>
            : GetScalarType<T[P], TripLikeGroupByOutputType[P]>
        }
      >
    >


  export type TripLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tripId?: boolean
    userId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripLike"]>

  export type TripLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tripId?: boolean
    userId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripLike"]>

  export type TripLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tripId?: boolean
    userId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripLike"]>

  export type TripLikeSelectScalar = {
    tripId?: boolean
    userId?: boolean
  }

  export type TripLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tripId" | "userId", ExtArgs["result"]["tripLike"]>
  export type TripLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripLike"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tripId: string
      userId: string
    }, ExtArgs["result"]["tripLike"]>
    composites: {}
  }

  type TripLikeGetPayload<S extends boolean | null | undefined | TripLikeDefaultArgs> = $Result.GetResult<Prisma.$TripLikePayload, S>

  type TripLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripLikeCountAggregateInputType | true
    }

  export interface TripLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripLike'], meta: { name: 'TripLike' } }
    /**
     * Find zero or one TripLike that matches the filter.
     * @param {TripLikeFindUniqueArgs} args - Arguments to find a TripLike
     * @example
     * // Get one TripLike
     * const tripLike = await prisma.tripLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripLikeFindUniqueArgs>(args: SelectSubset<T, TripLikeFindUniqueArgs<ExtArgs>>): Prisma__TripLikeClient<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripLikeFindUniqueOrThrowArgs} args - Arguments to find a TripLike
     * @example
     * // Get one TripLike
     * const tripLike = await prisma.tripLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, TripLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripLikeClient<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLikeFindFirstArgs} args - Arguments to find a TripLike
     * @example
     * // Get one TripLike
     * const tripLike = await prisma.tripLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripLikeFindFirstArgs>(args?: SelectSubset<T, TripLikeFindFirstArgs<ExtArgs>>): Prisma__TripLikeClient<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLikeFindFirstOrThrowArgs} args - Arguments to find a TripLike
     * @example
     * // Get one TripLike
     * const tripLike = await prisma.tripLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, TripLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripLikeClient<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripLikes
     * const tripLikes = await prisma.tripLike.findMany()
     * 
     * // Get first 10 TripLikes
     * const tripLikes = await prisma.tripLike.findMany({ take: 10 })
     * 
     * // Only select the `tripId`
     * const tripLikeWithTripIdOnly = await prisma.tripLike.findMany({ select: { tripId: true } })
     * 
     */
    findMany<T extends TripLikeFindManyArgs>(args?: SelectSubset<T, TripLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripLike.
     * @param {TripLikeCreateArgs} args - Arguments to create a TripLike.
     * @example
     * // Create one TripLike
     * const TripLike = await prisma.tripLike.create({
     *   data: {
     *     // ... data to create a TripLike
     *   }
     * })
     * 
     */
    create<T extends TripLikeCreateArgs>(args: SelectSubset<T, TripLikeCreateArgs<ExtArgs>>): Prisma__TripLikeClient<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripLikes.
     * @param {TripLikeCreateManyArgs} args - Arguments to create many TripLikes.
     * @example
     * // Create many TripLikes
     * const tripLike = await prisma.tripLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripLikeCreateManyArgs>(args?: SelectSubset<T, TripLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripLikes and returns the data saved in the database.
     * @param {TripLikeCreateManyAndReturnArgs} args - Arguments to create many TripLikes.
     * @example
     * // Create many TripLikes
     * const tripLike = await prisma.tripLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripLikes and only return the `tripId`
     * const tripLikeWithTripIdOnly = await prisma.tripLike.createManyAndReturn({
     *   select: { tripId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, TripLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripLike.
     * @param {TripLikeDeleteArgs} args - Arguments to delete one TripLike.
     * @example
     * // Delete one TripLike
     * const TripLike = await prisma.tripLike.delete({
     *   where: {
     *     // ... filter to delete one TripLike
     *   }
     * })
     * 
     */
    delete<T extends TripLikeDeleteArgs>(args: SelectSubset<T, TripLikeDeleteArgs<ExtArgs>>): Prisma__TripLikeClient<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripLike.
     * @param {TripLikeUpdateArgs} args - Arguments to update one TripLike.
     * @example
     * // Update one TripLike
     * const tripLike = await prisma.tripLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripLikeUpdateArgs>(args: SelectSubset<T, TripLikeUpdateArgs<ExtArgs>>): Prisma__TripLikeClient<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripLikes.
     * @param {TripLikeDeleteManyArgs} args - Arguments to filter TripLikes to delete.
     * @example
     * // Delete a few TripLikes
     * const { count } = await prisma.tripLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripLikeDeleteManyArgs>(args?: SelectSubset<T, TripLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripLikes
     * const tripLike = await prisma.tripLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripLikeUpdateManyArgs>(args: SelectSubset<T, TripLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripLikes and returns the data updated in the database.
     * @param {TripLikeUpdateManyAndReturnArgs} args - Arguments to update many TripLikes.
     * @example
     * // Update many TripLikes
     * const tripLike = await prisma.tripLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripLikes and only return the `tripId`
     * const tripLikeWithTripIdOnly = await prisma.tripLike.updateManyAndReturn({
     *   select: { tripId: true },
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
    updateManyAndReturn<T extends TripLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, TripLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripLike.
     * @param {TripLikeUpsertArgs} args - Arguments to update or create a TripLike.
     * @example
     * // Update or create a TripLike
     * const tripLike = await prisma.tripLike.upsert({
     *   create: {
     *     // ... data to create a TripLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripLike we want to update
     *   }
     * })
     */
    upsert<T extends TripLikeUpsertArgs>(args: SelectSubset<T, TripLikeUpsertArgs<ExtArgs>>): Prisma__TripLikeClient<$Result.GetResult<Prisma.$TripLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLikeCountArgs} args - Arguments to filter TripLikes to count.
     * @example
     * // Count the number of TripLikes
     * const count = await prisma.tripLike.count({
     *   where: {
     *     // ... the filter for the TripLikes we want to count
     *   }
     * })
    **/
    count<T extends TripLikeCountArgs>(
      args?: Subset<T, TripLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripLikeAggregateArgs>(args: Subset<T, TripLikeAggregateArgs>): Prisma.PrismaPromise<GetTripLikeAggregateType<T>>

    /**
     * Group by TripLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripLikeGroupByArgs} args - Group by arguments.
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
      T extends TripLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripLikeGroupByArgs['orderBy'] }
        : { orderBy?: TripLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripLike model
   */
  readonly fields: TripLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TripLike model
   */
  interface TripLikeFieldRefs {
    readonly tripId: FieldRef<"TripLike", 'String'>
    readonly userId: FieldRef<"TripLike", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TripLike findUnique
   */
  export type TripLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
    /**
     * Filter, which TripLike to fetch.
     */
    where: TripLikeWhereUniqueInput
  }

  /**
   * TripLike findUniqueOrThrow
   */
  export type TripLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
    /**
     * Filter, which TripLike to fetch.
     */
    where: TripLikeWhereUniqueInput
  }

  /**
   * TripLike findFirst
   */
  export type TripLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
    /**
     * Filter, which TripLike to fetch.
     */
    where?: TripLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripLikes to fetch.
     */
    orderBy?: TripLikeOrderByWithRelationInput | TripLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripLikes.
     */
    cursor?: TripLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripLikes.
     */
    distinct?: TripLikeScalarFieldEnum | TripLikeScalarFieldEnum[]
  }

  /**
   * TripLike findFirstOrThrow
   */
  export type TripLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
    /**
     * Filter, which TripLike to fetch.
     */
    where?: TripLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripLikes to fetch.
     */
    orderBy?: TripLikeOrderByWithRelationInput | TripLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripLikes.
     */
    cursor?: TripLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripLikes.
     */
    distinct?: TripLikeScalarFieldEnum | TripLikeScalarFieldEnum[]
  }

  /**
   * TripLike findMany
   */
  export type TripLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
    /**
     * Filter, which TripLikes to fetch.
     */
    where?: TripLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripLikes to fetch.
     */
    orderBy?: TripLikeOrderByWithRelationInput | TripLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripLikes.
     */
    cursor?: TripLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripLikes.
     */
    skip?: number
    distinct?: TripLikeScalarFieldEnum | TripLikeScalarFieldEnum[]
  }

  /**
   * TripLike create
   */
  export type TripLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a TripLike.
     */
    data: XOR<TripLikeCreateInput, TripLikeUncheckedCreateInput>
  }

  /**
   * TripLike createMany
   */
  export type TripLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripLikes.
     */
    data: TripLikeCreateManyInput | TripLikeCreateManyInput[]
  }

  /**
   * TripLike createManyAndReturn
   */
  export type TripLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * The data used to create many TripLikes.
     */
    data: TripLikeCreateManyInput | TripLikeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripLike update
   */
  export type TripLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a TripLike.
     */
    data: XOR<TripLikeUpdateInput, TripLikeUncheckedUpdateInput>
    /**
     * Choose, which TripLike to update.
     */
    where: TripLikeWhereUniqueInput
  }

  /**
   * TripLike updateMany
   */
  export type TripLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripLikes.
     */
    data: XOR<TripLikeUpdateManyMutationInput, TripLikeUncheckedUpdateManyInput>
    /**
     * Filter which TripLikes to update
     */
    where?: TripLikeWhereInput
    /**
     * Limit how many TripLikes to update.
     */
    limit?: number
  }

  /**
   * TripLike updateManyAndReturn
   */
  export type TripLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * The data used to update TripLikes.
     */
    data: XOR<TripLikeUpdateManyMutationInput, TripLikeUncheckedUpdateManyInput>
    /**
     * Filter which TripLikes to update
     */
    where?: TripLikeWhereInput
    /**
     * Limit how many TripLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripLike upsert
   */
  export type TripLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the TripLike to update in case it exists.
     */
    where: TripLikeWhereUniqueInput
    /**
     * In case the TripLike found by the `where` argument doesn't exist, create a new TripLike with this data.
     */
    create: XOR<TripLikeCreateInput, TripLikeUncheckedCreateInput>
    /**
     * In case the TripLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripLikeUpdateInput, TripLikeUncheckedUpdateInput>
  }

  /**
   * TripLike delete
   */
  export type TripLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
    /**
     * Filter which TripLike to delete.
     */
    where: TripLikeWhereUniqueInput
  }

  /**
   * TripLike deleteMany
   */
  export type TripLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripLikes to delete
     */
    where?: TripLikeWhereInput
    /**
     * Limit how many TripLikes to delete.
     */
    limit?: number
  }

  /**
   * TripLike without action
   */
  export type TripLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripLike
     */
    select?: TripLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripLike
     */
    omit?: TripLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripLikeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatarColor: 'avatarColor',
    homeCity: 'homeCity'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    city: 'city',
    country: 'country',
    startDate: 'startDate',
    endDate: 'endDate',
    days: 'days',
    approximateCost: 'approximateCost',
    currency: 'currency',
    rating: 'rating',
    coverImage: 'coverImage',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const PlaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    note: 'note',
    tripId: 'tripId',
    type: 'type'
  };

  export type PlaceScalarFieldEnum = (typeof PlaceScalarFieldEnum)[keyof typeof PlaceScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    authorId: 'authorId',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const TripLikeScalarFieldEnum: {
    tripId: 'tripId',
    userId: 'userId'
  };

  export type TripLikeScalarFieldEnum = (typeof TripLikeScalarFieldEnum)[keyof typeof TripLikeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatarColor?: StringFilter<"User"> | string
    homeCity?: StringFilter<"User"> | string
    trips?: TripListRelationFilter
    comments?: CommentListRelationFilter
    likes?: TripLikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatarColor?: SortOrder
    homeCity?: SortOrder
    trips?: TripOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    likes?: TripLikeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatarColor?: StringFilter<"User"> | string
    homeCity?: StringFilter<"User"> | string
    trips?: TripListRelationFilter
    comments?: CommentListRelationFilter
    likes?: TripLikeListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatarColor?: SortOrder
    homeCity?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    avatarColor?: StringWithAggregatesFilter<"User"> | string
    homeCity?: StringWithAggregatesFilter<"User"> | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    userId?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    city?: StringFilter<"Trip"> | string
    country?: StringFilter<"Trip"> | string
    startDate?: StringFilter<"Trip"> | string
    endDate?: StringFilter<"Trip"> | string
    days?: IntFilter<"Trip"> | number
    approximateCost?: IntFilter<"Trip"> | number
    currency?: StringFilter<"Trip"> | string
    rating?: IntFilter<"Trip"> | number
    coverImage?: StringFilter<"Trip"> | string
    notes?: StringNullableFilter<"Trip"> | string | null
    createdAt?: StringFilter<"Trip"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    places?: PlaceListRelationFilter
    comments?: CommentListRelationFilter
    likes?: TripLikeListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    city?: SortOrder
    country?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    days?: SortOrder
    approximateCost?: SortOrder
    currency?: SortOrder
    rating?: SortOrder
    coverImage?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    places?: PlaceOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    likes?: TripLikeOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    userId?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    city?: StringFilter<"Trip"> | string
    country?: StringFilter<"Trip"> | string
    startDate?: StringFilter<"Trip"> | string
    endDate?: StringFilter<"Trip"> | string
    days?: IntFilter<"Trip"> | number
    approximateCost?: IntFilter<"Trip"> | number
    currency?: StringFilter<"Trip"> | string
    rating?: IntFilter<"Trip"> | number
    coverImage?: StringFilter<"Trip"> | string
    notes?: StringNullableFilter<"Trip"> | string | null
    createdAt?: StringFilter<"Trip"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    places?: PlaceListRelationFilter
    comments?: CommentListRelationFilter
    likes?: TripLikeListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    city?: SortOrder
    country?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    days?: SortOrder
    approximateCost?: SortOrder
    currency?: SortOrder
    rating?: SortOrder
    coverImage?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    userId?: StringWithAggregatesFilter<"Trip"> | string
    title?: StringWithAggregatesFilter<"Trip"> | string
    city?: StringWithAggregatesFilter<"Trip"> | string
    country?: StringWithAggregatesFilter<"Trip"> | string
    startDate?: StringWithAggregatesFilter<"Trip"> | string
    endDate?: StringWithAggregatesFilter<"Trip"> | string
    days?: IntWithAggregatesFilter<"Trip"> | number
    approximateCost?: IntWithAggregatesFilter<"Trip"> | number
    currency?: StringWithAggregatesFilter<"Trip"> | string
    rating?: IntWithAggregatesFilter<"Trip"> | number
    coverImage?: StringWithAggregatesFilter<"Trip"> | string
    notes?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    createdAt?: StringWithAggregatesFilter<"Trip"> | string
  }

  export type PlaceWhereInput = {
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    id?: StringFilter<"Place"> | string
    name?: StringFilter<"Place"> | string
    city?: StringFilter<"Place"> | string
    note?: StringNullableFilter<"Place"> | string | null
    tripId?: StringFilter<"Place"> | string
    type?: StringFilter<"Place"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type PlaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    note?: SortOrderInput | SortOrder
    tripId?: SortOrder
    type?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type PlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    name?: StringFilter<"Place"> | string
    city?: StringFilter<"Place"> | string
    note?: StringNullableFilter<"Place"> | string | null
    tripId?: StringFilter<"Place"> | string
    type?: StringFilter<"Place"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type PlaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    note?: SortOrderInput | SortOrder
    tripId?: SortOrder
    type?: SortOrder
    _count?: PlaceCountOrderByAggregateInput
    _max?: PlaceMaxOrderByAggregateInput
    _min?: PlaceMinOrderByAggregateInput
  }

  export type PlaceScalarWhereWithAggregatesInput = {
    AND?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    OR?: PlaceScalarWhereWithAggregatesInput[]
    NOT?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Place"> | string
    name?: StringWithAggregatesFilter<"Place"> | string
    city?: StringWithAggregatesFilter<"Place"> | string
    note?: StringNullableWithAggregatesFilter<"Place"> | string | null
    tripId?: StringWithAggregatesFilter<"Place"> | string
    type?: StringWithAggregatesFilter<"Place"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    tripId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    createdAt?: StringFilter<"Comment"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    authorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    trip?: TripOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    tripId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    createdAt?: StringFilter<"Comment"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    authorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    tripId?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    message?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type TripLikeWhereInput = {
    AND?: TripLikeWhereInput | TripLikeWhereInput[]
    OR?: TripLikeWhereInput[]
    NOT?: TripLikeWhereInput | TripLikeWhereInput[]
    tripId?: StringFilter<"TripLike"> | string
    userId?: StringFilter<"TripLike"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TripLikeOrderByWithRelationInput = {
    tripId?: SortOrder
    userId?: SortOrder
    trip?: TripOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TripLikeWhereUniqueInput = Prisma.AtLeast<{
    tripId_userId?: TripLikeTripIdUserIdCompoundUniqueInput
    AND?: TripLikeWhereInput | TripLikeWhereInput[]
    OR?: TripLikeWhereInput[]
    NOT?: TripLikeWhereInput | TripLikeWhereInput[]
    tripId?: StringFilter<"TripLike"> | string
    userId?: StringFilter<"TripLike"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "tripId_userId">

  export type TripLikeOrderByWithAggregationInput = {
    tripId?: SortOrder
    userId?: SortOrder
    _count?: TripLikeCountOrderByAggregateInput
    _max?: TripLikeMaxOrderByAggregateInput
    _min?: TripLikeMinOrderByAggregateInput
  }

  export type TripLikeScalarWhereWithAggregatesInput = {
    AND?: TripLikeScalarWhereWithAggregatesInput | TripLikeScalarWhereWithAggregatesInput[]
    OR?: TripLikeScalarWhereWithAggregatesInput[]
    NOT?: TripLikeScalarWhereWithAggregatesInput | TripLikeScalarWhereWithAggregatesInput[]
    tripId?: StringWithAggregatesFilter<"TripLike"> | string
    userId?: StringWithAggregatesFilter<"TripLike"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    avatarColor: string
    homeCity: string
    trips?: TripCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    likes?: TripLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    avatarColor: string
    homeCity: string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    likes?: TripLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarColor?: StringFieldUpdateOperationsInput | string
    homeCity?: StringFieldUpdateOperationsInput | string
    trips?: TripUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    likes?: TripLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarColor?: StringFieldUpdateOperationsInput | string
    homeCity?: StringFieldUpdateOperationsInput | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: TripLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    avatarColor: string
    homeCity: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarColor?: StringFieldUpdateOperationsInput | string
    homeCity?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarColor?: StringFieldUpdateOperationsInput | string
    homeCity?: StringFieldUpdateOperationsInput | string
  }

  export type TripCreateInput = {
    id?: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
    user: UserCreateNestedOneWithoutTripsInput
    places?: PlaceCreateNestedManyWithoutTripInput
    comments?: CommentCreateNestedManyWithoutTripInput
    likes?: TripLikeCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
    places?: PlaceUncheckedCreateNestedManyWithoutTripInput
    comments?: CommentUncheckedCreateNestedManyWithoutTripInput
    likes?: TripLikeUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    places?: PlaceUpdateManyWithoutTripNestedInput
    comments?: CommentUpdateManyWithoutTripNestedInput
    likes?: TripLikeUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    places?: PlaceUncheckedUpdateManyWithoutTripNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTripNestedInput
    likes?: TripLikeUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    userId: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceCreateInput = {
    id?: string
    name: string
    city: string
    note?: string | null
    type: string
    trip: TripCreateNestedOneWithoutPlacesInput
  }

  export type PlaceUncheckedCreateInput = {
    id?: string
    name: string
    city: string
    note?: string | null
    tripId: string
    type: string
  }

  export type PlaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneRequiredWithoutPlacesNestedInput
  }

  export type PlaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceCreateManyInput = {
    id?: string
    name: string
    city: string
    note?: string | null
    tripId: string
    type: string
  }

  export type PlaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    message: string
    createdAt: string
    trip: TripCreateNestedOneWithoutCommentsInput
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    tripId: string
    authorId: string
    message: string
    createdAt: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    tripId: string
    authorId: string
    message: string
    createdAt: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type TripLikeCreateInput = {
    trip: TripCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type TripLikeUncheckedCreateInput = {
    tripId: string
    userId: string
  }

  export type TripLikeUpdateInput = {
    trip?: TripUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type TripLikeUncheckedUpdateInput = {
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TripLikeCreateManyInput = {
    tripId: string
    userId: string
  }

  export type TripLikeUpdateManyMutationInput = {

  }

  export type TripLikeUncheckedUpdateManyInput = {
    tripId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type TripLikeListRelationFilter = {
    every?: TripLikeWhereInput
    some?: TripLikeWhereInput
    none?: TripLikeWhereInput
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarColor?: SortOrder
    homeCity?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarColor?: SortOrder
    homeCity?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarColor?: SortOrder
    homeCity?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlaceListRelationFilter = {
    every?: PlaceWhereInput
    some?: PlaceWhereInput
    none?: PlaceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    city?: SortOrder
    country?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    days?: SortOrder
    approximateCost?: SortOrder
    currency?: SortOrder
    rating?: SortOrder
    coverImage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    days?: SortOrder
    approximateCost?: SortOrder
    rating?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    city?: SortOrder
    country?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    days?: SortOrder
    approximateCost?: SortOrder
    currency?: SortOrder
    rating?: SortOrder
    coverImage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    city?: SortOrder
    country?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    days?: SortOrder
    approximateCost?: SortOrder
    currency?: SortOrder
    rating?: SortOrder
    coverImage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    days?: SortOrder
    approximateCost?: SortOrder
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type PlaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    note?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
  }

  export type PlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    note?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
  }

  export type PlaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    note?: SortOrder
    tripId?: SortOrder
    type?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    authorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    authorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    authorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type TripLikeTripIdUserIdCompoundUniqueInput = {
    tripId: string
    userId: string
  }

  export type TripLikeCountOrderByAggregateInput = {
    tripId?: SortOrder
    userId?: SortOrder
  }

  export type TripLikeMaxOrderByAggregateInput = {
    tripId?: SortOrder
    userId?: SortOrder
  }

  export type TripLikeMinOrderByAggregateInput = {
    tripId?: SortOrder
    userId?: SortOrder
  }

  export type TripCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TripLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<TripLikeCreateWithoutUserInput, TripLikeUncheckedCreateWithoutUserInput> | TripLikeCreateWithoutUserInput[] | TripLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripLikeCreateOrConnectWithoutUserInput | TripLikeCreateOrConnectWithoutUserInput[]
    createMany?: TripLikeCreateManyUserInputEnvelope
    connect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TripLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripLikeCreateWithoutUserInput, TripLikeUncheckedCreateWithoutUserInput> | TripLikeCreateWithoutUserInput[] | TripLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripLikeCreateOrConnectWithoutUserInput | TripLikeCreateOrConnectWithoutUserInput[]
    createMany?: TripLikeCreateManyUserInputEnvelope
    connect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TripUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TripLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripLikeCreateWithoutUserInput, TripLikeUncheckedCreateWithoutUserInput> | TripLikeCreateWithoutUserInput[] | TripLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripLikeCreateOrConnectWithoutUserInput | TripLikeCreateOrConnectWithoutUserInput[]
    upsert?: TripLikeUpsertWithWhereUniqueWithoutUserInput | TripLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripLikeCreateManyUserInputEnvelope
    set?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    disconnect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    delete?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    connect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    update?: TripLikeUpdateWithWhereUniqueWithoutUserInput | TripLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripLikeUpdateManyWithWhereWithoutUserInput | TripLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripLikeScalarWhereInput | TripLikeScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TripLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripLikeCreateWithoutUserInput, TripLikeUncheckedCreateWithoutUserInput> | TripLikeCreateWithoutUserInput[] | TripLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripLikeCreateOrConnectWithoutUserInput | TripLikeCreateOrConnectWithoutUserInput[]
    upsert?: TripLikeUpsertWithWhereUniqueWithoutUserInput | TripLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripLikeCreateManyUserInputEnvelope
    set?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    disconnect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    delete?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    connect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    update?: TripLikeUpdateWithWhereUniqueWithoutUserInput | TripLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripLikeUpdateManyWithWhereWithoutUserInput | TripLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripLikeScalarWhereInput | TripLikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTripsInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    connect?: UserWhereUniqueInput
  }

  export type PlaceCreateNestedManyWithoutTripInput = {
    create?: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput> | PlaceCreateWithoutTripInput[] | PlaceUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutTripInput | PlaceCreateOrConnectWithoutTripInput[]
    createMany?: PlaceCreateManyTripInputEnvelope
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutTripInput = {
    create?: XOR<CommentCreateWithoutTripInput, CommentUncheckedCreateWithoutTripInput> | CommentCreateWithoutTripInput[] | CommentUncheckedCreateWithoutTripInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTripInput | CommentCreateOrConnectWithoutTripInput[]
    createMany?: CommentCreateManyTripInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TripLikeCreateNestedManyWithoutTripInput = {
    create?: XOR<TripLikeCreateWithoutTripInput, TripLikeUncheckedCreateWithoutTripInput> | TripLikeCreateWithoutTripInput[] | TripLikeUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripLikeCreateOrConnectWithoutTripInput | TripLikeCreateOrConnectWithoutTripInput[]
    createMany?: TripLikeCreateManyTripInputEnvelope
    connect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
  }

  export type PlaceUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput> | PlaceCreateWithoutTripInput[] | PlaceUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutTripInput | PlaceCreateOrConnectWithoutTripInput[]
    createMany?: PlaceCreateManyTripInputEnvelope
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<CommentCreateWithoutTripInput, CommentUncheckedCreateWithoutTripInput> | CommentCreateWithoutTripInput[] | CommentUncheckedCreateWithoutTripInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTripInput | CommentCreateOrConnectWithoutTripInput[]
    createMany?: CommentCreateManyTripInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TripLikeUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripLikeCreateWithoutTripInput, TripLikeUncheckedCreateWithoutTripInput> | TripLikeCreateWithoutTripInput[] | TripLikeUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripLikeCreateOrConnectWithoutTripInput | TripLikeCreateOrConnectWithoutTripInput[]
    createMany?: TripLikeCreateManyTripInputEnvelope
    connect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    upsert?: UserUpsertWithoutTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripsInput, UserUpdateWithoutTripsInput>, UserUncheckedUpdateWithoutTripsInput>
  }

  export type PlaceUpdateManyWithoutTripNestedInput = {
    create?: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput> | PlaceCreateWithoutTripInput[] | PlaceUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutTripInput | PlaceCreateOrConnectWithoutTripInput[]
    upsert?: PlaceUpsertWithWhereUniqueWithoutTripInput | PlaceUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: PlaceCreateManyTripInputEnvelope
    set?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    disconnect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    delete?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    update?: PlaceUpdateWithWhereUniqueWithoutTripInput | PlaceUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: PlaceUpdateManyWithWhereWithoutTripInput | PlaceUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutTripNestedInput = {
    create?: XOR<CommentCreateWithoutTripInput, CommentUncheckedCreateWithoutTripInput> | CommentCreateWithoutTripInput[] | CommentUncheckedCreateWithoutTripInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTripInput | CommentCreateOrConnectWithoutTripInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTripInput | CommentUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: CommentCreateManyTripInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTripInput | CommentUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTripInput | CommentUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TripLikeUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripLikeCreateWithoutTripInput, TripLikeUncheckedCreateWithoutTripInput> | TripLikeCreateWithoutTripInput[] | TripLikeUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripLikeCreateOrConnectWithoutTripInput | TripLikeCreateOrConnectWithoutTripInput[]
    upsert?: TripLikeUpsertWithWhereUniqueWithoutTripInput | TripLikeUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripLikeCreateManyTripInputEnvelope
    set?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    disconnect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    delete?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    connect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    update?: TripLikeUpdateWithWhereUniqueWithoutTripInput | TripLikeUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripLikeUpdateManyWithWhereWithoutTripInput | TripLikeUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripLikeScalarWhereInput | TripLikeScalarWhereInput[]
  }

  export type PlaceUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput> | PlaceCreateWithoutTripInput[] | PlaceUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutTripInput | PlaceCreateOrConnectWithoutTripInput[]
    upsert?: PlaceUpsertWithWhereUniqueWithoutTripInput | PlaceUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: PlaceCreateManyTripInputEnvelope
    set?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    disconnect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    delete?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    update?: PlaceUpdateWithWhereUniqueWithoutTripInput | PlaceUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: PlaceUpdateManyWithWhereWithoutTripInput | PlaceUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<CommentCreateWithoutTripInput, CommentUncheckedCreateWithoutTripInput> | CommentCreateWithoutTripInput[] | CommentUncheckedCreateWithoutTripInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTripInput | CommentCreateOrConnectWithoutTripInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTripInput | CommentUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: CommentCreateManyTripInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTripInput | CommentUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTripInput | CommentUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TripLikeUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripLikeCreateWithoutTripInput, TripLikeUncheckedCreateWithoutTripInput> | TripLikeCreateWithoutTripInput[] | TripLikeUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripLikeCreateOrConnectWithoutTripInput | TripLikeCreateOrConnectWithoutTripInput[]
    upsert?: TripLikeUpsertWithWhereUniqueWithoutTripInput | TripLikeUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripLikeCreateManyTripInputEnvelope
    set?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    disconnect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    delete?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    connect?: TripLikeWhereUniqueInput | TripLikeWhereUniqueInput[]
    update?: TripLikeUpdateWithWhereUniqueWithoutTripInput | TripLikeUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripLikeUpdateManyWithWhereWithoutTripInput | TripLikeUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripLikeScalarWhereInput | TripLikeScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutPlacesInput = {
    create?: XOR<TripCreateWithoutPlacesInput, TripUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: TripCreateOrConnectWithoutPlacesInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutPlacesNestedInput = {
    create?: XOR<TripCreateWithoutPlacesInput, TripUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: TripCreateOrConnectWithoutPlacesInput
    upsert?: TripUpsertWithoutPlacesInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutPlacesInput, TripUpdateWithoutPlacesInput>, TripUncheckedUpdateWithoutPlacesInput>
  }

  export type TripCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TripCreateWithoutCommentsInput, TripUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TripCreateOrConnectWithoutCommentsInput
    connect?: TripWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TripCreateWithoutCommentsInput, TripUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TripCreateOrConnectWithoutCommentsInput
    upsert?: TripUpsertWithoutCommentsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutCommentsInput, TripUpdateWithoutCommentsInput>, TripUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type TripCreateNestedOneWithoutLikesInput = {
    create?: XOR<TripCreateWithoutLikesInput, TripUncheckedCreateWithoutLikesInput>
    connectOrCreate?: TripCreateOrConnectWithoutLikesInput
    connect?: TripWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<TripCreateWithoutLikesInput, TripUncheckedCreateWithoutLikesInput>
    connectOrCreate?: TripCreateOrConnectWithoutLikesInput
    upsert?: TripUpsertWithoutLikesInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutLikesInput, TripUpdateWithoutLikesInput>, TripUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TripCreateWithoutUserInput = {
    id?: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
    places?: PlaceCreateNestedManyWithoutTripInput
    comments?: CommentCreateNestedManyWithoutTripInput
    likes?: TripLikeCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
    places?: PlaceUncheckedCreateNestedManyWithoutTripInput
    comments?: CommentUncheckedCreateNestedManyWithoutTripInput
    likes?: TripLikeUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutUserInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripCreateManyUserInputEnvelope = {
    data: TripCreateManyUserInput | TripCreateManyUserInput[]
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    message: string
    createdAt: string
    trip: TripCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    tripId: string
    message: string
    createdAt: string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
  }

  export type TripLikeCreateWithoutUserInput = {
    trip: TripCreateNestedOneWithoutLikesInput
  }

  export type TripLikeUncheckedCreateWithoutUserInput = {
    tripId: string
  }

  export type TripLikeCreateOrConnectWithoutUserInput = {
    where: TripLikeWhereUniqueInput
    create: XOR<TripLikeCreateWithoutUserInput, TripLikeUncheckedCreateWithoutUserInput>
  }

  export type TripLikeCreateManyUserInputEnvelope = {
    data: TripLikeCreateManyUserInput | TripLikeCreateManyUserInput[]
  }

  export type TripUpsertWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripUpdateWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
  }

  export type TripUpdateManyWithWhereWithoutUserInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutUserInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: StringFilter<"Trip"> | string
    userId?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    city?: StringFilter<"Trip"> | string
    country?: StringFilter<"Trip"> | string
    startDate?: StringFilter<"Trip"> | string
    endDate?: StringFilter<"Trip"> | string
    days?: IntFilter<"Trip"> | number
    approximateCost?: IntFilter<"Trip"> | number
    currency?: StringFilter<"Trip"> | string
    rating?: IntFilter<"Trip"> | number
    coverImage?: StringFilter<"Trip"> | string
    notes?: StringNullableFilter<"Trip"> | string | null
    createdAt?: StringFilter<"Trip"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    tripId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    createdAt?: StringFilter<"Comment"> | string
  }

  export type TripLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: TripLikeWhereUniqueInput
    update: XOR<TripLikeUpdateWithoutUserInput, TripLikeUncheckedUpdateWithoutUserInput>
    create: XOR<TripLikeCreateWithoutUserInput, TripLikeUncheckedCreateWithoutUserInput>
  }

  export type TripLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: TripLikeWhereUniqueInput
    data: XOR<TripLikeUpdateWithoutUserInput, TripLikeUncheckedUpdateWithoutUserInput>
  }

  export type TripLikeUpdateManyWithWhereWithoutUserInput = {
    where: TripLikeScalarWhereInput
    data: XOR<TripLikeUpdateManyMutationInput, TripLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type TripLikeScalarWhereInput = {
    AND?: TripLikeScalarWhereInput | TripLikeScalarWhereInput[]
    OR?: TripLikeScalarWhereInput[]
    NOT?: TripLikeScalarWhereInput | TripLikeScalarWhereInput[]
    tripId?: StringFilter<"TripLike"> | string
    userId?: StringFilter<"TripLike"> | string
  }

  export type UserCreateWithoutTripsInput = {
    id?: string
    name: string
    avatarColor: string
    homeCity: string
    comments?: CommentCreateNestedManyWithoutAuthorInput
    likes?: TripLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripsInput = {
    id?: string
    name: string
    avatarColor: string
    homeCity: string
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    likes?: TripLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
  }

  export type PlaceCreateWithoutTripInput = {
    id?: string
    name: string
    city: string
    note?: string | null
    type: string
  }

  export type PlaceUncheckedCreateWithoutTripInput = {
    id?: string
    name: string
    city: string
    note?: string | null
    type: string
  }

  export type PlaceCreateOrConnectWithoutTripInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput>
  }

  export type PlaceCreateManyTripInputEnvelope = {
    data: PlaceCreateManyTripInput | PlaceCreateManyTripInput[]
  }

  export type CommentCreateWithoutTripInput = {
    id?: string
    message: string
    createdAt: string
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutTripInput = {
    id?: string
    authorId: string
    message: string
    createdAt: string
  }

  export type CommentCreateOrConnectWithoutTripInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTripInput, CommentUncheckedCreateWithoutTripInput>
  }

  export type CommentCreateManyTripInputEnvelope = {
    data: CommentCreateManyTripInput | CommentCreateManyTripInput[]
  }

  export type TripLikeCreateWithoutTripInput = {
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type TripLikeUncheckedCreateWithoutTripInput = {
    userId: string
  }

  export type TripLikeCreateOrConnectWithoutTripInput = {
    where: TripLikeWhereUniqueInput
    create: XOR<TripLikeCreateWithoutTripInput, TripLikeUncheckedCreateWithoutTripInput>
  }

  export type TripLikeCreateManyTripInputEnvelope = {
    data: TripLikeCreateManyTripInput | TripLikeCreateManyTripInput[]
  }

  export type UserUpsertWithoutTripsInput = {
    update: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
  }

  export type UserUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarColor?: StringFieldUpdateOperationsInput | string
    homeCity?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    likes?: TripLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarColor?: StringFieldUpdateOperationsInput | string
    homeCity?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: TripLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaceUpsertWithWhereUniqueWithoutTripInput = {
    where: PlaceWhereUniqueInput
    update: XOR<PlaceUpdateWithoutTripInput, PlaceUncheckedUpdateWithoutTripInput>
    create: XOR<PlaceCreateWithoutTripInput, PlaceUncheckedCreateWithoutTripInput>
  }

  export type PlaceUpdateWithWhereUniqueWithoutTripInput = {
    where: PlaceWhereUniqueInput
    data: XOR<PlaceUpdateWithoutTripInput, PlaceUncheckedUpdateWithoutTripInput>
  }

  export type PlaceUpdateManyWithWhereWithoutTripInput = {
    where: PlaceScalarWhereInput
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyWithoutTripInput>
  }

  export type PlaceScalarWhereInput = {
    AND?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
    OR?: PlaceScalarWhereInput[]
    NOT?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
    id?: StringFilter<"Place"> | string
    name?: StringFilter<"Place"> | string
    city?: StringFilter<"Place"> | string
    note?: StringNullableFilter<"Place"> | string | null
    tripId?: StringFilter<"Place"> | string
    type?: StringFilter<"Place"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutTripInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTripInput, CommentUncheckedUpdateWithoutTripInput>
    create: XOR<CommentCreateWithoutTripInput, CommentUncheckedCreateWithoutTripInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTripInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTripInput, CommentUncheckedUpdateWithoutTripInput>
  }

  export type CommentUpdateManyWithWhereWithoutTripInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTripInput>
  }

  export type TripLikeUpsertWithWhereUniqueWithoutTripInput = {
    where: TripLikeWhereUniqueInput
    update: XOR<TripLikeUpdateWithoutTripInput, TripLikeUncheckedUpdateWithoutTripInput>
    create: XOR<TripLikeCreateWithoutTripInput, TripLikeUncheckedCreateWithoutTripInput>
  }

  export type TripLikeUpdateWithWhereUniqueWithoutTripInput = {
    where: TripLikeWhereUniqueInput
    data: XOR<TripLikeUpdateWithoutTripInput, TripLikeUncheckedUpdateWithoutTripInput>
  }

  export type TripLikeUpdateManyWithWhereWithoutTripInput = {
    where: TripLikeScalarWhereInput
    data: XOR<TripLikeUpdateManyMutationInput, TripLikeUncheckedUpdateManyWithoutTripInput>
  }

  export type TripCreateWithoutPlacesInput = {
    id?: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
    user: UserCreateNestedOneWithoutTripsInput
    comments?: CommentCreateNestedManyWithoutTripInput
    likes?: TripLikeCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutPlacesInput = {
    id?: string
    userId: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
    comments?: CommentUncheckedCreateNestedManyWithoutTripInput
    likes?: TripLikeUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutPlacesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutPlacesInput, TripUncheckedCreateWithoutPlacesInput>
  }

  export type TripUpsertWithoutPlacesInput = {
    update: XOR<TripUpdateWithoutPlacesInput, TripUncheckedUpdateWithoutPlacesInput>
    create: XOR<TripCreateWithoutPlacesInput, TripUncheckedCreateWithoutPlacesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutPlacesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutPlacesInput, TripUncheckedUpdateWithoutPlacesInput>
  }

  export type TripUpdateWithoutPlacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    comments?: CommentUpdateManyWithoutTripNestedInput
    likes?: TripLikeUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutPlacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutTripNestedInput
    likes?: TripLikeUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutCommentsInput = {
    id?: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
    user: UserCreateNestedOneWithoutTripsInput
    places?: PlaceCreateNestedManyWithoutTripInput
    likes?: TripLikeCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
    places?: PlaceUncheckedCreateNestedManyWithoutTripInput
    likes?: TripLikeUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutCommentsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutCommentsInput, TripUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name: string
    avatarColor: string
    homeCity: string
    trips?: TripCreateNestedManyWithoutUserInput
    likes?: TripLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    avatarColor: string
    homeCity: string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    likes?: TripLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type TripUpsertWithoutCommentsInput = {
    update: XOR<TripUpdateWithoutCommentsInput, TripUncheckedUpdateWithoutCommentsInput>
    create: XOR<TripCreateWithoutCommentsInput, TripUncheckedCreateWithoutCommentsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutCommentsInput, TripUncheckedUpdateWithoutCommentsInput>
  }

  export type TripUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    places?: PlaceUpdateManyWithoutTripNestedInput
    likes?: TripLikeUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    places?: PlaceUncheckedUpdateManyWithoutTripNestedInput
    likes?: TripLikeUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarColor?: StringFieldUpdateOperationsInput | string
    homeCity?: StringFieldUpdateOperationsInput | string
    trips?: TripUpdateManyWithoutUserNestedInput
    likes?: TripLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarColor?: StringFieldUpdateOperationsInput | string
    homeCity?: StringFieldUpdateOperationsInput | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    likes?: TripLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripCreateWithoutLikesInput = {
    id?: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
    user: UserCreateNestedOneWithoutTripsInput
    places?: PlaceCreateNestedManyWithoutTripInput
    comments?: CommentCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutLikesInput = {
    id?: string
    userId: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
    places?: PlaceUncheckedCreateNestedManyWithoutTripInput
    comments?: CommentUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutLikesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutLikesInput, TripUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    name: string
    avatarColor: string
    homeCity: string
    trips?: TripCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    name: string
    avatarColor: string
    homeCity: string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type TripUpsertWithoutLikesInput = {
    update: XOR<TripUpdateWithoutLikesInput, TripUncheckedUpdateWithoutLikesInput>
    create: XOR<TripCreateWithoutLikesInput, TripUncheckedCreateWithoutLikesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutLikesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutLikesInput, TripUncheckedUpdateWithoutLikesInput>
  }

  export type TripUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    places?: PlaceUpdateManyWithoutTripNestedInput
    comments?: CommentUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    places?: PlaceUncheckedUpdateManyWithoutTripNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarColor?: StringFieldUpdateOperationsInput | string
    homeCity?: StringFieldUpdateOperationsInput | string
    trips?: TripUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarColor?: StringFieldUpdateOperationsInput | string
    homeCity?: StringFieldUpdateOperationsInput | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TripCreateManyUserInput = {
    id?: string
    title: string
    city: string
    country: string
    startDate: string
    endDate: string
    days: number
    approximateCost: number
    currency: string
    rating: number
    coverImage: string
    notes?: string | null
    createdAt: string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    tripId: string
    message: string
    createdAt: string
  }

  export type TripLikeCreateManyUserInput = {
    tripId: string
  }

  export type TripUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    places?: PlaceUpdateManyWithoutTripNestedInput
    comments?: CommentUpdateManyWithoutTripNestedInput
    likes?: TripLikeUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
    places?: PlaceUncheckedUpdateManyWithoutTripNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTripNestedInput
    likes?: TripLikeUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    approximateCost?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    coverImage?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type TripLikeUpdateWithoutUserInput = {
    trip?: TripUpdateOneRequiredWithoutLikesNestedInput
  }

  export type TripLikeUncheckedUpdateWithoutUserInput = {
    tripId?: StringFieldUpdateOperationsInput | string
  }

  export type TripLikeUncheckedUpdateManyWithoutUserInput = {
    tripId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceCreateManyTripInput = {
    id?: string
    name: string
    city: string
    note?: string | null
    type: string
  }

  export type CommentCreateManyTripInput = {
    id?: string
    authorId: string
    message: string
    createdAt: string
  }

  export type TripLikeCreateManyTripInput = {
    userId: string
  }

  export type PlaceUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PlaceUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type TripLikeUpdateWithoutTripInput = {
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type TripLikeUncheckedUpdateWithoutTripInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TripLikeUncheckedUpdateManyWithoutTripInput = {
    userId?: StringFieldUpdateOperationsInput | string
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