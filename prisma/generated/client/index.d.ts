
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
 * Model ArticleOrder
 * 
 */
export type ArticleOrder = $Result.DefaultSelection<Prisma.$ArticleOrderPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductMaterials
 * 
 */
export type ProductMaterials = $Result.DefaultSelection<Prisma.$ProductMaterialsPayload>
/**
 * Model ProductGallery
 * 
 */
export type ProductGallery = $Result.DefaultSelection<Prisma.$ProductGalleryPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model CheckoutMethod
 * 
 */
export type CheckoutMethod = $Result.DefaultSelection<Prisma.$CheckoutMethodPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ArticleOrders
 * const articleOrders = await prisma.articleOrder.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more ArticleOrders
   * const articleOrders = await prisma.articleOrder.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.articleOrder`: Exposes CRUD operations for the **ArticleOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleOrders
    * const articleOrders = await prisma.articleOrder.findMany()
    * ```
    */
  get articleOrder(): Prisma.ArticleOrderDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productMaterials`: Exposes CRUD operations for the **ProductMaterials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductMaterials
    * const productMaterials = await prisma.productMaterials.findMany()
    * ```
    */
  get productMaterials(): Prisma.ProductMaterialsDelegate<ExtArgs>;

  /**
   * `prisma.productGallery`: Exposes CRUD operations for the **ProductGallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductGalleries
    * const productGalleries = await prisma.productGallery.findMany()
    * ```
    */
  get productGallery(): Prisma.ProductGalleryDelegate<ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs>;

  /**
   * `prisma.checkoutMethod`: Exposes CRUD operations for the **CheckoutMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckoutMethods
    * const checkoutMethods = await prisma.checkoutMethod.findMany()
    * ```
    */
  get checkoutMethod(): Prisma.CheckoutMethodDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    ArticleOrder: 'ArticleOrder',
    Category: 'Category',
    Client: 'Client',
    Order: 'Order',
    Material: 'Material',
    Product: 'Product',
    ProductMaterials: 'ProductMaterials',
    ProductGallery: 'ProductGallery',
    Contact: 'Contact',
    CheckoutMethod: 'CheckoutMethod'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'articleOrder' | 'category' | 'client' | 'order' | 'material' | 'product' | 'productMaterials' | 'productGallery' | 'contact' | 'checkoutMethod'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      ArticleOrder: {
        payload: Prisma.$ArticleOrderPayload<ExtArgs>
        fields: Prisma.ArticleOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleOrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleOrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleOrderPayload>
          }
          findFirst: {
            args: Prisma.ArticleOrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleOrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleOrderPayload>
          }
          findMany: {
            args: Prisma.ArticleOrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleOrderPayload>[]
          }
          create: {
            args: Prisma.ArticleOrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleOrderPayload>
          }
          createMany: {
            args: Prisma.ArticleOrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArticleOrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleOrderPayload>
          }
          update: {
            args: Prisma.ArticleOrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleOrderPayload>
          }
          deleteMany: {
            args: Prisma.ArticleOrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleOrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArticleOrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleOrderPayload>
          }
          aggregate: {
            args: Prisma.ArticleOrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArticleOrder>
          }
          groupBy: {
            args: Prisma.ArticleOrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArticleOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleOrderCountArgs<ExtArgs>,
            result: $Utils.Optional<ArticleOrderCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>,
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductMaterials: {
        payload: Prisma.$ProductMaterialsPayload<ExtArgs>
        fields: Prisma.ProductMaterialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductMaterialsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductMaterialsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialsPayload>
          }
          findFirst: {
            args: Prisma.ProductMaterialsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductMaterialsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialsPayload>
          }
          findMany: {
            args: Prisma.ProductMaterialsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialsPayload>[]
          }
          create: {
            args: Prisma.ProductMaterialsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialsPayload>
          }
          createMany: {
            args: Prisma.ProductMaterialsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductMaterialsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialsPayload>
          }
          update: {
            args: Prisma.ProductMaterialsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialsPayload>
          }
          deleteMany: {
            args: Prisma.ProductMaterialsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductMaterialsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductMaterialsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductMaterialsPayload>
          }
          aggregate: {
            args: Prisma.ProductMaterialsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductMaterials>
          }
          groupBy: {
            args: Prisma.ProductMaterialsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductMaterialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductMaterialsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductMaterialsCountAggregateOutputType> | number
          }
        }
      }
      ProductGallery: {
        payload: Prisma.$ProductGalleryPayload<ExtArgs>
        fields: Prisma.ProductGalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductGalleryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductGalleryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          findFirst: {
            args: Prisma.ProductGalleryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductGalleryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          findMany: {
            args: Prisma.ProductGalleryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>[]
          }
          create: {
            args: Prisma.ProductGalleryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          createMany: {
            args: Prisma.ProductGalleryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductGalleryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          update: {
            args: Prisma.ProductGalleryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          deleteMany: {
            args: Prisma.ProductGalleryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductGalleryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductGalleryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductGalleryPayload>
          }
          aggregate: {
            args: Prisma.ProductGalleryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductGallery>
          }
          groupBy: {
            args: Prisma.ProductGalleryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductGalleryCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductGalleryCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      CheckoutMethod: {
        payload: Prisma.$CheckoutMethodPayload<ExtArgs>
        fields: Prisma.CheckoutMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckoutMethodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckoutMethodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutMethodPayload>
          }
          findFirst: {
            args: Prisma.CheckoutMethodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckoutMethodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutMethodPayload>
          }
          findMany: {
            args: Prisma.CheckoutMethodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutMethodPayload>[]
          }
          create: {
            args: Prisma.CheckoutMethodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutMethodPayload>
          }
          createMany: {
            args: Prisma.CheckoutMethodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CheckoutMethodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutMethodPayload>
          }
          update: {
            args: Prisma.CheckoutMethodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutMethodPayload>
          }
          deleteMany: {
            args: Prisma.CheckoutMethodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CheckoutMethodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CheckoutMethodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckoutMethodPayload>
          }
          aggregate: {
            args: Prisma.CheckoutMethodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCheckoutMethod>
          }
          groupBy: {
            args: Prisma.CheckoutMethodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CheckoutMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckoutMethodCountArgs<ExtArgs>,
            result: $Utils.Optional<CheckoutMethodCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    orders: number
    checkoutMethods: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ClientCountOutputTypeCountOrdersArgs
    checkoutMethods?: boolean | ClientCountOutputTypeCountCheckoutMethodsArgs
  }

  // Custom InputTypes

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountCheckoutMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckoutMethodWhereInput
  }



  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    ArticleOrder: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ArticleOrder?: boolean | OrderCountOutputTypeCountArticleOrderArgs
  }

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountArticleOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleOrderWhereInput
  }



  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    products: number
    ProductMaterials: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | MaterialCountOutputTypeCountProductsArgs
    ProductMaterials?: boolean | MaterialCountOutputTypeCountProductMaterialsArgs
  }

  // Custom InputTypes

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountProductMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMaterialsWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    materials: number
    ArticleOrder: number
    images: number
    ProductMaterials: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | ProductCountOutputTypeCountMaterialsArgs
    ArticleOrder?: boolean | ProductCountOutputTypeCountArticleOrderArgs
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    ProductMaterials?: boolean | ProductCountOutputTypeCountProductMaterialsArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountArticleOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleOrderWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductGalleryWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMaterialsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model ArticleOrder
   */

  export type AggregateArticleOrder = {
    _count: ArticleOrderCountAggregateOutputType | null
    _avg: ArticleOrderAvgAggregateOutputType | null
    _sum: ArticleOrderSumAggregateOutputType | null
    _min: ArticleOrderMinAggregateOutputType | null
    _max: ArticleOrderMaxAggregateOutputType | null
  }

  export type ArticleOrderAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type ArticleOrderSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type ArticleOrderMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type ArticleOrderMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type ArticleOrderCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    quantity: number
    price: number
    _all: number
  }


  export type ArticleOrderAvgAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type ArticleOrderSumAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type ArticleOrderMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type ArticleOrderMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type ArticleOrderCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type ArticleOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleOrder to aggregate.
     */
    where?: ArticleOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleOrders to fetch.
     */
    orderBy?: ArticleOrderOrderByWithRelationInput | ArticleOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleOrders
    **/
    _count?: true | ArticleOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleOrderMaxAggregateInputType
  }

  export type GetArticleOrderAggregateType<T extends ArticleOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleOrder[P]>
      : GetScalarType<T[P], AggregateArticleOrder[P]>
  }




  export type ArticleOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleOrderWhereInput
    orderBy?: ArticleOrderOrderByWithAggregationInput | ArticleOrderOrderByWithAggregationInput[]
    by: ArticleOrderScalarFieldEnum[] | ArticleOrderScalarFieldEnum
    having?: ArticleOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleOrderCountAggregateInputType | true
    _avg?: ArticleOrderAvgAggregateInputType
    _sum?: ArticleOrderSumAggregateInputType
    _min?: ArticleOrderMinAggregateInputType
    _max?: ArticleOrderMaxAggregateInputType
  }

  export type ArticleOrderGroupByOutputType = {
    id: number
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
    _count: ArticleOrderCountAggregateOutputType | null
    _avg: ArticleOrderAvgAggregateOutputType | null
    _sum: ArticleOrderSumAggregateOutputType | null
    _min: ArticleOrderMinAggregateOutputType | null
    _max: ArticleOrderMaxAggregateOutputType | null
  }

  type GetArticleOrderGroupByPayload<T extends ArticleOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleOrderGroupByOutputType[P]>
        }
      >
    >


  export type ArticleOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | ArticleOrder$orderArgs<ExtArgs>
    product?: boolean | ArticleOrder$productArgs<ExtArgs>
  }, ExtArgs["result"]["articleOrder"]>

  export type ArticleOrderSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type ArticleOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ArticleOrder$orderArgs<ExtArgs>
    product?: boolean | ArticleOrder$productArgs<ExtArgs>
  }


  export type $ArticleOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleOrder"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs> | null
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number | null
      productId: number | null
      quantity: number | null
      price: number | null
    }, ExtArgs["result"]["articleOrder"]>
    composites: {}
  }


  type ArticleOrderGetPayload<S extends boolean | null | undefined | ArticleOrderDefaultArgs> = $Result.GetResult<Prisma.$ArticleOrderPayload, S>

  type ArticleOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArticleOrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArticleOrderCountAggregateInputType | true
    }

  export interface ArticleOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleOrder'], meta: { name: 'ArticleOrder' } }
    /**
     * Find zero or one ArticleOrder that matches the filter.
     * @param {ArticleOrderFindUniqueArgs} args - Arguments to find a ArticleOrder
     * @example
     * // Get one ArticleOrder
     * const articleOrder = await prisma.articleOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArticleOrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleOrderFindUniqueArgs<ExtArgs>>
    ): Prisma__ArticleOrderClient<$Result.GetResult<Prisma.$ArticleOrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ArticleOrder that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArticleOrderFindUniqueOrThrowArgs} args - Arguments to find a ArticleOrder
     * @example
     * // Get one ArticleOrder
     * const articleOrder = await prisma.articleOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArticleOrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleOrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArticleOrderClient<$Result.GetResult<Prisma.$ArticleOrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ArticleOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleOrderFindFirstArgs} args - Arguments to find a ArticleOrder
     * @example
     * // Get one ArticleOrder
     * const articleOrder = await prisma.articleOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArticleOrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleOrderFindFirstArgs<ExtArgs>>
    ): Prisma__ArticleOrderClient<$Result.GetResult<Prisma.$ArticleOrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ArticleOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleOrderFindFirstOrThrowArgs} args - Arguments to find a ArticleOrder
     * @example
     * // Get one ArticleOrder
     * const articleOrder = await prisma.articleOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArticleOrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleOrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArticleOrderClient<$Result.GetResult<Prisma.$ArticleOrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ArticleOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleOrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleOrders
     * const articleOrders = await prisma.articleOrder.findMany()
     * 
     * // Get first 10 ArticleOrders
     * const articleOrders = await prisma.articleOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleOrderWithIdOnly = await prisma.articleOrder.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArticleOrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleOrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleOrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ArticleOrder.
     * @param {ArticleOrderCreateArgs} args - Arguments to create a ArticleOrder.
     * @example
     * // Create one ArticleOrder
     * const ArticleOrder = await prisma.articleOrder.create({
     *   data: {
     *     // ... data to create a ArticleOrder
     *   }
     * })
     * 
    **/
    create<T extends ArticleOrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleOrderCreateArgs<ExtArgs>>
    ): Prisma__ArticleOrderClient<$Result.GetResult<Prisma.$ArticleOrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ArticleOrders.
     *     @param {ArticleOrderCreateManyArgs} args - Arguments to create many ArticleOrders.
     *     @example
     *     // Create many ArticleOrders
     *     const articleOrder = await prisma.articleOrder.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArticleOrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleOrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArticleOrder.
     * @param {ArticleOrderDeleteArgs} args - Arguments to delete one ArticleOrder.
     * @example
     * // Delete one ArticleOrder
     * const ArticleOrder = await prisma.articleOrder.delete({
     *   where: {
     *     // ... filter to delete one ArticleOrder
     *   }
     * })
     * 
    **/
    delete<T extends ArticleOrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleOrderDeleteArgs<ExtArgs>>
    ): Prisma__ArticleOrderClient<$Result.GetResult<Prisma.$ArticleOrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ArticleOrder.
     * @param {ArticleOrderUpdateArgs} args - Arguments to update one ArticleOrder.
     * @example
     * // Update one ArticleOrder
     * const articleOrder = await prisma.articleOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArticleOrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleOrderUpdateArgs<ExtArgs>>
    ): Prisma__ArticleOrderClient<$Result.GetResult<Prisma.$ArticleOrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ArticleOrders.
     * @param {ArticleOrderDeleteManyArgs} args - Arguments to filter ArticleOrders to delete.
     * @example
     * // Delete a few ArticleOrders
     * const { count } = await prisma.articleOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArticleOrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleOrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleOrders
     * const articleOrder = await prisma.articleOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArticleOrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleOrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArticleOrder.
     * @param {ArticleOrderUpsertArgs} args - Arguments to update or create a ArticleOrder.
     * @example
     * // Update or create a ArticleOrder
     * const articleOrder = await prisma.articleOrder.upsert({
     *   create: {
     *     // ... data to create a ArticleOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleOrder we want to update
     *   }
     * })
    **/
    upsert<T extends ArticleOrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleOrderUpsertArgs<ExtArgs>>
    ): Prisma__ArticleOrderClient<$Result.GetResult<Prisma.$ArticleOrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ArticleOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleOrderCountArgs} args - Arguments to filter ArticleOrders to count.
     * @example
     * // Count the number of ArticleOrders
     * const count = await prisma.articleOrder.count({
     *   where: {
     *     // ... the filter for the ArticleOrders we want to count
     *   }
     * })
    **/
    count<T extends ArticleOrderCountArgs>(
      args?: Subset<T, ArticleOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleOrderAggregateArgs>(args: Subset<T, ArticleOrderAggregateArgs>): Prisma.PrismaPromise<GetArticleOrderAggregateType<T>>

    /**
     * Group by ArticleOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleOrderGroupByArgs} args - Group by arguments.
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
      T extends ArticleOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleOrderGroupByArgs['orderBy'] }
        : { orderBy?: ArticleOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleOrder model
   */
  readonly fields: ArticleOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends ArticleOrder$orderArgs<ExtArgs> = {}>(args?: Subset<T, ArticleOrder$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    product<T extends ArticleOrder$productArgs<ExtArgs> = {}>(args?: Subset<T, ArticleOrder$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ArticleOrder model
   */ 
  interface ArticleOrderFieldRefs {
    readonly id: FieldRef<"ArticleOrder", 'Int'>
    readonly orderId: FieldRef<"ArticleOrder", 'Int'>
    readonly productId: FieldRef<"ArticleOrder", 'Int'>
    readonly quantity: FieldRef<"ArticleOrder", 'Int'>
    readonly price: FieldRef<"ArticleOrder", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ArticleOrder findUnique
   */
  export type ArticleOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
    /**
     * Filter, which ArticleOrder to fetch.
     */
    where: ArticleOrderWhereUniqueInput
  }


  /**
   * ArticleOrder findUniqueOrThrow
   */
  export type ArticleOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
    /**
     * Filter, which ArticleOrder to fetch.
     */
    where: ArticleOrderWhereUniqueInput
  }


  /**
   * ArticleOrder findFirst
   */
  export type ArticleOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
    /**
     * Filter, which ArticleOrder to fetch.
     */
    where?: ArticleOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleOrders to fetch.
     */
    orderBy?: ArticleOrderOrderByWithRelationInput | ArticleOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleOrders.
     */
    cursor?: ArticleOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleOrders.
     */
    distinct?: ArticleOrderScalarFieldEnum | ArticleOrderScalarFieldEnum[]
  }


  /**
   * ArticleOrder findFirstOrThrow
   */
  export type ArticleOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
    /**
     * Filter, which ArticleOrder to fetch.
     */
    where?: ArticleOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleOrders to fetch.
     */
    orderBy?: ArticleOrderOrderByWithRelationInput | ArticleOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleOrders.
     */
    cursor?: ArticleOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleOrders.
     */
    distinct?: ArticleOrderScalarFieldEnum | ArticleOrderScalarFieldEnum[]
  }


  /**
   * ArticleOrder findMany
   */
  export type ArticleOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
    /**
     * Filter, which ArticleOrders to fetch.
     */
    where?: ArticleOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleOrders to fetch.
     */
    orderBy?: ArticleOrderOrderByWithRelationInput | ArticleOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleOrders.
     */
    cursor?: ArticleOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleOrders.
     */
    skip?: number
    distinct?: ArticleOrderScalarFieldEnum | ArticleOrderScalarFieldEnum[]
  }


  /**
   * ArticleOrder create
   */
  export type ArticleOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleOrder.
     */
    data?: XOR<ArticleOrderCreateInput, ArticleOrderUncheckedCreateInput>
  }


  /**
   * ArticleOrder createMany
   */
  export type ArticleOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleOrders.
     */
    data: ArticleOrderCreateManyInput | ArticleOrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ArticleOrder update
   */
  export type ArticleOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleOrder.
     */
    data: XOR<ArticleOrderUpdateInput, ArticleOrderUncheckedUpdateInput>
    /**
     * Choose, which ArticleOrder to update.
     */
    where: ArticleOrderWhereUniqueInput
  }


  /**
   * ArticleOrder updateMany
   */
  export type ArticleOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleOrders.
     */
    data: XOR<ArticleOrderUpdateManyMutationInput, ArticleOrderUncheckedUpdateManyInput>
    /**
     * Filter which ArticleOrders to update
     */
    where?: ArticleOrderWhereInput
  }


  /**
   * ArticleOrder upsert
   */
  export type ArticleOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleOrder to update in case it exists.
     */
    where: ArticleOrderWhereUniqueInput
    /**
     * In case the ArticleOrder found by the `where` argument doesn't exist, create a new ArticleOrder with this data.
     */
    create: XOR<ArticleOrderCreateInput, ArticleOrderUncheckedCreateInput>
    /**
     * In case the ArticleOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleOrderUpdateInput, ArticleOrderUncheckedUpdateInput>
  }


  /**
   * ArticleOrder delete
   */
  export type ArticleOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
    /**
     * Filter which ArticleOrder to delete.
     */
    where: ArticleOrderWhereUniqueInput
  }


  /**
   * ArticleOrder deleteMany
   */
  export type ArticleOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleOrders to delete
     */
    where?: ArticleOrderWhereInput
  }


  /**
   * ArticleOrder.order
   */
  export type ArticleOrder$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }


  /**
   * ArticleOrder.product
   */
  export type ArticleOrder$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }


  /**
   * ArticleOrder without action
   */
  export type ArticleOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    label: string | null
    thumbnail: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    label: string | null
    thumbnail: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    label: number
    thumbnail: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    label?: true
    thumbnail?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    label?: true
    thumbnail?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    label?: true
    thumbnail?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    label: string | null
    thumbnail: string | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    thumbnail?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    label?: boolean
    thumbnail?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string | null
      thumbnail: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly label: FieldRef<"Category", 'String'>
    readonly thumbnail: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data?: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    address: string | null
    city: string | null
    createdAt: Date | null
    lastName: string | null
    firstName: string | null
    role: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    address: string | null
    city: string | null
    createdAt: Date | null
    lastName: string | null
    firstName: string | null
    role: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    email: number
    password: number
    address: number
    city: number
    createdAt: number
    lastName: number
    firstName: number
    role: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    address?: true
    city?: true
    createdAt?: true
    lastName?: true
    firstName?: true
    role?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    address?: true
    city?: true
    createdAt?: true
    lastName?: true
    firstName?: true
    role?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    address?: true
    city?: true
    createdAt?: true
    lastName?: true
    firstName?: true
    role?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    email: string | null
    password: string | null
    address: string | null
    city: string | null
    createdAt: Date | null
    lastName: string | null
    firstName: string | null
    role: string
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    city?: boolean
    createdAt?: boolean
    lastName?: boolean
    firstName?: boolean
    role?: boolean
    orders?: boolean | Client$ordersArgs<ExtArgs>
    checkoutMethods?: boolean | Client$checkoutMethodsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    city?: boolean
    createdAt?: boolean
    lastName?: boolean
    firstName?: boolean
    role?: boolean
  }

  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Client$ordersArgs<ExtArgs>
    checkoutMethods?: boolean | Client$checkoutMethodsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      checkoutMethods: Prisma.$CheckoutMethodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      password: string | null
      address: string | null
      city: string | null
      createdAt: Date | null
      lastName: string | null
      firstName: string | null
      role: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }


  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
    **/
    create<T extends ClientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientCreateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clients.
     *     @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
    **/
    delete<T extends ClientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
    **/
    upsert<T extends ClientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends Client$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Client$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    checkoutMethods<T extends Client$checkoutMethodsArgs<ExtArgs> = {}>(args?: Subset<T, Client$checkoutMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckoutMethodPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly email: FieldRef<"Client", 'String'>
    readonly password: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly city: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly lastName: FieldRef<"Client", 'String'>
    readonly firstName: FieldRef<"Client", 'String'>
    readonly role: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data?: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }


  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }


  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }


  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }


  /**
   * Client.orders
   */
  export type Client$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Client.checkoutMethods
   */
  export type Client$checkoutMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutMethod
     */
    select?: CheckoutMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutMethodInclude<ExtArgs> | null
    where?: CheckoutMethodWhereInput
    orderBy?: CheckoutMethodOrderByWithRelationInput | CheckoutMethodOrderByWithRelationInput[]
    cursor?: CheckoutMethodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckoutMethodScalarFieldEnum | CheckoutMethodScalarFieldEnum[]
  }


  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    status: string | null
    createdAt: Date | null
    orderDate: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    status: string | null
    createdAt: Date | null
    orderDate: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    clientId: number
    status: number
    createdAt: number
    orderDate: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    clientId?: true
    status?: true
    createdAt?: true
    orderDate?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    clientId?: true
    status?: true
    createdAt?: true
    orderDate?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    clientId?: true
    status?: true
    createdAt?: true
    orderDate?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    clientId: number | null
    status: string | null
    createdAt: Date | null
    orderDate: Date | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    status?: boolean
    createdAt?: boolean
    orderDate?: boolean
    client?: boolean | Order$clientArgs<ExtArgs>
    ArticleOrder?: boolean | Order$ArticleOrderArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    clientId?: boolean
    status?: boolean
    createdAt?: boolean
    orderDate?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Order$clientArgs<ExtArgs>
    ArticleOrder?: boolean | Order$ArticleOrderArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
      ArticleOrder: Prisma.$ArticleOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number | null
      status: string | null
      createdAt: Date | null
      orderDate: Date | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends Order$clientArgs<ExtArgs> = {}>(args?: Subset<T, Order$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    ArticleOrder<T extends Order$ArticleOrderArgs<ExtArgs> = {}>(args?: Subset<T, Order$ArticleOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleOrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly clientId: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly orderDate: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data?: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.client
   */
  export type Order$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }


  /**
   * Order.ArticleOrder
   */
  export type Order$ArticleOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
    where?: ArticleOrderWhereInput
    orderBy?: ArticleOrderOrderByWithRelationInput | ArticleOrderOrderByWithRelationInput[]
    cursor?: ArticleOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleOrderScalarFieldEnum | ArticleOrderScalarFieldEnum[]
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    id: number | null
  }

  export type MaterialSumAggregateOutputType = {
    id: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    id?: true
  }

  export type MaterialSumAggregateInputType = {
    id?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: number
    label: string | null
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    products?: boolean | Material$productsArgs<ExtArgs>
    ProductMaterials?: boolean | Material$ProductMaterialsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Material$productsArgs<ExtArgs>
    ProductMaterials?: boolean | Material$ProductMaterialsArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      ProductMaterials: Prisma.$ProductMaterialsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string | null
    }, ExtArgs["result"]["material"]>
    composites: {}
  }


  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MaterialFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>
    ): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Material that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MaterialFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>
    ): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MaterialFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
    **/
    create<T extends MaterialCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>
    ): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Materials.
     *     @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     *     @example
     *     // Create many Materials
     *     const material = await prisma.material.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MaterialCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
    **/
    delete<T extends MaterialDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>
    ): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MaterialUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>
    ): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MaterialDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MaterialUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
    **/
    upsert<T extends MaterialUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>
    ): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Material$productsArgs<ExtArgs> = {}>(args?: Subset<T, Material$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    ProductMaterials<T extends Material$ProductMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, Material$ProductMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMaterialsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Material model
   */ 
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'Int'>
    readonly label: FieldRef<"Material", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }


  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }


  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }


  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }


  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }


  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data?: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }


  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }


  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
  }


  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }


  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }


  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
  }


  /**
   * Material.products
   */
  export type Material$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Material.ProductMaterials
   */
  export type Material$ProductMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
    where?: ProductMaterialsWhereInput
    orderBy?: ProductMaterialsOrderByWithRelationInput | ProductMaterialsOrderByWithRelationInput[]
    cursor?: ProductMaterialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductMaterialsScalarFieldEnum | ProductMaterialsScalarFieldEnum[]
  }


  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaterialInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    stock: number | null
    description: string | null
    categoryId: number | null
    thumbnail: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    stock: number | null
    description: string | null
    categoryId: number | null
    thumbnail: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    stock: number
    description: number
    categoryId: number
    thumbnail: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    description?: true
    categoryId?: true
    thumbnail?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    description?: true
    categoryId?: true
    thumbnail?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    description?: true
    categoryId?: true
    thumbnail?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string | null
    price: number | null
    stock: number | null
    description: string | null
    categoryId: number | null
    thumbnail: string | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    description?: boolean
    categoryId?: boolean
    thumbnail?: boolean
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    materials?: boolean | Product$materialsArgs<ExtArgs>
    ArticleOrder?: boolean | Product$ArticleOrderArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    ProductMaterials?: boolean | Product$ProductMaterialsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    description?: boolean
    categoryId?: boolean
    thumbnail?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | Product$CategoryArgs<ExtArgs>
    materials?: boolean | Product$materialsArgs<ExtArgs>
    ArticleOrder?: boolean | Product$ArticleOrderArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    ProductMaterials?: boolean | Product$ProductMaterialsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs> | null
      materials: Prisma.$MaterialPayload<ExtArgs>[]
      ArticleOrder: Prisma.$ArticleOrderPayload<ExtArgs>[]
      images: Prisma.$ProductGalleryPayload<ExtArgs>[]
      ProductMaterials: Prisma.$ProductMaterialsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      price: number | null
      stock: number | null
      description: string | null
      categoryId: number | null
      thumbnail: string | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Category<T extends Product$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$CategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    materials<T extends Product$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Product$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, 'findMany'> | Null>;

    ArticleOrder<T extends Product$ArticleOrderArgs<ExtArgs> = {}>(args?: Subset<T, Product$ArticleOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleOrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, 'findMany'> | Null>;

    ProductMaterials<T extends Product$ProductMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMaterialsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly description: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly thumbnail: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data?: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.Category
   */
  export type Product$CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }


  /**
   * Product.materials
   */
  export type Product$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }


  /**
   * Product.ArticleOrder
   */
  export type Product$ArticleOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleOrder
     */
    select?: ArticleOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArticleOrderInclude<ExtArgs> | null
    where?: ArticleOrderWhereInput
    orderBy?: ArticleOrderOrderByWithRelationInput | ArticleOrderOrderByWithRelationInput[]
    cursor?: ArticleOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleOrderScalarFieldEnum | ArticleOrderScalarFieldEnum[]
  }


  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    where?: ProductGalleryWhereInput
    orderBy?: ProductGalleryOrderByWithRelationInput | ProductGalleryOrderByWithRelationInput[]
    cursor?: ProductGalleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductGalleryScalarFieldEnum | ProductGalleryScalarFieldEnum[]
  }


  /**
   * Product.ProductMaterials
   */
  export type Product$ProductMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
    where?: ProductMaterialsWhereInput
    orderBy?: ProductMaterialsOrderByWithRelationInput | ProductMaterialsOrderByWithRelationInput[]
    cursor?: ProductMaterialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductMaterialsScalarFieldEnum | ProductMaterialsScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model ProductMaterials
   */

  export type AggregateProductMaterials = {
    _count: ProductMaterialsCountAggregateOutputType | null
    _avg: ProductMaterialsAvgAggregateOutputType | null
    _sum: ProductMaterialsSumAggregateOutputType | null
    _min: ProductMaterialsMinAggregateOutputType | null
    _max: ProductMaterialsMaxAggregateOutputType | null
  }

  export type ProductMaterialsAvgAggregateOutputType = {
    productId: number | null
    materialId: number | null
  }

  export type ProductMaterialsSumAggregateOutputType = {
    productId: number | null
    materialId: number | null
  }

  export type ProductMaterialsMinAggregateOutputType = {
    productId: number | null
    materialId: number | null
  }

  export type ProductMaterialsMaxAggregateOutputType = {
    productId: number | null
    materialId: number | null
  }

  export type ProductMaterialsCountAggregateOutputType = {
    productId: number
    materialId: number
    _all: number
  }


  export type ProductMaterialsAvgAggregateInputType = {
    productId?: true
    materialId?: true
  }

  export type ProductMaterialsSumAggregateInputType = {
    productId?: true
    materialId?: true
  }

  export type ProductMaterialsMinAggregateInputType = {
    productId?: true
    materialId?: true
  }

  export type ProductMaterialsMaxAggregateInputType = {
    productId?: true
    materialId?: true
  }

  export type ProductMaterialsCountAggregateInputType = {
    productId?: true
    materialId?: true
    _all?: true
  }

  export type ProductMaterialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMaterials to aggregate.
     */
    where?: ProductMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMaterials to fetch.
     */
    orderBy?: ProductMaterialsOrderByWithRelationInput | ProductMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductMaterials
    **/
    _count?: true | ProductMaterialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductMaterialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductMaterialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMaterialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaterialsMaxAggregateInputType
  }

  export type GetProductMaterialsAggregateType<T extends ProductMaterialsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductMaterials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductMaterials[P]>
      : GetScalarType<T[P], AggregateProductMaterials[P]>
  }




  export type ProductMaterialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMaterialsWhereInput
    orderBy?: ProductMaterialsOrderByWithAggregationInput | ProductMaterialsOrderByWithAggregationInput[]
    by: ProductMaterialsScalarFieldEnum[] | ProductMaterialsScalarFieldEnum
    having?: ProductMaterialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductMaterialsCountAggregateInputType | true
    _avg?: ProductMaterialsAvgAggregateInputType
    _sum?: ProductMaterialsSumAggregateInputType
    _min?: ProductMaterialsMinAggregateInputType
    _max?: ProductMaterialsMaxAggregateInputType
  }

  export type ProductMaterialsGroupByOutputType = {
    productId: number
    materialId: number
    _count: ProductMaterialsCountAggregateOutputType | null
    _avg: ProductMaterialsAvgAggregateOutputType | null
    _sum: ProductMaterialsSumAggregateOutputType | null
    _min: ProductMaterialsMinAggregateOutputType | null
    _max: ProductMaterialsMaxAggregateOutputType | null
  }

  type GetProductMaterialsGroupByPayload<T extends ProductMaterialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductMaterialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductMaterialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductMaterialsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductMaterialsGroupByOutputType[P]>
        }
      >
    >


  export type ProductMaterialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    materialId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMaterials"]>

  export type ProductMaterialsSelectScalar = {
    productId?: boolean
    materialId?: boolean
  }

  export type ProductMaterialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Material?: boolean | MaterialDefaultArgs<ExtArgs>
  }


  export type $ProductMaterialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductMaterials"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
      Material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      materialId: number
    }, ExtArgs["result"]["productMaterials"]>
    composites: {}
  }


  type ProductMaterialsGetPayload<S extends boolean | null | undefined | ProductMaterialsDefaultArgs> = $Result.GetResult<Prisma.$ProductMaterialsPayload, S>

  type ProductMaterialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductMaterialsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductMaterialsCountAggregateInputType | true
    }

  export interface ProductMaterialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductMaterials'], meta: { name: 'ProductMaterials' } }
    /**
     * Find zero or one ProductMaterials that matches the filter.
     * @param {ProductMaterialsFindUniqueArgs} args - Arguments to find a ProductMaterials
     * @example
     * // Get one ProductMaterials
     * const productMaterials = await prisma.productMaterials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductMaterialsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductMaterialsFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductMaterialsClient<$Result.GetResult<Prisma.$ProductMaterialsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductMaterials that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductMaterialsFindUniqueOrThrowArgs} args - Arguments to find a ProductMaterials
     * @example
     * // Get one ProductMaterials
     * const productMaterials = await prisma.productMaterials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductMaterialsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductMaterialsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductMaterialsClient<$Result.GetResult<Prisma.$ProductMaterialsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialsFindFirstArgs} args - Arguments to find a ProductMaterials
     * @example
     * // Get one ProductMaterials
     * const productMaterials = await prisma.productMaterials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductMaterialsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductMaterialsFindFirstArgs<ExtArgs>>
    ): Prisma__ProductMaterialsClient<$Result.GetResult<Prisma.$ProductMaterialsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductMaterials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialsFindFirstOrThrowArgs} args - Arguments to find a ProductMaterials
     * @example
     * // Get one ProductMaterials
     * const productMaterials = await prisma.productMaterials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductMaterialsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductMaterialsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductMaterialsClient<$Result.GetResult<Prisma.$ProductMaterialsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductMaterials
     * const productMaterials = await prisma.productMaterials.findMany()
     * 
     * // Get first 10 ProductMaterials
     * const productMaterials = await prisma.productMaterials.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productMaterialsWithProductIdOnly = await prisma.productMaterials.findMany({ select: { productId: true } })
     * 
    **/
    findMany<T extends ProductMaterialsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductMaterialsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMaterialsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductMaterials.
     * @param {ProductMaterialsCreateArgs} args - Arguments to create a ProductMaterials.
     * @example
     * // Create one ProductMaterials
     * const ProductMaterials = await prisma.productMaterials.create({
     *   data: {
     *     // ... data to create a ProductMaterials
     *   }
     * })
     * 
    **/
    create<T extends ProductMaterialsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductMaterialsCreateArgs<ExtArgs>>
    ): Prisma__ProductMaterialsClient<$Result.GetResult<Prisma.$ProductMaterialsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductMaterials.
     *     @param {ProductMaterialsCreateManyArgs} args - Arguments to create many ProductMaterials.
     *     @example
     *     // Create many ProductMaterials
     *     const productMaterials = await prisma.productMaterials.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductMaterialsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductMaterialsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductMaterials.
     * @param {ProductMaterialsDeleteArgs} args - Arguments to delete one ProductMaterials.
     * @example
     * // Delete one ProductMaterials
     * const ProductMaterials = await prisma.productMaterials.delete({
     *   where: {
     *     // ... filter to delete one ProductMaterials
     *   }
     * })
     * 
    **/
    delete<T extends ProductMaterialsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductMaterialsDeleteArgs<ExtArgs>>
    ): Prisma__ProductMaterialsClient<$Result.GetResult<Prisma.$ProductMaterialsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductMaterials.
     * @param {ProductMaterialsUpdateArgs} args - Arguments to update one ProductMaterials.
     * @example
     * // Update one ProductMaterials
     * const productMaterials = await prisma.productMaterials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductMaterialsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductMaterialsUpdateArgs<ExtArgs>>
    ): Prisma__ProductMaterialsClient<$Result.GetResult<Prisma.$ProductMaterialsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductMaterials.
     * @param {ProductMaterialsDeleteManyArgs} args - Arguments to filter ProductMaterials to delete.
     * @example
     * // Delete a few ProductMaterials
     * const { count } = await prisma.productMaterials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductMaterialsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductMaterialsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductMaterials
     * const productMaterials = await prisma.productMaterials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductMaterialsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductMaterialsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductMaterials.
     * @param {ProductMaterialsUpsertArgs} args - Arguments to update or create a ProductMaterials.
     * @example
     * // Update or create a ProductMaterials
     * const productMaterials = await prisma.productMaterials.upsert({
     *   create: {
     *     // ... data to create a ProductMaterials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductMaterials we want to update
     *   }
     * })
    **/
    upsert<T extends ProductMaterialsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductMaterialsUpsertArgs<ExtArgs>>
    ): Prisma__ProductMaterialsClient<$Result.GetResult<Prisma.$ProductMaterialsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialsCountArgs} args - Arguments to filter ProductMaterials to count.
     * @example
     * // Count the number of ProductMaterials
     * const count = await prisma.productMaterials.count({
     *   where: {
     *     // ... the filter for the ProductMaterials we want to count
     *   }
     * })
    **/
    count<T extends ProductMaterialsCountArgs>(
      args?: Subset<T, ProductMaterialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductMaterialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductMaterialsAggregateArgs>(args: Subset<T, ProductMaterialsAggregateArgs>): Prisma.PrismaPromise<GetProductMaterialsAggregateType<T>>

    /**
     * Group by ProductMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMaterialsGroupByArgs} args - Group by arguments.
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
      T extends ProductMaterialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductMaterialsGroupByArgs['orderBy'] }
        : { orderBy?: ProductMaterialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductMaterialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductMaterialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductMaterials model
   */
  readonly fields: ProductMaterialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductMaterials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductMaterialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductMaterials model
   */ 
  interface ProductMaterialsFieldRefs {
    readonly productId: FieldRef<"ProductMaterials", 'Int'>
    readonly materialId: FieldRef<"ProductMaterials", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ProductMaterials findUnique
   */
  export type ProductMaterialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which ProductMaterials to fetch.
     */
    where: ProductMaterialsWhereUniqueInput
  }


  /**
   * ProductMaterials findUniqueOrThrow
   */
  export type ProductMaterialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which ProductMaterials to fetch.
     */
    where: ProductMaterialsWhereUniqueInput
  }


  /**
   * ProductMaterials findFirst
   */
  export type ProductMaterialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which ProductMaterials to fetch.
     */
    where?: ProductMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMaterials to fetch.
     */
    orderBy?: ProductMaterialsOrderByWithRelationInput | ProductMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMaterials.
     */
    cursor?: ProductMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMaterials.
     */
    distinct?: ProductMaterialsScalarFieldEnum | ProductMaterialsScalarFieldEnum[]
  }


  /**
   * ProductMaterials findFirstOrThrow
   */
  export type ProductMaterialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which ProductMaterials to fetch.
     */
    where?: ProductMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMaterials to fetch.
     */
    orderBy?: ProductMaterialsOrderByWithRelationInput | ProductMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMaterials.
     */
    cursor?: ProductMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMaterials.
     */
    distinct?: ProductMaterialsScalarFieldEnum | ProductMaterialsScalarFieldEnum[]
  }


  /**
   * ProductMaterials findMany
   */
  export type ProductMaterialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which ProductMaterials to fetch.
     */
    where?: ProductMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMaterials to fetch.
     */
    orderBy?: ProductMaterialsOrderByWithRelationInput | ProductMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductMaterials.
     */
    cursor?: ProductMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMaterials.
     */
    skip?: number
    distinct?: ProductMaterialsScalarFieldEnum | ProductMaterialsScalarFieldEnum[]
  }


  /**
   * ProductMaterials create
   */
  export type ProductMaterialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductMaterials.
     */
    data: XOR<ProductMaterialsCreateInput, ProductMaterialsUncheckedCreateInput>
  }


  /**
   * ProductMaterials createMany
   */
  export type ProductMaterialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductMaterials.
     */
    data: ProductMaterialsCreateManyInput | ProductMaterialsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductMaterials update
   */
  export type ProductMaterialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductMaterials.
     */
    data: XOR<ProductMaterialsUpdateInput, ProductMaterialsUncheckedUpdateInput>
    /**
     * Choose, which ProductMaterials to update.
     */
    where: ProductMaterialsWhereUniqueInput
  }


  /**
   * ProductMaterials updateMany
   */
  export type ProductMaterialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductMaterials.
     */
    data: XOR<ProductMaterialsUpdateManyMutationInput, ProductMaterialsUncheckedUpdateManyInput>
    /**
     * Filter which ProductMaterials to update
     */
    where?: ProductMaterialsWhereInput
  }


  /**
   * ProductMaterials upsert
   */
  export type ProductMaterialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductMaterials to update in case it exists.
     */
    where: ProductMaterialsWhereUniqueInput
    /**
     * In case the ProductMaterials found by the `where` argument doesn't exist, create a new ProductMaterials with this data.
     */
    create: XOR<ProductMaterialsCreateInput, ProductMaterialsUncheckedCreateInput>
    /**
     * In case the ProductMaterials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductMaterialsUpdateInput, ProductMaterialsUncheckedUpdateInput>
  }


  /**
   * ProductMaterials delete
   */
  export type ProductMaterialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
    /**
     * Filter which ProductMaterials to delete.
     */
    where: ProductMaterialsWhereUniqueInput
  }


  /**
   * ProductMaterials deleteMany
   */
  export type ProductMaterialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMaterials to delete
     */
    where?: ProductMaterialsWhereInput
  }


  /**
   * ProductMaterials without action
   */
  export type ProductMaterialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMaterials
     */
    select?: ProductMaterialsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductMaterialsInclude<ExtArgs> | null
  }



  /**
   * Model ProductGallery
   */

  export type AggregateProductGallery = {
    _count: ProductGalleryCountAggregateOutputType | null
    _avg: ProductGalleryAvgAggregateOutputType | null
    _sum: ProductGallerySumAggregateOutputType | null
    _min: ProductGalleryMinAggregateOutputType | null
    _max: ProductGalleryMaxAggregateOutputType | null
  }

  export type ProductGalleryAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductGallerySumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductGalleryMinAggregateOutputType = {
    id: number | null
    url: string | null
    productId: number | null
  }

  export type ProductGalleryMaxAggregateOutputType = {
    id: number | null
    url: string | null
    productId: number | null
  }

  export type ProductGalleryCountAggregateOutputType = {
    id: number
    url: number
    productId: number
    _all: number
  }


  export type ProductGalleryAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductGallerySumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductGalleryMinAggregateInputType = {
    id?: true
    url?: true
    productId?: true
  }

  export type ProductGalleryMaxAggregateInputType = {
    id?: true
    url?: true
    productId?: true
  }

  export type ProductGalleryCountAggregateInputType = {
    id?: true
    url?: true
    productId?: true
    _all?: true
  }

  export type ProductGalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductGallery to aggregate.
     */
    where?: ProductGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGalleries to fetch.
     */
    orderBy?: ProductGalleryOrderByWithRelationInput | ProductGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductGalleries
    **/
    _count?: true | ProductGalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductGalleryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductGallerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductGalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductGalleryMaxAggregateInputType
  }

  export type GetProductGalleryAggregateType<T extends ProductGalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductGallery[P]>
      : GetScalarType<T[P], AggregateProductGallery[P]>
  }




  export type ProductGalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductGalleryWhereInput
    orderBy?: ProductGalleryOrderByWithAggregationInput | ProductGalleryOrderByWithAggregationInput[]
    by: ProductGalleryScalarFieldEnum[] | ProductGalleryScalarFieldEnum
    having?: ProductGalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductGalleryCountAggregateInputType | true
    _avg?: ProductGalleryAvgAggregateInputType
    _sum?: ProductGallerySumAggregateInputType
    _min?: ProductGalleryMinAggregateInputType
    _max?: ProductGalleryMaxAggregateInputType
  }

  export type ProductGalleryGroupByOutputType = {
    id: number
    url: string
    productId: number
    _count: ProductGalleryCountAggregateOutputType | null
    _avg: ProductGalleryAvgAggregateOutputType | null
    _sum: ProductGallerySumAggregateOutputType | null
    _min: ProductGalleryMinAggregateOutputType | null
    _max: ProductGalleryMaxAggregateOutputType | null
  }

  type GetProductGalleryGroupByPayload<T extends ProductGalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGalleryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGalleryGroupByOutputType[P]>
        }
      >
    >


  export type ProductGallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productGallery"]>

  export type ProductGallerySelectScalar = {
    id?: boolean
    url?: boolean
    productId?: boolean
  }

  export type ProductGalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $ProductGalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductGallery"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      productId: number
    }, ExtArgs["result"]["productGallery"]>
    composites: {}
  }


  type ProductGalleryGetPayload<S extends boolean | null | undefined | ProductGalleryDefaultArgs> = $Result.GetResult<Prisma.$ProductGalleryPayload, S>

  type ProductGalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductGalleryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductGalleryCountAggregateInputType | true
    }

  export interface ProductGalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductGallery'], meta: { name: 'ProductGallery' } }
    /**
     * Find zero or one ProductGallery that matches the filter.
     * @param {ProductGalleryFindUniqueArgs} args - Arguments to find a ProductGallery
     * @example
     * // Get one ProductGallery
     * const productGallery = await prisma.productGallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductGalleryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductGalleryFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductGallery that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductGalleryFindUniqueOrThrowArgs} args - Arguments to find a ProductGallery
     * @example
     * // Get one ProductGallery
     * const productGallery = await prisma.productGallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductGalleryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductGalleryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductGallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryFindFirstArgs} args - Arguments to find a ProductGallery
     * @example
     * // Get one ProductGallery
     * const productGallery = await prisma.productGallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductGalleryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductGalleryFindFirstArgs<ExtArgs>>
    ): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductGallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryFindFirstOrThrowArgs} args - Arguments to find a ProductGallery
     * @example
     * // Get one ProductGallery
     * const productGallery = await prisma.productGallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductGalleryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductGalleryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductGalleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductGalleries
     * const productGalleries = await prisma.productGallery.findMany()
     * 
     * // Get first 10 ProductGalleries
     * const productGalleries = await prisma.productGallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productGalleryWithIdOnly = await prisma.productGallery.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductGalleryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductGalleryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductGallery.
     * @param {ProductGalleryCreateArgs} args - Arguments to create a ProductGallery.
     * @example
     * // Create one ProductGallery
     * const ProductGallery = await prisma.productGallery.create({
     *   data: {
     *     // ... data to create a ProductGallery
     *   }
     * })
     * 
    **/
    create<T extends ProductGalleryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductGalleryCreateArgs<ExtArgs>>
    ): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductGalleries.
     *     @param {ProductGalleryCreateManyArgs} args - Arguments to create many ProductGalleries.
     *     @example
     *     // Create many ProductGalleries
     *     const productGallery = await prisma.productGallery.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductGalleryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductGalleryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductGallery.
     * @param {ProductGalleryDeleteArgs} args - Arguments to delete one ProductGallery.
     * @example
     * // Delete one ProductGallery
     * const ProductGallery = await prisma.productGallery.delete({
     *   where: {
     *     // ... filter to delete one ProductGallery
     *   }
     * })
     * 
    **/
    delete<T extends ProductGalleryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductGalleryDeleteArgs<ExtArgs>>
    ): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductGallery.
     * @param {ProductGalleryUpdateArgs} args - Arguments to update one ProductGallery.
     * @example
     * // Update one ProductGallery
     * const productGallery = await prisma.productGallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductGalleryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductGalleryUpdateArgs<ExtArgs>>
    ): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductGalleries.
     * @param {ProductGalleryDeleteManyArgs} args - Arguments to filter ProductGalleries to delete.
     * @example
     * // Delete a few ProductGalleries
     * const { count } = await prisma.productGallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductGalleryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductGalleryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductGalleries
     * const productGallery = await prisma.productGallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductGalleryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductGalleryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductGallery.
     * @param {ProductGalleryUpsertArgs} args - Arguments to update or create a ProductGallery.
     * @example
     * // Update or create a ProductGallery
     * const productGallery = await prisma.productGallery.upsert({
     *   create: {
     *     // ... data to create a ProductGallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductGallery we want to update
     *   }
     * })
    **/
    upsert<T extends ProductGalleryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductGalleryUpsertArgs<ExtArgs>>
    ): Prisma__ProductGalleryClient<$Result.GetResult<Prisma.$ProductGalleryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryCountArgs} args - Arguments to filter ProductGalleries to count.
     * @example
     * // Count the number of ProductGalleries
     * const count = await prisma.productGallery.count({
     *   where: {
     *     // ... the filter for the ProductGalleries we want to count
     *   }
     * })
    **/
    count<T extends ProductGalleryCountArgs>(
      args?: Subset<T, ProductGalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductGalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductGalleryAggregateArgs>(args: Subset<T, ProductGalleryAggregateArgs>): Prisma.PrismaPromise<GetProductGalleryAggregateType<T>>

    /**
     * Group by ProductGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGalleryGroupByArgs} args - Group by arguments.
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
      T extends ProductGalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGalleryGroupByArgs['orderBy'] }
        : { orderBy?: ProductGalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductGallery model
   */
  readonly fields: ProductGalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductGallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductGalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductGallery model
   */ 
  interface ProductGalleryFieldRefs {
    readonly id: FieldRef<"ProductGallery", 'Int'>
    readonly url: FieldRef<"ProductGallery", 'String'>
    readonly productId: FieldRef<"ProductGallery", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ProductGallery findUnique
   */
  export type ProductGalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProductGallery to fetch.
     */
    where: ProductGalleryWhereUniqueInput
  }


  /**
   * ProductGallery findUniqueOrThrow
   */
  export type ProductGalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProductGallery to fetch.
     */
    where: ProductGalleryWhereUniqueInput
  }


  /**
   * ProductGallery findFirst
   */
  export type ProductGalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProductGallery to fetch.
     */
    where?: ProductGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGalleries to fetch.
     */
    orderBy?: ProductGalleryOrderByWithRelationInput | ProductGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductGalleries.
     */
    cursor?: ProductGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductGalleries.
     */
    distinct?: ProductGalleryScalarFieldEnum | ProductGalleryScalarFieldEnum[]
  }


  /**
   * ProductGallery findFirstOrThrow
   */
  export type ProductGalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProductGallery to fetch.
     */
    where?: ProductGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGalleries to fetch.
     */
    orderBy?: ProductGalleryOrderByWithRelationInput | ProductGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductGalleries.
     */
    cursor?: ProductGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductGalleries.
     */
    distinct?: ProductGalleryScalarFieldEnum | ProductGalleryScalarFieldEnum[]
  }


  /**
   * ProductGallery findMany
   */
  export type ProductGalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProductGalleries to fetch.
     */
    where?: ProductGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductGalleries to fetch.
     */
    orderBy?: ProductGalleryOrderByWithRelationInput | ProductGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductGalleries.
     */
    cursor?: ProductGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductGalleries.
     */
    skip?: number
    distinct?: ProductGalleryScalarFieldEnum | ProductGalleryScalarFieldEnum[]
  }


  /**
   * ProductGallery create
   */
  export type ProductGalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductGallery.
     */
    data: XOR<ProductGalleryCreateInput, ProductGalleryUncheckedCreateInput>
  }


  /**
   * ProductGallery createMany
   */
  export type ProductGalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductGalleries.
     */
    data: ProductGalleryCreateManyInput | ProductGalleryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductGallery update
   */
  export type ProductGalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductGallery.
     */
    data: XOR<ProductGalleryUpdateInput, ProductGalleryUncheckedUpdateInput>
    /**
     * Choose, which ProductGallery to update.
     */
    where: ProductGalleryWhereUniqueInput
  }


  /**
   * ProductGallery updateMany
   */
  export type ProductGalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductGalleries.
     */
    data: XOR<ProductGalleryUpdateManyMutationInput, ProductGalleryUncheckedUpdateManyInput>
    /**
     * Filter which ProductGalleries to update
     */
    where?: ProductGalleryWhereInput
  }


  /**
   * ProductGallery upsert
   */
  export type ProductGalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductGallery to update in case it exists.
     */
    where: ProductGalleryWhereUniqueInput
    /**
     * In case the ProductGallery found by the `where` argument doesn't exist, create a new ProductGallery with this data.
     */
    create: XOR<ProductGalleryCreateInput, ProductGalleryUncheckedCreateInput>
    /**
     * In case the ProductGallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductGalleryUpdateInput, ProductGalleryUncheckedUpdateInput>
  }


  /**
   * ProductGallery delete
   */
  export type ProductGalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGalleryInclude<ExtArgs> | null
    /**
     * Filter which ProductGallery to delete.
     */
    where: ProductGalleryWhereUniqueInput
  }


  /**
   * ProductGallery deleteMany
   */
  export type ProductGalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductGalleries to delete
     */
    where?: ProductGalleryWhereInput
  }


  /**
   * ProductGallery without action
   */
  export type ProductGalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductGallery
     */
    select?: ProductGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductGalleryInclude<ExtArgs> | null
  }



  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    email: string | null
    sujet: string | null
    message: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    email: string | null
    sujet: string | null
    message: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    email: number
    sujet: number
    message: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    email?: true
    sujet?: true
    message?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    email?: true
    sujet?: true
    message?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    email?: true
    sujet?: true
    message?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    email: string | null
    sujet: string | null
    message: string | null
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    sujet?: boolean
    message?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    email?: boolean
    sujet?: boolean
    message?: boolean
  }


  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      sujet: string | null
      message: string | null
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }


  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
    **/
    create<T extends ContactCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactCreateArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contacts.
     *     @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     *     @example
     *     // Create many Contacts
     *     const contact = await prisma.contact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
    **/
    delete<T extends ContactDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
    **/
    upsert<T extends ContactUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Contact model
   */ 
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly sujet: FieldRef<"Contact", 'String'>
    readonly message: FieldRef<"Contact", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data?: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }


  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
  }


  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }


  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
  }


  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
  }



  /**
   * Model CheckoutMethod
   */

  export type AggregateCheckoutMethod = {
    _count: CheckoutMethodCountAggregateOutputType | null
    _avg: CheckoutMethodAvgAggregateOutputType | null
    _sum: CheckoutMethodSumAggregateOutputType | null
    _min: CheckoutMethodMinAggregateOutputType | null
    _max: CheckoutMethodMaxAggregateOutputType | null
  }

  export type CheckoutMethodAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CheckoutMethodSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CheckoutMethodMinAggregateOutputType = {
    id: number | null
    userId: number | null
    cardType: string | null
    cardHolderName: string | null
    cardNumber: string | null
    expirationDate: Date | null
  }

  export type CheckoutMethodMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    cardType: string | null
    cardHolderName: string | null
    cardNumber: string | null
    expirationDate: Date | null
  }

  export type CheckoutMethodCountAggregateOutputType = {
    id: number
    userId: number
    cardType: number
    cardHolderName: number
    cardNumber: number
    expirationDate: number
    _all: number
  }


  export type CheckoutMethodAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CheckoutMethodSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CheckoutMethodMinAggregateInputType = {
    id?: true
    userId?: true
    cardType?: true
    cardHolderName?: true
    cardNumber?: true
    expirationDate?: true
  }

  export type CheckoutMethodMaxAggregateInputType = {
    id?: true
    userId?: true
    cardType?: true
    cardHolderName?: true
    cardNumber?: true
    expirationDate?: true
  }

  export type CheckoutMethodCountAggregateInputType = {
    id?: true
    userId?: true
    cardType?: true
    cardHolderName?: true
    cardNumber?: true
    expirationDate?: true
    _all?: true
  }

  export type CheckoutMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckoutMethod to aggregate.
     */
    where?: CheckoutMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckoutMethods to fetch.
     */
    orderBy?: CheckoutMethodOrderByWithRelationInput | CheckoutMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckoutMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckoutMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckoutMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckoutMethods
    **/
    _count?: true | CheckoutMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckoutMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckoutMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckoutMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckoutMethodMaxAggregateInputType
  }

  export type GetCheckoutMethodAggregateType<T extends CheckoutMethodAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckoutMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckoutMethod[P]>
      : GetScalarType<T[P], AggregateCheckoutMethod[P]>
  }




  export type CheckoutMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckoutMethodWhereInput
    orderBy?: CheckoutMethodOrderByWithAggregationInput | CheckoutMethodOrderByWithAggregationInput[]
    by: CheckoutMethodScalarFieldEnum[] | CheckoutMethodScalarFieldEnum
    having?: CheckoutMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckoutMethodCountAggregateInputType | true
    _avg?: CheckoutMethodAvgAggregateInputType
    _sum?: CheckoutMethodSumAggregateInputType
    _min?: CheckoutMethodMinAggregateInputType
    _max?: CheckoutMethodMaxAggregateInputType
  }

  export type CheckoutMethodGroupByOutputType = {
    id: number
    userId: number
    cardType: string
    cardHolderName: string
    cardNumber: string
    expirationDate: Date
    _count: CheckoutMethodCountAggregateOutputType | null
    _avg: CheckoutMethodAvgAggregateOutputType | null
    _sum: CheckoutMethodSumAggregateOutputType | null
    _min: CheckoutMethodMinAggregateOutputType | null
    _max: CheckoutMethodMaxAggregateOutputType | null
  }

  type GetCheckoutMethodGroupByPayload<T extends CheckoutMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckoutMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckoutMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckoutMethodGroupByOutputType[P]>
            : GetScalarType<T[P], CheckoutMethodGroupByOutputType[P]>
        }
      >
    >


  export type CheckoutMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardType?: boolean
    cardHolderName?: boolean
    cardNumber?: boolean
    expirationDate?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkoutMethod"]>

  export type CheckoutMethodSelectScalar = {
    id?: boolean
    userId?: boolean
    cardType?: boolean
    cardHolderName?: boolean
    cardNumber?: boolean
    expirationDate?: boolean
  }

  export type CheckoutMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }


  export type $CheckoutMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckoutMethod"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      cardType: string
      cardHolderName: string
      cardNumber: string
      expirationDate: Date
    }, ExtArgs["result"]["checkoutMethod"]>
    composites: {}
  }


  type CheckoutMethodGetPayload<S extends boolean | null | undefined | CheckoutMethodDefaultArgs> = $Result.GetResult<Prisma.$CheckoutMethodPayload, S>

  type CheckoutMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CheckoutMethodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CheckoutMethodCountAggregateInputType | true
    }

  export interface CheckoutMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckoutMethod'], meta: { name: 'CheckoutMethod' } }
    /**
     * Find zero or one CheckoutMethod that matches the filter.
     * @param {CheckoutMethodFindUniqueArgs} args - Arguments to find a CheckoutMethod
     * @example
     * // Get one CheckoutMethod
     * const checkoutMethod = await prisma.checkoutMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CheckoutMethodFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutMethodFindUniqueArgs<ExtArgs>>
    ): Prisma__CheckoutMethodClient<$Result.GetResult<Prisma.$CheckoutMethodPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CheckoutMethod that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CheckoutMethodFindUniqueOrThrowArgs} args - Arguments to find a CheckoutMethod
     * @example
     * // Get one CheckoutMethod
     * const checkoutMethod = await prisma.checkoutMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CheckoutMethodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutMethodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CheckoutMethodClient<$Result.GetResult<Prisma.$CheckoutMethodPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CheckoutMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutMethodFindFirstArgs} args - Arguments to find a CheckoutMethod
     * @example
     * // Get one CheckoutMethod
     * const checkoutMethod = await prisma.checkoutMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CheckoutMethodFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutMethodFindFirstArgs<ExtArgs>>
    ): Prisma__CheckoutMethodClient<$Result.GetResult<Prisma.$CheckoutMethodPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CheckoutMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutMethodFindFirstOrThrowArgs} args - Arguments to find a CheckoutMethod
     * @example
     * // Get one CheckoutMethod
     * const checkoutMethod = await prisma.checkoutMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CheckoutMethodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutMethodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CheckoutMethodClient<$Result.GetResult<Prisma.$CheckoutMethodPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CheckoutMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutMethodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckoutMethods
     * const checkoutMethods = await prisma.checkoutMethod.findMany()
     * 
     * // Get first 10 CheckoutMethods
     * const checkoutMethods = await prisma.checkoutMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkoutMethodWithIdOnly = await prisma.checkoutMethod.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CheckoutMethodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutMethodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckoutMethodPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CheckoutMethod.
     * @param {CheckoutMethodCreateArgs} args - Arguments to create a CheckoutMethod.
     * @example
     * // Create one CheckoutMethod
     * const CheckoutMethod = await prisma.checkoutMethod.create({
     *   data: {
     *     // ... data to create a CheckoutMethod
     *   }
     * })
     * 
    **/
    create<T extends CheckoutMethodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutMethodCreateArgs<ExtArgs>>
    ): Prisma__CheckoutMethodClient<$Result.GetResult<Prisma.$CheckoutMethodPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CheckoutMethods.
     *     @param {CheckoutMethodCreateManyArgs} args - Arguments to create many CheckoutMethods.
     *     @example
     *     // Create many CheckoutMethods
     *     const checkoutMethod = await prisma.checkoutMethod.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CheckoutMethodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutMethodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CheckoutMethod.
     * @param {CheckoutMethodDeleteArgs} args - Arguments to delete one CheckoutMethod.
     * @example
     * // Delete one CheckoutMethod
     * const CheckoutMethod = await prisma.checkoutMethod.delete({
     *   where: {
     *     // ... filter to delete one CheckoutMethod
     *   }
     * })
     * 
    **/
    delete<T extends CheckoutMethodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutMethodDeleteArgs<ExtArgs>>
    ): Prisma__CheckoutMethodClient<$Result.GetResult<Prisma.$CheckoutMethodPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CheckoutMethod.
     * @param {CheckoutMethodUpdateArgs} args - Arguments to update one CheckoutMethod.
     * @example
     * // Update one CheckoutMethod
     * const checkoutMethod = await prisma.checkoutMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CheckoutMethodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutMethodUpdateArgs<ExtArgs>>
    ): Prisma__CheckoutMethodClient<$Result.GetResult<Prisma.$CheckoutMethodPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CheckoutMethods.
     * @param {CheckoutMethodDeleteManyArgs} args - Arguments to filter CheckoutMethods to delete.
     * @example
     * // Delete a few CheckoutMethods
     * const { count } = await prisma.checkoutMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CheckoutMethodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckoutMethodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckoutMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckoutMethods
     * const checkoutMethod = await prisma.checkoutMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CheckoutMethodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutMethodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CheckoutMethod.
     * @param {CheckoutMethodUpsertArgs} args - Arguments to update or create a CheckoutMethod.
     * @example
     * // Update or create a CheckoutMethod
     * const checkoutMethod = await prisma.checkoutMethod.upsert({
     *   create: {
     *     // ... data to create a CheckoutMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckoutMethod we want to update
     *   }
     * })
    **/
    upsert<T extends CheckoutMethodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CheckoutMethodUpsertArgs<ExtArgs>>
    ): Prisma__CheckoutMethodClient<$Result.GetResult<Prisma.$CheckoutMethodPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CheckoutMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutMethodCountArgs} args - Arguments to filter CheckoutMethods to count.
     * @example
     * // Count the number of CheckoutMethods
     * const count = await prisma.checkoutMethod.count({
     *   where: {
     *     // ... the filter for the CheckoutMethods we want to count
     *   }
     * })
    **/
    count<T extends CheckoutMethodCountArgs>(
      args?: Subset<T, CheckoutMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckoutMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckoutMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckoutMethodAggregateArgs>(args: Subset<T, CheckoutMethodAggregateArgs>): Prisma.PrismaPromise<GetCheckoutMethodAggregateType<T>>

    /**
     * Group by CheckoutMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutMethodGroupByArgs} args - Group by arguments.
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
      T extends CheckoutMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckoutMethodGroupByArgs['orderBy'] }
        : { orderBy?: CheckoutMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckoutMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckoutMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckoutMethod model
   */
  readonly fields: CheckoutMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckoutMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckoutMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CheckoutMethod model
   */ 
  interface CheckoutMethodFieldRefs {
    readonly id: FieldRef<"CheckoutMethod", 'Int'>
    readonly userId: FieldRef<"CheckoutMethod", 'Int'>
    readonly cardType: FieldRef<"CheckoutMethod", 'String'>
    readonly cardHolderName: FieldRef<"CheckoutMethod", 'String'>
    readonly cardNumber: FieldRef<"CheckoutMethod", 'String'>
    readonly expirationDate: FieldRef<"CheckoutMethod", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CheckoutMethod findUnique
   */
  export type CheckoutMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutMethod
     */
    select?: CheckoutMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutMethodInclude<ExtArgs> | null
    /**
     * Filter, which CheckoutMethod to fetch.
     */
    where: CheckoutMethodWhereUniqueInput
  }


  /**
   * CheckoutMethod findUniqueOrThrow
   */
  export type CheckoutMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutMethod
     */
    select?: CheckoutMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutMethodInclude<ExtArgs> | null
    /**
     * Filter, which CheckoutMethod to fetch.
     */
    where: CheckoutMethodWhereUniqueInput
  }


  /**
   * CheckoutMethod findFirst
   */
  export type CheckoutMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutMethod
     */
    select?: CheckoutMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutMethodInclude<ExtArgs> | null
    /**
     * Filter, which CheckoutMethod to fetch.
     */
    where?: CheckoutMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckoutMethods to fetch.
     */
    orderBy?: CheckoutMethodOrderByWithRelationInput | CheckoutMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckoutMethods.
     */
    cursor?: CheckoutMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckoutMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckoutMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckoutMethods.
     */
    distinct?: CheckoutMethodScalarFieldEnum | CheckoutMethodScalarFieldEnum[]
  }


  /**
   * CheckoutMethod findFirstOrThrow
   */
  export type CheckoutMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutMethod
     */
    select?: CheckoutMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutMethodInclude<ExtArgs> | null
    /**
     * Filter, which CheckoutMethod to fetch.
     */
    where?: CheckoutMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckoutMethods to fetch.
     */
    orderBy?: CheckoutMethodOrderByWithRelationInput | CheckoutMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckoutMethods.
     */
    cursor?: CheckoutMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckoutMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckoutMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckoutMethods.
     */
    distinct?: CheckoutMethodScalarFieldEnum | CheckoutMethodScalarFieldEnum[]
  }


  /**
   * CheckoutMethod findMany
   */
  export type CheckoutMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutMethod
     */
    select?: CheckoutMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutMethodInclude<ExtArgs> | null
    /**
     * Filter, which CheckoutMethods to fetch.
     */
    where?: CheckoutMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckoutMethods to fetch.
     */
    orderBy?: CheckoutMethodOrderByWithRelationInput | CheckoutMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckoutMethods.
     */
    cursor?: CheckoutMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckoutMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckoutMethods.
     */
    skip?: number
    distinct?: CheckoutMethodScalarFieldEnum | CheckoutMethodScalarFieldEnum[]
  }


  /**
   * CheckoutMethod create
   */
  export type CheckoutMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutMethod
     */
    select?: CheckoutMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckoutMethod.
     */
    data: XOR<CheckoutMethodCreateInput, CheckoutMethodUncheckedCreateInput>
  }


  /**
   * CheckoutMethod createMany
   */
  export type CheckoutMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckoutMethods.
     */
    data: CheckoutMethodCreateManyInput | CheckoutMethodCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CheckoutMethod update
   */
  export type CheckoutMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutMethod
     */
    select?: CheckoutMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckoutMethod.
     */
    data: XOR<CheckoutMethodUpdateInput, CheckoutMethodUncheckedUpdateInput>
    /**
     * Choose, which CheckoutMethod to update.
     */
    where: CheckoutMethodWhereUniqueInput
  }


  /**
   * CheckoutMethod updateMany
   */
  export type CheckoutMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckoutMethods.
     */
    data: XOR<CheckoutMethodUpdateManyMutationInput, CheckoutMethodUncheckedUpdateManyInput>
    /**
     * Filter which CheckoutMethods to update
     */
    where?: CheckoutMethodWhereInput
  }


  /**
   * CheckoutMethod upsert
   */
  export type CheckoutMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutMethod
     */
    select?: CheckoutMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckoutMethod to update in case it exists.
     */
    where: CheckoutMethodWhereUniqueInput
    /**
     * In case the CheckoutMethod found by the `where` argument doesn't exist, create a new CheckoutMethod with this data.
     */
    create: XOR<CheckoutMethodCreateInput, CheckoutMethodUncheckedCreateInput>
    /**
     * In case the CheckoutMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckoutMethodUpdateInput, CheckoutMethodUncheckedUpdateInput>
  }


  /**
   * CheckoutMethod delete
   */
  export type CheckoutMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutMethod
     */
    select?: CheckoutMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutMethodInclude<ExtArgs> | null
    /**
     * Filter which CheckoutMethod to delete.
     */
    where: CheckoutMethodWhereUniqueInput
  }


  /**
   * CheckoutMethod deleteMany
   */
  export type CheckoutMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckoutMethods to delete
     */
    where?: CheckoutMethodWhereInput
  }


  /**
   * CheckoutMethod without action
   */
  export type CheckoutMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutMethod
     */
    select?: CheckoutMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CheckoutMethodInclude<ExtArgs> | null
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


  export const ArticleOrderScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price'
  };

  export type ArticleOrderScalarFieldEnum = (typeof ArticleOrderScalarFieldEnum)[keyof typeof ArticleOrderScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    label: 'label',
    thumbnail: 'thumbnail'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    address: 'address',
    city: 'city',
    createdAt: 'createdAt',
    lastName: 'lastName',
    firstName: 'firstName',
    role: 'role'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    status: 'status',
    createdAt: 'createdAt',
    orderDate: 'orderDate'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    stock: 'stock',
    description: 'description',
    categoryId: 'categoryId',
    thumbnail: 'thumbnail'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductMaterialsScalarFieldEnum: {
    productId: 'productId',
    materialId: 'materialId'
  };

  export type ProductMaterialsScalarFieldEnum = (typeof ProductMaterialsScalarFieldEnum)[keyof typeof ProductMaterialsScalarFieldEnum]


  export const ProductGalleryScalarFieldEnum: {
    id: 'id',
    url: 'url',
    productId: 'productId'
  };

  export type ProductGalleryScalarFieldEnum = (typeof ProductGalleryScalarFieldEnum)[keyof typeof ProductGalleryScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    email: 'email',
    sujet: 'sujet',
    message: 'message'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const CheckoutMethodScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cardType: 'cardType',
    cardHolderName: 'cardHolderName',
    cardNumber: 'cardNumber',
    expirationDate: 'expirationDate'
  };

  export type CheckoutMethodScalarFieldEnum = (typeof CheckoutMethodScalarFieldEnum)[keyof typeof CheckoutMethodScalarFieldEnum]


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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type ArticleOrderWhereInput = {
    AND?: ArticleOrderWhereInput | ArticleOrderWhereInput[]
    OR?: ArticleOrderWhereInput[]
    NOT?: ArticleOrderWhereInput | ArticleOrderWhereInput[]
    id?: IntFilter<"ArticleOrder"> | number
    orderId?: IntNullableFilter<"ArticleOrder"> | number | null
    productId?: IntNullableFilter<"ArticleOrder"> | number | null
    quantity?: IntNullableFilter<"ArticleOrder"> | number | null
    price?: IntNullableFilter<"ArticleOrder"> | number | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
    product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
  }

  export type ArticleOrderOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ArticleOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArticleOrderWhereInput | ArticleOrderWhereInput[]
    OR?: ArticleOrderWhereInput[]
    NOT?: ArticleOrderWhereInput | ArticleOrderWhereInput[]
    orderId?: IntNullableFilter<"ArticleOrder"> | number | null
    productId?: IntNullableFilter<"ArticleOrder"> | number | null
    quantity?: IntNullableFilter<"ArticleOrder"> | number | null
    price?: IntNullableFilter<"ArticleOrder"> | number | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
    product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
  }, "id" | "id">

  export type ArticleOrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    _count?: ArticleOrderCountOrderByAggregateInput
    _avg?: ArticleOrderAvgOrderByAggregateInput
    _max?: ArticleOrderMaxOrderByAggregateInput
    _min?: ArticleOrderMinOrderByAggregateInput
    _sum?: ArticleOrderSumOrderByAggregateInput
  }

  export type ArticleOrderScalarWhereWithAggregatesInput = {
    AND?: ArticleOrderScalarWhereWithAggregatesInput | ArticleOrderScalarWhereWithAggregatesInput[]
    OR?: ArticleOrderScalarWhereWithAggregatesInput[]
    NOT?: ArticleOrderScalarWhereWithAggregatesInput | ArticleOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArticleOrder"> | number
    orderId?: IntNullableWithAggregatesFilter<"ArticleOrder"> | number | null
    productId?: IntNullableWithAggregatesFilter<"ArticleOrder"> | number | null
    quantity?: IntNullableWithAggregatesFilter<"ArticleOrder"> | number | null
    price?: IntNullableWithAggregatesFilter<"ArticleOrder"> | number | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    label?: StringNullableFilter<"Category"> | string | null
    thumbnail?: StringNullableFilter<"Category"> | string | null
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    label?: StringNullableFilter<"Category"> | string | null
    thumbnail?: StringNullableFilter<"Category"> | string | null
    products?: ProductListRelationFilter
  }, "id" | "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    label?: StringNullableWithAggregatesFilter<"Category"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    email?: StringNullableFilter<"Client"> | string | null
    password?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    lastName?: StringNullableFilter<"Client"> | string | null
    firstName?: StringNullableFilter<"Client"> | string | null
    role?: StringFilter<"Client"> | string
    orders?: OrderListRelationFilter
    checkoutMethods?: CheckoutMethodListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    role?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    checkoutMethods?: CheckoutMethodOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    password?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    lastName?: StringNullableFilter<"Client"> | string | null
    firstName?: StringNullableFilter<"Client"> | string | null
    role?: StringFilter<"Client"> | string
    orders?: OrderListRelationFilter
    checkoutMethods?: CheckoutMethodListRelationFilter
  }, "id" | "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    password?: StringNullableWithAggregatesFilter<"Client"> | string | null
    address?: StringNullableWithAggregatesFilter<"Client"> | string | null
    city?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
    lastName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    role?: StringWithAggregatesFilter<"Client"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    clientId?: IntNullableFilter<"Order"> | number | null
    status?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    orderDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
    ArticleOrder?: ArticleOrderListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    orderDate?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    ArticleOrder?: ArticleOrderOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    clientId?: IntNullableFilter<"Order"> | number | null
    status?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    orderDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
    ArticleOrder?: ArticleOrderListRelationFilter
  }, "id" | "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    orderDate?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    clientId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    status?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    orderDate?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: IntFilter<"Material"> | number
    label?: StringNullableFilter<"Material"> | string | null
    products?: ProductListRelationFilter
    ProductMaterials?: ProductMaterialsListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
    ProductMaterials?: ProductMaterialsOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    label?: StringNullableFilter<"Material"> | string | null
    products?: ProductListRelationFilter
    ProductMaterials?: ProductMaterialsListRelationFilter
  }, "id" | "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrderInput | SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Material"> | number
    label?: StringNullableWithAggregatesFilter<"Material"> | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringNullableFilter<"Product"> | string | null
    price?: IntNullableFilter<"Product"> | number | null
    stock?: IntNullableFilter<"Product"> | number | null
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    thumbnail?: StringNullableFilter<"Product"> | string | null
    Category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    materials?: MaterialListRelationFilter
    ArticleOrder?: ArticleOrderListRelationFilter
    images?: ProductGalleryListRelationFilter
    ProductMaterials?: ProductMaterialsListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    Category?: CategoryOrderByWithRelationInput
    materials?: MaterialOrderByRelationAggregateInput
    ArticleOrder?: ArticleOrderOrderByRelationAggregateInput
    images?: ProductGalleryOrderByRelationAggregateInput
    ProductMaterials?: ProductMaterialsOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringNullableFilter<"Product"> | string | null
    price?: IntNullableFilter<"Product"> | number | null
    stock?: IntNullableFilter<"Product"> | number | null
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    thumbnail?: StringNullableFilter<"Product"> | string | null
    Category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    materials?: MaterialListRelationFilter
    ArticleOrder?: ArticleOrderListRelationFilter
    images?: ProductGalleryListRelationFilter
    ProductMaterials?: ProductMaterialsListRelationFilter
  }, "id" | "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: IntNullableWithAggregatesFilter<"Product"> | number | null
    stock?: IntNullableWithAggregatesFilter<"Product"> | number | null
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    categoryId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    thumbnail?: StringNullableWithAggregatesFilter<"Product"> | string | null
  }

  export type ProductMaterialsWhereInput = {
    AND?: ProductMaterialsWhereInput | ProductMaterialsWhereInput[]
    OR?: ProductMaterialsWhereInput[]
    NOT?: ProductMaterialsWhereInput | ProductMaterialsWhereInput[]
    productId?: IntFilter<"ProductMaterials"> | number
    materialId?: IntFilter<"ProductMaterials"> | number
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    Material?: XOR<MaterialRelationFilter, MaterialWhereInput>
  }

  export type ProductMaterialsOrderByWithRelationInput = {
    productId?: SortOrder
    materialId?: SortOrder
    Product?: ProductOrderByWithRelationInput
    Material?: MaterialOrderByWithRelationInput
  }

  export type ProductMaterialsWhereUniqueInput = Prisma.AtLeast<{
    productId_materialId?: ProductMaterialsProductIdMaterialIdCompoundUniqueInput
    AND?: ProductMaterialsWhereInput | ProductMaterialsWhereInput[]
    OR?: ProductMaterialsWhereInput[]
    NOT?: ProductMaterialsWhereInput | ProductMaterialsWhereInput[]
    productId?: IntFilter<"ProductMaterials"> | number
    materialId?: IntFilter<"ProductMaterials"> | number
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    Material?: XOR<MaterialRelationFilter, MaterialWhereInput>
  }, "productId_materialId">

  export type ProductMaterialsOrderByWithAggregationInput = {
    productId?: SortOrder
    materialId?: SortOrder
    _count?: ProductMaterialsCountOrderByAggregateInput
    _avg?: ProductMaterialsAvgOrderByAggregateInput
    _max?: ProductMaterialsMaxOrderByAggregateInput
    _min?: ProductMaterialsMinOrderByAggregateInput
    _sum?: ProductMaterialsSumOrderByAggregateInput
  }

  export type ProductMaterialsScalarWhereWithAggregatesInput = {
    AND?: ProductMaterialsScalarWhereWithAggregatesInput | ProductMaterialsScalarWhereWithAggregatesInput[]
    OR?: ProductMaterialsScalarWhereWithAggregatesInput[]
    NOT?: ProductMaterialsScalarWhereWithAggregatesInput | ProductMaterialsScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"ProductMaterials"> | number
    materialId?: IntWithAggregatesFilter<"ProductMaterials"> | number
  }

  export type ProductGalleryWhereInput = {
    AND?: ProductGalleryWhereInput | ProductGalleryWhereInput[]
    OR?: ProductGalleryWhereInput[]
    NOT?: ProductGalleryWhereInput | ProductGalleryWhereInput[]
    id?: IntFilter<"ProductGallery"> | number
    url?: StringFilter<"ProductGallery"> | string
    productId?: IntFilter<"ProductGallery"> | number
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductGalleryOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    productId?: SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type ProductGalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductGalleryWhereInput | ProductGalleryWhereInput[]
    OR?: ProductGalleryWhereInput[]
    NOT?: ProductGalleryWhereInput | ProductGalleryWhereInput[]
    url?: StringFilter<"ProductGallery"> | string
    productId?: IntFilter<"ProductGallery"> | number
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id" | "id">

  export type ProductGalleryOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    productId?: SortOrder
    _count?: ProductGalleryCountOrderByAggregateInput
    _avg?: ProductGalleryAvgOrderByAggregateInput
    _max?: ProductGalleryMaxOrderByAggregateInput
    _min?: ProductGalleryMinOrderByAggregateInput
    _sum?: ProductGallerySumOrderByAggregateInput
  }

  export type ProductGalleryScalarWhereWithAggregatesInput = {
    AND?: ProductGalleryScalarWhereWithAggregatesInput | ProductGalleryScalarWhereWithAggregatesInput[]
    OR?: ProductGalleryScalarWhereWithAggregatesInput[]
    NOT?: ProductGalleryScalarWhereWithAggregatesInput | ProductGalleryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductGallery"> | number
    url?: StringWithAggregatesFilter<"ProductGallery"> | string
    productId?: IntWithAggregatesFilter<"ProductGallery"> | number
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    email?: StringNullableFilter<"Contact"> | string | null
    sujet?: StringNullableFilter<"Contact"> | string | null
    message?: StringNullableFilter<"Contact"> | string | null
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    sujet?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    email?: StringNullableFilter<"Contact"> | string | null
    sujet?: StringNullableFilter<"Contact"> | string | null
    message?: StringNullableFilter<"Contact"> | string | null
  }, "id" | "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    sujet?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    sujet?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    message?: StringNullableWithAggregatesFilter<"Contact"> | string | null
  }

  export type CheckoutMethodWhereInput = {
    AND?: CheckoutMethodWhereInput | CheckoutMethodWhereInput[]
    OR?: CheckoutMethodWhereInput[]
    NOT?: CheckoutMethodWhereInput | CheckoutMethodWhereInput[]
    id?: IntFilter<"CheckoutMethod"> | number
    userId?: IntFilter<"CheckoutMethod"> | number
    cardType?: StringFilter<"CheckoutMethod"> | string
    cardHolderName?: StringFilter<"CheckoutMethod"> | string
    cardNumber?: StringFilter<"CheckoutMethod"> | string
    expirationDate?: DateTimeFilter<"CheckoutMethod"> | Date | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
  }

  export type CheckoutMethodOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardType?: SortOrder
    cardHolderName?: SortOrder
    cardNumber?: SortOrder
    expirationDate?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type CheckoutMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_cardNumber?: CheckoutMethodUserIdCardNumberCompoundUniqueInput
    AND?: CheckoutMethodWhereInput | CheckoutMethodWhereInput[]
    OR?: CheckoutMethodWhereInput[]
    NOT?: CheckoutMethodWhereInput | CheckoutMethodWhereInput[]
    userId?: IntFilter<"CheckoutMethod"> | number
    cardType?: StringFilter<"CheckoutMethod"> | string
    cardHolderName?: StringFilter<"CheckoutMethod"> | string
    cardNumber?: StringFilter<"CheckoutMethod"> | string
    expirationDate?: DateTimeFilter<"CheckoutMethod"> | Date | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
  }, "id" | "id" | "userId_cardNumber">

  export type CheckoutMethodOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardType?: SortOrder
    cardHolderName?: SortOrder
    cardNumber?: SortOrder
    expirationDate?: SortOrder
    _count?: CheckoutMethodCountOrderByAggregateInput
    _avg?: CheckoutMethodAvgOrderByAggregateInput
    _max?: CheckoutMethodMaxOrderByAggregateInput
    _min?: CheckoutMethodMinOrderByAggregateInput
    _sum?: CheckoutMethodSumOrderByAggregateInput
  }

  export type CheckoutMethodScalarWhereWithAggregatesInput = {
    AND?: CheckoutMethodScalarWhereWithAggregatesInput | CheckoutMethodScalarWhereWithAggregatesInput[]
    OR?: CheckoutMethodScalarWhereWithAggregatesInput[]
    NOT?: CheckoutMethodScalarWhereWithAggregatesInput | CheckoutMethodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CheckoutMethod"> | number
    userId?: IntWithAggregatesFilter<"CheckoutMethod"> | number
    cardType?: StringWithAggregatesFilter<"CheckoutMethod"> | string
    cardHolderName?: StringWithAggregatesFilter<"CheckoutMethod"> | string
    cardNumber?: StringWithAggregatesFilter<"CheckoutMethod"> | string
    expirationDate?: DateTimeWithAggregatesFilter<"CheckoutMethod"> | Date | string
  }

  export type ArticleOrderCreateInput = {
    quantity?: number | null
    price?: number | null
    order?: OrderCreateNestedOneWithoutArticleOrderInput
    product?: ProductCreateNestedOneWithoutArticleOrderInput
  }

  export type ArticleOrderUncheckedCreateInput = {
    id?: number
    orderId?: number | null
    productId?: number | null
    quantity?: number | null
    price?: number | null
  }

  export type ArticleOrderUpdateInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    order?: OrderUpdateOneWithoutArticleOrderNestedInput
    product?: ProductUpdateOneWithoutArticleOrderNestedInput
  }

  export type ArticleOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArticleOrderCreateManyInput = {
    id?: number
    orderId?: number | null
    productId?: number | null
    quantity?: number | null
    price?: number | null
  }

  export type ArticleOrderUpdateManyMutationInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArticleOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryCreateInput = {
    label?: string | null
    thumbnail?: string | null
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    label?: string | null
    thumbnail?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    label?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    label?: string | null
    thumbnail?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    label?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientCreateInput = {
    email?: string | null
    password?: string | null
    address?: string | null
    city?: string | null
    createdAt?: Date | string | null
    lastName?: string | null
    firstName?: string | null
    role?: string
    orders?: OrderCreateNestedManyWithoutClientInput
    checkoutMethods?: CheckoutMethodCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    email?: string | null
    password?: string | null
    address?: string | null
    city?: string | null
    createdAt?: Date | string | null
    lastName?: string | null
    firstName?: string | null
    role?: string
    orders?: OrderUncheckedCreateNestedManyWithoutClientInput
    checkoutMethods?: CheckoutMethodUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutClientNestedInput
    checkoutMethods?: CheckoutMethodUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutClientNestedInput
    checkoutMethods?: CheckoutMethodUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    email?: string | null
    password?: string | null
    address?: string | null
    city?: string | null
    createdAt?: Date | string | null
    lastName?: string | null
    firstName?: string | null
    role?: string
  }

  export type ClientUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    status?: string | null
    createdAt?: Date | string | null
    orderDate?: Date | string | null
    client?: ClientCreateNestedOneWithoutOrdersInput
    ArticleOrder?: ArticleOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    clientId?: number | null
    status?: string | null
    createdAt?: Date | string | null
    orderDate?: Date | string | null
    ArticleOrder?: ArticleOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneWithoutOrdersNestedInput
    ArticleOrder?: ArticleOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ArticleOrder?: ArticleOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    clientId?: number | null
    status?: string | null
    createdAt?: Date | string | null
    orderDate?: Date | string | null
  }

  export type OrderUpdateManyMutationInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaterialCreateInput = {
    label?: string | null
    products?: ProductCreateNestedManyWithoutMaterialsInput
    ProductMaterials?: ProductMaterialsCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: number
    label?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutMaterialsInput
    ProductMaterials?: ProductMaterialsUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    label?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutMaterialsNestedInput
    ProductMaterials?: ProductMaterialsUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutMaterialsNestedInput
    ProductMaterials?: ProductMaterialsUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: number
    label?: string | null
  }

  export type MaterialUpdateManyMutationInput = {
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateInput = {
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    thumbnail?: string | null
    Category?: CategoryCreateNestedOneWithoutProductsInput
    materials?: MaterialCreateNestedManyWithoutProductsInput
    ArticleOrder?: ArticleOrderCreateNestedManyWithoutProductInput
    images?: ProductGalleryCreateNestedManyWithoutProductInput
    ProductMaterials?: ProductMaterialsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    categoryId?: number | null
    thumbnail?: string | null
    materials?: MaterialUncheckedCreateNestedManyWithoutProductsInput
    ArticleOrder?: ArticleOrderUncheckedCreateNestedManyWithoutProductInput
    images?: ProductGalleryUncheckedCreateNestedManyWithoutProductInput
    ProductMaterials?: ProductMaterialsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoryUpdateOneWithoutProductsNestedInput
    materials?: MaterialUpdateManyWithoutProductsNestedInput
    ArticleOrder?: ArticleOrderUpdateManyWithoutProductNestedInput
    images?: ProductGalleryUpdateManyWithoutProductNestedInput
    ProductMaterials?: ProductMaterialsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: MaterialUncheckedUpdateManyWithoutProductsNestedInput
    ArticleOrder?: ArticleOrderUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductGalleryUncheckedUpdateManyWithoutProductNestedInput
    ProductMaterials?: ProductMaterialsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    categoryId?: number | null
    thumbnail?: string | null
  }

  export type ProductUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductMaterialsCreateInput = {
    Product: ProductCreateNestedOneWithoutProductMaterialsInput
    Material: MaterialCreateNestedOneWithoutProductMaterialsInput
  }

  export type ProductMaterialsUncheckedCreateInput = {
    productId: number
    materialId: number
  }

  export type ProductMaterialsUpdateInput = {
    Product?: ProductUpdateOneRequiredWithoutProductMaterialsNestedInput
    Material?: MaterialUpdateOneRequiredWithoutProductMaterialsNestedInput
  }

  export type ProductMaterialsUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductMaterialsCreateManyInput = {
    productId: number
    materialId: number
  }

  export type ProductMaterialsUpdateManyMutationInput = {

  }

  export type ProductMaterialsUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductGalleryCreateInput = {
    url: string
    Product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ProductGalleryUncheckedCreateInput = {
    id?: number
    url: string
    productId: number
  }

  export type ProductGalleryUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    Product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ProductGalleryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductGalleryCreateManyInput = {
    id?: number
    url: string
    productId: number
  }

  export type ProductGalleryUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductGalleryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactCreateInput = {
    email?: string | null
    sujet?: string | null
    message?: string | null
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    email?: string | null
    sujet?: string | null
    message?: string | null
  }

  export type ContactUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sujet?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sujet?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactCreateManyInput = {
    id?: number
    email?: string | null
    sujet?: string | null
    message?: string | null
  }

  export type ContactUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sujet?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sujet?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckoutMethodCreateInput = {
    cardType: string
    cardHolderName: string
    cardNumber: string
    expirationDate: Date | string
    client: ClientCreateNestedOneWithoutCheckoutMethodsInput
  }

  export type CheckoutMethodUncheckedCreateInput = {
    id?: number
    userId: number
    cardType: string
    cardHolderName: string
    cardNumber: string
    expirationDate: Date | string
  }

  export type CheckoutMethodUpdateInput = {
    cardType?: StringFieldUpdateOperationsInput | string
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutCheckoutMethodsNestedInput
  }

  export type CheckoutMethodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cardType?: StringFieldUpdateOperationsInput | string
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutMethodCreateManyInput = {
    id?: number
    userId: number
    cardType: string
    cardHolderName: string
    cardNumber: string
    expirationDate: Date | string
  }

  export type CheckoutMethodUpdateManyMutationInput = {
    cardType?: StringFieldUpdateOperationsInput | string
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutMethodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cardType?: StringFieldUpdateOperationsInput | string
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type OrderNullableRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type ProductNullableRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArticleOrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type ArticleOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type ArticleOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type ArticleOrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type ArticleOrderSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    thumbnail?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    thumbnail?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    thumbnail?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type CheckoutMethodListRelationFilter = {
    every?: CheckoutMethodWhereInput
    some?: CheckoutMethodWhereInput
    none?: CheckoutMethodWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckoutMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    role?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    role?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    role?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ClientNullableRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type ArticleOrderListRelationFilter = {
    every?: ArticleOrderWhereInput
    some?: ArticleOrderWhereInput
    none?: ArticleOrderWhereInput
  }

  export type ArticleOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    orderDate?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    orderDate?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    orderDate?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type ProductMaterialsListRelationFilter = {
    every?: ProductMaterialsWhereInput
    some?: ProductMaterialsWhereInput
    none?: ProductMaterialsWhereInput
  }

  export type ProductMaterialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type MaterialListRelationFilter = {
    every?: MaterialWhereInput
    some?: MaterialWhereInput
    none?: MaterialWhereInput
  }

  export type ProductGalleryListRelationFilter = {
    every?: ProductGalleryWhereInput
    some?: ProductGalleryWhereInput
    none?: ProductGalleryWhereInput
  }

  export type MaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductGalleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    thumbnail?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    thumbnail?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    thumbnail?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type MaterialRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type ProductMaterialsProductIdMaterialIdCompoundUniqueInput = {
    productId: number
    materialId: number
  }

  export type ProductMaterialsCountOrderByAggregateInput = {
    productId?: SortOrder
    materialId?: SortOrder
  }

  export type ProductMaterialsAvgOrderByAggregateInput = {
    productId?: SortOrder
    materialId?: SortOrder
  }

  export type ProductMaterialsMaxOrderByAggregateInput = {
    productId?: SortOrder
    materialId?: SortOrder
  }

  export type ProductMaterialsMinOrderByAggregateInput = {
    productId?: SortOrder
    materialId?: SortOrder
  }

  export type ProductMaterialsSumOrderByAggregateInput = {
    productId?: SortOrder
    materialId?: SortOrder
  }

  export type ProductGalleryCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type ProductGalleryAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductGalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type ProductGalleryMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    productId?: SortOrder
  }

  export type ProductGallerySumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sujet?: SortOrder
    message?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sujet?: SortOrder
    message?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sujet?: SortOrder
    message?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ClientRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type CheckoutMethodUserIdCardNumberCompoundUniqueInput = {
    userId: number
    cardNumber: string
  }

  export type CheckoutMethodCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardType?: SortOrder
    cardHolderName?: SortOrder
    cardNumber?: SortOrder
    expirationDate?: SortOrder
  }

  export type CheckoutMethodAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CheckoutMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardType?: SortOrder
    cardHolderName?: SortOrder
    cardNumber?: SortOrder
    expirationDate?: SortOrder
  }

  export type CheckoutMethodMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardType?: SortOrder
    cardHolderName?: SortOrder
    cardNumber?: SortOrder
    expirationDate?: SortOrder
  }

  export type CheckoutMethodSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type OrderCreateNestedOneWithoutArticleOrderInput = {
    create?: XOR<OrderCreateWithoutArticleOrderInput, OrderUncheckedCreateWithoutArticleOrderInput>
    connectOrCreate?: OrderCreateOrConnectWithoutArticleOrderInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutArticleOrderInput = {
    create?: XOR<ProductCreateWithoutArticleOrderInput, ProductUncheckedCreateWithoutArticleOrderInput>
    connectOrCreate?: ProductCreateOrConnectWithoutArticleOrderInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateOneWithoutArticleOrderNestedInput = {
    create?: XOR<OrderCreateWithoutArticleOrderInput, OrderUncheckedCreateWithoutArticleOrderInput>
    connectOrCreate?: OrderCreateOrConnectWithoutArticleOrderInput
    upsert?: OrderUpsertWithoutArticleOrderInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutArticleOrderInput, OrderUpdateWithoutArticleOrderInput>, OrderUncheckedUpdateWithoutArticleOrderInput>
  }

  export type ProductUpdateOneWithoutArticleOrderNestedInput = {
    create?: XOR<ProductCreateWithoutArticleOrderInput, ProductUncheckedCreateWithoutArticleOrderInput>
    connectOrCreate?: ProductCreateOrConnectWithoutArticleOrderInput
    upsert?: ProductUpsertWithoutArticleOrderInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutArticleOrderInput, ProductUpdateWithoutArticleOrderInput>, ProductUncheckedUpdateWithoutArticleOrderInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutClientInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CheckoutMethodCreateNestedManyWithoutClientInput = {
    create?: XOR<CheckoutMethodCreateWithoutClientInput, CheckoutMethodUncheckedCreateWithoutClientInput> | CheckoutMethodCreateWithoutClientInput[] | CheckoutMethodUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CheckoutMethodCreateOrConnectWithoutClientInput | CheckoutMethodCreateOrConnectWithoutClientInput[]
    createMany?: CheckoutMethodCreateManyClientInputEnvelope
    connect?: CheckoutMethodWhereUniqueInput | CheckoutMethodWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CheckoutMethodUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CheckoutMethodCreateWithoutClientInput, CheckoutMethodUncheckedCreateWithoutClientInput> | CheckoutMethodCreateWithoutClientInput[] | CheckoutMethodUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CheckoutMethodCreateOrConnectWithoutClientInput | CheckoutMethodCreateOrConnectWithoutClientInput[]
    createMany?: CheckoutMethodCreateManyClientInputEnvelope
    connect?: CheckoutMethodWhereUniqueInput | CheckoutMethodWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type OrderUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClientInput | OrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClientInput | OrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClientInput | OrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CheckoutMethodUpdateManyWithoutClientNestedInput = {
    create?: XOR<CheckoutMethodCreateWithoutClientInput, CheckoutMethodUncheckedCreateWithoutClientInput> | CheckoutMethodCreateWithoutClientInput[] | CheckoutMethodUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CheckoutMethodCreateOrConnectWithoutClientInput | CheckoutMethodCreateOrConnectWithoutClientInput[]
    upsert?: CheckoutMethodUpsertWithWhereUniqueWithoutClientInput | CheckoutMethodUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CheckoutMethodCreateManyClientInputEnvelope
    set?: CheckoutMethodWhereUniqueInput | CheckoutMethodWhereUniqueInput[]
    disconnect?: CheckoutMethodWhereUniqueInput | CheckoutMethodWhereUniqueInput[]
    delete?: CheckoutMethodWhereUniqueInput | CheckoutMethodWhereUniqueInput[]
    connect?: CheckoutMethodWhereUniqueInput | CheckoutMethodWhereUniqueInput[]
    update?: CheckoutMethodUpdateWithWhereUniqueWithoutClientInput | CheckoutMethodUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CheckoutMethodUpdateManyWithWhereWithoutClientInput | CheckoutMethodUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CheckoutMethodScalarWhereInput | CheckoutMethodScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClientInput | OrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClientInput | OrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClientInput | OrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CheckoutMethodUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CheckoutMethodCreateWithoutClientInput, CheckoutMethodUncheckedCreateWithoutClientInput> | CheckoutMethodCreateWithoutClientInput[] | CheckoutMethodUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CheckoutMethodCreateOrConnectWithoutClientInput | CheckoutMethodCreateOrConnectWithoutClientInput[]
    upsert?: CheckoutMethodUpsertWithWhereUniqueWithoutClientInput | CheckoutMethodUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CheckoutMethodCreateManyClientInputEnvelope
    set?: CheckoutMethodWhereUniqueInput | CheckoutMethodWhereUniqueInput[]
    disconnect?: CheckoutMethodWhereUniqueInput | CheckoutMethodWhereUniqueInput[]
    delete?: CheckoutMethodWhereUniqueInput | CheckoutMethodWhereUniqueInput[]
    connect?: CheckoutMethodWhereUniqueInput | CheckoutMethodWhereUniqueInput[]
    update?: CheckoutMethodUpdateWithWhereUniqueWithoutClientInput | CheckoutMethodUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CheckoutMethodUpdateManyWithWhereWithoutClientInput | CheckoutMethodUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CheckoutMethodScalarWhereInput | CheckoutMethodScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOrdersInput
    connect?: ClientWhereUniqueInput
  }

  export type ArticleOrderCreateNestedManyWithoutOrderInput = {
    create?: XOR<ArticleOrderCreateWithoutOrderInput, ArticleOrderUncheckedCreateWithoutOrderInput> | ArticleOrderCreateWithoutOrderInput[] | ArticleOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ArticleOrderCreateOrConnectWithoutOrderInput | ArticleOrderCreateOrConnectWithoutOrderInput[]
    createMany?: ArticleOrderCreateManyOrderInputEnvelope
    connect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
  }

  export type ArticleOrderUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ArticleOrderCreateWithoutOrderInput, ArticleOrderUncheckedCreateWithoutOrderInput> | ArticleOrderCreateWithoutOrderInput[] | ArticleOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ArticleOrderCreateOrConnectWithoutOrderInput | ArticleOrderCreateOrConnectWithoutOrderInput[]
    createMany?: ArticleOrderCreateManyOrderInputEnvelope
    connect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
  }

  export type ClientUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOrdersInput
    upsert?: ClientUpsertWithoutOrdersInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutOrdersInput, ClientUpdateWithoutOrdersInput>, ClientUncheckedUpdateWithoutOrdersInput>
  }

  export type ArticleOrderUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ArticleOrderCreateWithoutOrderInput, ArticleOrderUncheckedCreateWithoutOrderInput> | ArticleOrderCreateWithoutOrderInput[] | ArticleOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ArticleOrderCreateOrConnectWithoutOrderInput | ArticleOrderCreateOrConnectWithoutOrderInput[]
    upsert?: ArticleOrderUpsertWithWhereUniqueWithoutOrderInput | ArticleOrderUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ArticleOrderCreateManyOrderInputEnvelope
    set?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    disconnect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    delete?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    connect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    update?: ArticleOrderUpdateWithWhereUniqueWithoutOrderInput | ArticleOrderUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ArticleOrderUpdateManyWithWhereWithoutOrderInput | ArticleOrderUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ArticleOrderScalarWhereInput | ArticleOrderScalarWhereInput[]
  }

  export type ArticleOrderUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ArticleOrderCreateWithoutOrderInput, ArticleOrderUncheckedCreateWithoutOrderInput> | ArticleOrderCreateWithoutOrderInput[] | ArticleOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ArticleOrderCreateOrConnectWithoutOrderInput | ArticleOrderCreateOrConnectWithoutOrderInput[]
    upsert?: ArticleOrderUpsertWithWhereUniqueWithoutOrderInput | ArticleOrderUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ArticleOrderCreateManyOrderInputEnvelope
    set?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    disconnect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    delete?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    connect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    update?: ArticleOrderUpdateWithWhereUniqueWithoutOrderInput | ArticleOrderUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ArticleOrderUpdateManyWithWhereWithoutOrderInput | ArticleOrderUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ArticleOrderScalarWhereInput | ArticleOrderScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutMaterialsInput = {
    create?: XOR<ProductCreateWithoutMaterialsInput, ProductUncheckedCreateWithoutMaterialsInput> | ProductCreateWithoutMaterialsInput[] | ProductUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMaterialsInput | ProductCreateOrConnectWithoutMaterialsInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductMaterialsCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProductMaterialsCreateWithoutMaterialInput, ProductMaterialsUncheckedCreateWithoutMaterialInput> | ProductMaterialsCreateWithoutMaterialInput[] | ProductMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductMaterialsCreateOrConnectWithoutMaterialInput | ProductMaterialsCreateOrConnectWithoutMaterialInput[]
    createMany?: ProductMaterialsCreateManyMaterialInputEnvelope
    connect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutMaterialsInput = {
    create?: XOR<ProductCreateWithoutMaterialsInput, ProductUncheckedCreateWithoutMaterialsInput> | ProductCreateWithoutMaterialsInput[] | ProductUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMaterialsInput | ProductCreateOrConnectWithoutMaterialsInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductMaterialsUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProductMaterialsCreateWithoutMaterialInput, ProductMaterialsUncheckedCreateWithoutMaterialInput> | ProductMaterialsCreateWithoutMaterialInput[] | ProductMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductMaterialsCreateOrConnectWithoutMaterialInput | ProductMaterialsCreateOrConnectWithoutMaterialInput[]
    createMany?: ProductMaterialsCreateManyMaterialInputEnvelope
    connect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutMaterialsNestedInput = {
    create?: XOR<ProductCreateWithoutMaterialsInput, ProductUncheckedCreateWithoutMaterialsInput> | ProductCreateWithoutMaterialsInput[] | ProductUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMaterialsInput | ProductCreateOrConnectWithoutMaterialsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutMaterialsInput | ProductUpsertWithWhereUniqueWithoutMaterialsInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutMaterialsInput | ProductUpdateWithWhereUniqueWithoutMaterialsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutMaterialsInput | ProductUpdateManyWithWhereWithoutMaterialsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductMaterialsUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProductMaterialsCreateWithoutMaterialInput, ProductMaterialsUncheckedCreateWithoutMaterialInput> | ProductMaterialsCreateWithoutMaterialInput[] | ProductMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductMaterialsCreateOrConnectWithoutMaterialInput | ProductMaterialsCreateOrConnectWithoutMaterialInput[]
    upsert?: ProductMaterialsUpsertWithWhereUniqueWithoutMaterialInput | ProductMaterialsUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProductMaterialsCreateManyMaterialInputEnvelope
    set?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    disconnect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    delete?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    connect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    update?: ProductMaterialsUpdateWithWhereUniqueWithoutMaterialInput | ProductMaterialsUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProductMaterialsUpdateManyWithWhereWithoutMaterialInput | ProductMaterialsUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProductMaterialsScalarWhereInput | ProductMaterialsScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutMaterialsNestedInput = {
    create?: XOR<ProductCreateWithoutMaterialsInput, ProductUncheckedCreateWithoutMaterialsInput> | ProductCreateWithoutMaterialsInput[] | ProductUncheckedCreateWithoutMaterialsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMaterialsInput | ProductCreateOrConnectWithoutMaterialsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutMaterialsInput | ProductUpsertWithWhereUniqueWithoutMaterialsInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutMaterialsInput | ProductUpdateWithWhereUniqueWithoutMaterialsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutMaterialsInput | ProductUpdateManyWithWhereWithoutMaterialsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductMaterialsUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProductMaterialsCreateWithoutMaterialInput, ProductMaterialsUncheckedCreateWithoutMaterialInput> | ProductMaterialsCreateWithoutMaterialInput[] | ProductMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductMaterialsCreateOrConnectWithoutMaterialInput | ProductMaterialsCreateOrConnectWithoutMaterialInput[]
    upsert?: ProductMaterialsUpsertWithWhereUniqueWithoutMaterialInput | ProductMaterialsUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProductMaterialsCreateManyMaterialInputEnvelope
    set?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    disconnect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    delete?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    connect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    update?: ProductMaterialsUpdateWithWhereUniqueWithoutMaterialInput | ProductMaterialsUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProductMaterialsUpdateManyWithWhereWithoutMaterialInput | ProductMaterialsUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProductMaterialsScalarWhereInput | ProductMaterialsScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type MaterialCreateNestedManyWithoutProductsInput = {
    create?: XOR<MaterialCreateWithoutProductsInput, MaterialUncheckedCreateWithoutProductsInput> | MaterialCreateWithoutProductsInput[] | MaterialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProductsInput | MaterialCreateOrConnectWithoutProductsInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type ArticleOrderCreateNestedManyWithoutProductInput = {
    create?: XOR<ArticleOrderCreateWithoutProductInput, ArticleOrderUncheckedCreateWithoutProductInput> | ArticleOrderCreateWithoutProductInput[] | ArticleOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ArticleOrderCreateOrConnectWithoutProductInput | ArticleOrderCreateOrConnectWithoutProductInput[]
    createMany?: ArticleOrderCreateManyProductInputEnvelope
    connect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
  }

  export type ProductGalleryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput> | ProductGalleryCreateWithoutProductInput[] | ProductGalleryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutProductInput | ProductGalleryCreateOrConnectWithoutProductInput[]
    createMany?: ProductGalleryCreateManyProductInputEnvelope
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
  }

  export type ProductMaterialsCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductMaterialsCreateWithoutProductInput, ProductMaterialsUncheckedCreateWithoutProductInput> | ProductMaterialsCreateWithoutProductInput[] | ProductMaterialsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMaterialsCreateOrConnectWithoutProductInput | ProductMaterialsCreateOrConnectWithoutProductInput[]
    createMany?: ProductMaterialsCreateManyProductInputEnvelope
    connect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<MaterialCreateWithoutProductsInput, MaterialUncheckedCreateWithoutProductsInput> | MaterialCreateWithoutProductsInput[] | MaterialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProductsInput | MaterialCreateOrConnectWithoutProductsInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type ArticleOrderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ArticleOrderCreateWithoutProductInput, ArticleOrderUncheckedCreateWithoutProductInput> | ArticleOrderCreateWithoutProductInput[] | ArticleOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ArticleOrderCreateOrConnectWithoutProductInput | ArticleOrderCreateOrConnectWithoutProductInput[]
    createMany?: ArticleOrderCreateManyProductInputEnvelope
    connect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
  }

  export type ProductGalleryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput> | ProductGalleryCreateWithoutProductInput[] | ProductGalleryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutProductInput | ProductGalleryCreateOrConnectWithoutProductInput[]
    createMany?: ProductGalleryCreateManyProductInputEnvelope
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
  }

  export type ProductMaterialsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductMaterialsCreateWithoutProductInput, ProductMaterialsUncheckedCreateWithoutProductInput> | ProductMaterialsCreateWithoutProductInput[] | ProductMaterialsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMaterialsCreateOrConnectWithoutProductInput | ProductMaterialsCreateOrConnectWithoutProductInput[]
    createMany?: ProductMaterialsCreateManyProductInputEnvelope
    connect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type MaterialUpdateManyWithoutProductsNestedInput = {
    create?: XOR<MaterialCreateWithoutProductsInput, MaterialUncheckedCreateWithoutProductsInput> | MaterialCreateWithoutProductsInput[] | MaterialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProductsInput | MaterialCreateOrConnectWithoutProductsInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutProductsInput | MaterialUpsertWithWhereUniqueWithoutProductsInput[]
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutProductsInput | MaterialUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutProductsInput | MaterialUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type ArticleOrderUpdateManyWithoutProductNestedInput = {
    create?: XOR<ArticleOrderCreateWithoutProductInput, ArticleOrderUncheckedCreateWithoutProductInput> | ArticleOrderCreateWithoutProductInput[] | ArticleOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ArticleOrderCreateOrConnectWithoutProductInput | ArticleOrderCreateOrConnectWithoutProductInput[]
    upsert?: ArticleOrderUpsertWithWhereUniqueWithoutProductInput | ArticleOrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ArticleOrderCreateManyProductInputEnvelope
    set?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    disconnect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    delete?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    connect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    update?: ArticleOrderUpdateWithWhereUniqueWithoutProductInput | ArticleOrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ArticleOrderUpdateManyWithWhereWithoutProductInput | ArticleOrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ArticleOrderScalarWhereInput | ArticleOrderScalarWhereInput[]
  }

  export type ProductGalleryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput> | ProductGalleryCreateWithoutProductInput[] | ProductGalleryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutProductInput | ProductGalleryCreateOrConnectWithoutProductInput[]
    upsert?: ProductGalleryUpsertWithWhereUniqueWithoutProductInput | ProductGalleryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductGalleryCreateManyProductInputEnvelope
    set?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    disconnect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    delete?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    update?: ProductGalleryUpdateWithWhereUniqueWithoutProductInput | ProductGalleryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductGalleryUpdateManyWithWhereWithoutProductInput | ProductGalleryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductGalleryScalarWhereInput | ProductGalleryScalarWhereInput[]
  }

  export type ProductMaterialsUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductMaterialsCreateWithoutProductInput, ProductMaterialsUncheckedCreateWithoutProductInput> | ProductMaterialsCreateWithoutProductInput[] | ProductMaterialsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMaterialsCreateOrConnectWithoutProductInput | ProductMaterialsCreateOrConnectWithoutProductInput[]
    upsert?: ProductMaterialsUpsertWithWhereUniqueWithoutProductInput | ProductMaterialsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductMaterialsCreateManyProductInputEnvelope
    set?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    disconnect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    delete?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    connect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    update?: ProductMaterialsUpdateWithWhereUniqueWithoutProductInput | ProductMaterialsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductMaterialsUpdateManyWithWhereWithoutProductInput | ProductMaterialsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductMaterialsScalarWhereInput | ProductMaterialsScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<MaterialCreateWithoutProductsInput, MaterialUncheckedCreateWithoutProductsInput> | MaterialCreateWithoutProductsInput[] | MaterialUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutProductsInput | MaterialCreateOrConnectWithoutProductsInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutProductsInput | MaterialUpsertWithWhereUniqueWithoutProductsInput[]
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutProductsInput | MaterialUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutProductsInput | MaterialUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type ArticleOrderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ArticleOrderCreateWithoutProductInput, ArticleOrderUncheckedCreateWithoutProductInput> | ArticleOrderCreateWithoutProductInput[] | ArticleOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ArticleOrderCreateOrConnectWithoutProductInput | ArticleOrderCreateOrConnectWithoutProductInput[]
    upsert?: ArticleOrderUpsertWithWhereUniqueWithoutProductInput | ArticleOrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ArticleOrderCreateManyProductInputEnvelope
    set?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    disconnect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    delete?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    connect?: ArticleOrderWhereUniqueInput | ArticleOrderWhereUniqueInput[]
    update?: ArticleOrderUpdateWithWhereUniqueWithoutProductInput | ArticleOrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ArticleOrderUpdateManyWithWhereWithoutProductInput | ArticleOrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ArticleOrderScalarWhereInput | ArticleOrderScalarWhereInput[]
  }

  export type ProductGalleryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput> | ProductGalleryCreateWithoutProductInput[] | ProductGalleryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductGalleryCreateOrConnectWithoutProductInput | ProductGalleryCreateOrConnectWithoutProductInput[]
    upsert?: ProductGalleryUpsertWithWhereUniqueWithoutProductInput | ProductGalleryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductGalleryCreateManyProductInputEnvelope
    set?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    disconnect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    delete?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    connect?: ProductGalleryWhereUniqueInput | ProductGalleryWhereUniqueInput[]
    update?: ProductGalleryUpdateWithWhereUniqueWithoutProductInput | ProductGalleryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductGalleryUpdateManyWithWhereWithoutProductInput | ProductGalleryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductGalleryScalarWhereInput | ProductGalleryScalarWhereInput[]
  }

  export type ProductMaterialsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductMaterialsCreateWithoutProductInput, ProductMaterialsUncheckedCreateWithoutProductInput> | ProductMaterialsCreateWithoutProductInput[] | ProductMaterialsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMaterialsCreateOrConnectWithoutProductInput | ProductMaterialsCreateOrConnectWithoutProductInput[]
    upsert?: ProductMaterialsUpsertWithWhereUniqueWithoutProductInput | ProductMaterialsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductMaterialsCreateManyProductInputEnvelope
    set?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    disconnect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    delete?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    connect?: ProductMaterialsWhereUniqueInput | ProductMaterialsWhereUniqueInput[]
    update?: ProductMaterialsUpdateWithWhereUniqueWithoutProductInput | ProductMaterialsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductMaterialsUpdateManyWithWhereWithoutProductInput | ProductMaterialsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductMaterialsScalarWhereInput | ProductMaterialsScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductMaterialsInput = {
    create?: XOR<ProductCreateWithoutProductMaterialsInput, ProductUncheckedCreateWithoutProductMaterialsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductMaterialsInput
    connect?: ProductWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutProductMaterialsInput = {
    create?: XOR<MaterialCreateWithoutProductMaterialsInput, MaterialUncheckedCreateWithoutProductMaterialsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProductMaterialsInput
    connect?: MaterialWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductMaterialsNestedInput = {
    create?: XOR<ProductCreateWithoutProductMaterialsInput, ProductUncheckedCreateWithoutProductMaterialsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductMaterialsInput
    upsert?: ProductUpsertWithoutProductMaterialsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductMaterialsInput, ProductUpdateWithoutProductMaterialsInput>, ProductUncheckedUpdateWithoutProductMaterialsInput>
  }

  export type MaterialUpdateOneRequiredWithoutProductMaterialsNestedInput = {
    create?: XOR<MaterialCreateWithoutProductMaterialsInput, MaterialUncheckedCreateWithoutProductMaterialsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutProductMaterialsInput
    upsert?: MaterialUpsertWithoutProductMaterialsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutProductMaterialsInput, MaterialUpdateWithoutProductMaterialsInput>, MaterialUncheckedUpdateWithoutProductMaterialsInput>
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ClientCreateNestedOneWithoutCheckoutMethodsInput = {
    create?: XOR<ClientCreateWithoutCheckoutMethodsInput, ClientUncheckedCreateWithoutCheckoutMethodsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCheckoutMethodsInput
    connect?: ClientWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateOneRequiredWithoutCheckoutMethodsNestedInput = {
    create?: XOR<ClientCreateWithoutCheckoutMethodsInput, ClientUncheckedCreateWithoutCheckoutMethodsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCheckoutMethodsInput
    upsert?: ClientUpsertWithoutCheckoutMethodsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutCheckoutMethodsInput, ClientUpdateWithoutCheckoutMethodsInput>, ClientUncheckedUpdateWithoutCheckoutMethodsInput>
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

  export type OrderCreateWithoutArticleOrderInput = {
    status?: string | null
    createdAt?: Date | string | null
    orderDate?: Date | string | null
    client?: ClientCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutArticleOrderInput = {
    id?: number
    clientId?: number | null
    status?: string | null
    createdAt?: Date | string | null
    orderDate?: Date | string | null
  }

  export type OrderCreateOrConnectWithoutArticleOrderInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutArticleOrderInput, OrderUncheckedCreateWithoutArticleOrderInput>
  }

  export type ProductCreateWithoutArticleOrderInput = {
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    thumbnail?: string | null
    Category?: CategoryCreateNestedOneWithoutProductsInput
    materials?: MaterialCreateNestedManyWithoutProductsInput
    images?: ProductGalleryCreateNestedManyWithoutProductInput
    ProductMaterials?: ProductMaterialsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutArticleOrderInput = {
    id?: number
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    categoryId?: number | null
    thumbnail?: string | null
    materials?: MaterialUncheckedCreateNestedManyWithoutProductsInput
    images?: ProductGalleryUncheckedCreateNestedManyWithoutProductInput
    ProductMaterials?: ProductMaterialsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutArticleOrderInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutArticleOrderInput, ProductUncheckedCreateWithoutArticleOrderInput>
  }

  export type OrderUpsertWithoutArticleOrderInput = {
    update: XOR<OrderUpdateWithoutArticleOrderInput, OrderUncheckedUpdateWithoutArticleOrderInput>
    create: XOR<OrderCreateWithoutArticleOrderInput, OrderUncheckedCreateWithoutArticleOrderInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutArticleOrderInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutArticleOrderInput, OrderUncheckedUpdateWithoutArticleOrderInput>
  }

  export type OrderUpdateWithoutArticleOrderInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutArticleOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpsertWithoutArticleOrderInput = {
    update: XOR<ProductUpdateWithoutArticleOrderInput, ProductUncheckedUpdateWithoutArticleOrderInput>
    create: XOR<ProductCreateWithoutArticleOrderInput, ProductUncheckedCreateWithoutArticleOrderInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutArticleOrderInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutArticleOrderInput, ProductUncheckedUpdateWithoutArticleOrderInput>
  }

  export type ProductUpdateWithoutArticleOrderInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoryUpdateOneWithoutProductsNestedInput
    materials?: MaterialUpdateManyWithoutProductsNestedInput
    images?: ProductGalleryUpdateManyWithoutProductNestedInput
    ProductMaterials?: ProductMaterialsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutArticleOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: MaterialUncheckedUpdateManyWithoutProductsNestedInput
    images?: ProductGalleryUncheckedUpdateManyWithoutProductNestedInput
    ProductMaterials?: ProductMaterialsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutCategoryInput = {
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    thumbnail?: string | null
    materials?: MaterialCreateNestedManyWithoutProductsInput
    ArticleOrder?: ArticleOrderCreateNestedManyWithoutProductInput
    images?: ProductGalleryCreateNestedManyWithoutProductInput
    ProductMaterials?: ProductMaterialsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    thumbnail?: string | null
    materials?: MaterialUncheckedCreateNestedManyWithoutProductsInput
    ArticleOrder?: ArticleOrderUncheckedCreateNestedManyWithoutProductInput
    images?: ProductGalleryUncheckedCreateNestedManyWithoutProductInput
    ProductMaterials?: ProductMaterialsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringNullableFilter<"Product"> | string | null
    price?: IntNullableFilter<"Product"> | number | null
    stock?: IntNullableFilter<"Product"> | number | null
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: IntNullableFilter<"Product"> | number | null
    thumbnail?: StringNullableFilter<"Product"> | string | null
  }

  export type OrderCreateWithoutClientInput = {
    status?: string | null
    createdAt?: Date | string | null
    orderDate?: Date | string | null
    ArticleOrder?: ArticleOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutClientInput = {
    id?: number
    status?: string | null
    createdAt?: Date | string | null
    orderDate?: Date | string | null
    ArticleOrder?: ArticleOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutClientInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput>
  }

  export type OrderCreateManyClientInputEnvelope = {
    data: OrderCreateManyClientInput | OrderCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type CheckoutMethodCreateWithoutClientInput = {
    cardType: string
    cardHolderName: string
    cardNumber: string
    expirationDate: Date | string
  }

  export type CheckoutMethodUncheckedCreateWithoutClientInput = {
    id?: number
    cardType: string
    cardHolderName: string
    cardNumber: string
    expirationDate: Date | string
  }

  export type CheckoutMethodCreateOrConnectWithoutClientInput = {
    where: CheckoutMethodWhereUniqueInput
    create: XOR<CheckoutMethodCreateWithoutClientInput, CheckoutMethodUncheckedCreateWithoutClientInput>
  }

  export type CheckoutMethodCreateManyClientInputEnvelope = {
    data: CheckoutMethodCreateManyClientInput | CheckoutMethodCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutClientInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutClientInput, OrderUncheckedUpdateWithoutClientInput>
    create: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutClientInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutClientInput, OrderUncheckedUpdateWithoutClientInput>
  }

  export type OrderUpdateManyWithWhereWithoutClientInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutClientInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    clientId?: IntNullableFilter<"Order"> | number | null
    status?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    orderDate?: DateTimeNullableFilter<"Order"> | Date | string | null
  }

  export type CheckoutMethodUpsertWithWhereUniqueWithoutClientInput = {
    where: CheckoutMethodWhereUniqueInput
    update: XOR<CheckoutMethodUpdateWithoutClientInput, CheckoutMethodUncheckedUpdateWithoutClientInput>
    create: XOR<CheckoutMethodCreateWithoutClientInput, CheckoutMethodUncheckedCreateWithoutClientInput>
  }

  export type CheckoutMethodUpdateWithWhereUniqueWithoutClientInput = {
    where: CheckoutMethodWhereUniqueInput
    data: XOR<CheckoutMethodUpdateWithoutClientInput, CheckoutMethodUncheckedUpdateWithoutClientInput>
  }

  export type CheckoutMethodUpdateManyWithWhereWithoutClientInput = {
    where: CheckoutMethodScalarWhereInput
    data: XOR<CheckoutMethodUpdateManyMutationInput, CheckoutMethodUncheckedUpdateManyWithoutClientInput>
  }

  export type CheckoutMethodScalarWhereInput = {
    AND?: CheckoutMethodScalarWhereInput | CheckoutMethodScalarWhereInput[]
    OR?: CheckoutMethodScalarWhereInput[]
    NOT?: CheckoutMethodScalarWhereInput | CheckoutMethodScalarWhereInput[]
    id?: IntFilter<"CheckoutMethod"> | number
    userId?: IntFilter<"CheckoutMethod"> | number
    cardType?: StringFilter<"CheckoutMethod"> | string
    cardHolderName?: StringFilter<"CheckoutMethod"> | string
    cardNumber?: StringFilter<"CheckoutMethod"> | string
    expirationDate?: DateTimeFilter<"CheckoutMethod"> | Date | string
  }

  export type ClientCreateWithoutOrdersInput = {
    email?: string | null
    password?: string | null
    address?: string | null
    city?: string | null
    createdAt?: Date | string | null
    lastName?: string | null
    firstName?: string | null
    role?: string
    checkoutMethods?: CheckoutMethodCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutOrdersInput = {
    id?: number
    email?: string | null
    password?: string | null
    address?: string | null
    city?: string | null
    createdAt?: Date | string | null
    lastName?: string | null
    firstName?: string | null
    role?: string
    checkoutMethods?: CheckoutMethodUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutOrdersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
  }

  export type ArticleOrderCreateWithoutOrderInput = {
    quantity?: number | null
    price?: number | null
    product?: ProductCreateNestedOneWithoutArticleOrderInput
  }

  export type ArticleOrderUncheckedCreateWithoutOrderInput = {
    id?: number
    productId?: number | null
    quantity?: number | null
    price?: number | null
  }

  export type ArticleOrderCreateOrConnectWithoutOrderInput = {
    where: ArticleOrderWhereUniqueInput
    create: XOR<ArticleOrderCreateWithoutOrderInput, ArticleOrderUncheckedCreateWithoutOrderInput>
  }

  export type ArticleOrderCreateManyOrderInputEnvelope = {
    data: ArticleOrderCreateManyOrderInput | ArticleOrderCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutOrdersInput = {
    update: XOR<ClientUpdateWithoutOrdersInput, ClientUncheckedUpdateWithoutOrdersInput>
    create: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutOrdersInput, ClientUncheckedUpdateWithoutOrdersInput>
  }

  export type ClientUpdateWithoutOrdersInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    checkoutMethods?: CheckoutMethodUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    checkoutMethods?: CheckoutMethodUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ArticleOrderUpsertWithWhereUniqueWithoutOrderInput = {
    where: ArticleOrderWhereUniqueInput
    update: XOR<ArticleOrderUpdateWithoutOrderInput, ArticleOrderUncheckedUpdateWithoutOrderInput>
    create: XOR<ArticleOrderCreateWithoutOrderInput, ArticleOrderUncheckedCreateWithoutOrderInput>
  }

  export type ArticleOrderUpdateWithWhereUniqueWithoutOrderInput = {
    where: ArticleOrderWhereUniqueInput
    data: XOR<ArticleOrderUpdateWithoutOrderInput, ArticleOrderUncheckedUpdateWithoutOrderInput>
  }

  export type ArticleOrderUpdateManyWithWhereWithoutOrderInput = {
    where: ArticleOrderScalarWhereInput
    data: XOR<ArticleOrderUpdateManyMutationInput, ArticleOrderUncheckedUpdateManyWithoutOrderInput>
  }

  export type ArticleOrderScalarWhereInput = {
    AND?: ArticleOrderScalarWhereInput | ArticleOrderScalarWhereInput[]
    OR?: ArticleOrderScalarWhereInput[]
    NOT?: ArticleOrderScalarWhereInput | ArticleOrderScalarWhereInput[]
    id?: IntFilter<"ArticleOrder"> | number
    orderId?: IntNullableFilter<"ArticleOrder"> | number | null
    productId?: IntNullableFilter<"ArticleOrder"> | number | null
    quantity?: IntNullableFilter<"ArticleOrder"> | number | null
    price?: IntNullableFilter<"ArticleOrder"> | number | null
  }

  export type ProductCreateWithoutMaterialsInput = {
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    thumbnail?: string | null
    Category?: CategoryCreateNestedOneWithoutProductsInput
    ArticleOrder?: ArticleOrderCreateNestedManyWithoutProductInput
    images?: ProductGalleryCreateNestedManyWithoutProductInput
    ProductMaterials?: ProductMaterialsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMaterialsInput = {
    id?: number
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    categoryId?: number | null
    thumbnail?: string | null
    ArticleOrder?: ArticleOrderUncheckedCreateNestedManyWithoutProductInput
    images?: ProductGalleryUncheckedCreateNestedManyWithoutProductInput
    ProductMaterials?: ProductMaterialsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMaterialsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMaterialsInput, ProductUncheckedCreateWithoutMaterialsInput>
  }

  export type ProductMaterialsCreateWithoutMaterialInput = {
    Product: ProductCreateNestedOneWithoutProductMaterialsInput
  }

  export type ProductMaterialsUncheckedCreateWithoutMaterialInput = {
    productId: number
  }

  export type ProductMaterialsCreateOrConnectWithoutMaterialInput = {
    where: ProductMaterialsWhereUniqueInput
    create: XOR<ProductMaterialsCreateWithoutMaterialInput, ProductMaterialsUncheckedCreateWithoutMaterialInput>
  }

  export type ProductMaterialsCreateManyMaterialInputEnvelope = {
    data: ProductMaterialsCreateManyMaterialInput | ProductMaterialsCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutMaterialsInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutMaterialsInput, ProductUncheckedUpdateWithoutMaterialsInput>
    create: XOR<ProductCreateWithoutMaterialsInput, ProductUncheckedCreateWithoutMaterialsInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutMaterialsInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutMaterialsInput, ProductUncheckedUpdateWithoutMaterialsInput>
  }

  export type ProductUpdateManyWithWhereWithoutMaterialsInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutMaterialsInput>
  }

  export type ProductMaterialsUpsertWithWhereUniqueWithoutMaterialInput = {
    where: ProductMaterialsWhereUniqueInput
    update: XOR<ProductMaterialsUpdateWithoutMaterialInput, ProductMaterialsUncheckedUpdateWithoutMaterialInput>
    create: XOR<ProductMaterialsCreateWithoutMaterialInput, ProductMaterialsUncheckedCreateWithoutMaterialInput>
  }

  export type ProductMaterialsUpdateWithWhereUniqueWithoutMaterialInput = {
    where: ProductMaterialsWhereUniqueInput
    data: XOR<ProductMaterialsUpdateWithoutMaterialInput, ProductMaterialsUncheckedUpdateWithoutMaterialInput>
  }

  export type ProductMaterialsUpdateManyWithWhereWithoutMaterialInput = {
    where: ProductMaterialsScalarWhereInput
    data: XOR<ProductMaterialsUpdateManyMutationInput, ProductMaterialsUncheckedUpdateManyWithoutMaterialInput>
  }

  export type ProductMaterialsScalarWhereInput = {
    AND?: ProductMaterialsScalarWhereInput | ProductMaterialsScalarWhereInput[]
    OR?: ProductMaterialsScalarWhereInput[]
    NOT?: ProductMaterialsScalarWhereInput | ProductMaterialsScalarWhereInput[]
    productId?: IntFilter<"ProductMaterials"> | number
    materialId?: IntFilter<"ProductMaterials"> | number
  }

  export type CategoryCreateWithoutProductsInput = {
    label?: string | null
    thumbnail?: string | null
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    label?: string | null
    thumbnail?: string | null
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type MaterialCreateWithoutProductsInput = {
    label?: string | null
    ProductMaterials?: ProductMaterialsCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutProductsInput = {
    id?: number
    label?: string | null
    ProductMaterials?: ProductMaterialsUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutProductsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutProductsInput, MaterialUncheckedCreateWithoutProductsInput>
  }

  export type ArticleOrderCreateWithoutProductInput = {
    quantity?: number | null
    price?: number | null
    order?: OrderCreateNestedOneWithoutArticleOrderInput
  }

  export type ArticleOrderUncheckedCreateWithoutProductInput = {
    id?: number
    orderId?: number | null
    quantity?: number | null
    price?: number | null
  }

  export type ArticleOrderCreateOrConnectWithoutProductInput = {
    where: ArticleOrderWhereUniqueInput
    create: XOR<ArticleOrderCreateWithoutProductInput, ArticleOrderUncheckedCreateWithoutProductInput>
  }

  export type ArticleOrderCreateManyProductInputEnvelope = {
    data: ArticleOrderCreateManyProductInput | ArticleOrderCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductGalleryCreateWithoutProductInput = {
    url: string
  }

  export type ProductGalleryUncheckedCreateWithoutProductInput = {
    id?: number
    url: string
  }

  export type ProductGalleryCreateOrConnectWithoutProductInput = {
    where: ProductGalleryWhereUniqueInput
    create: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput>
  }

  export type ProductGalleryCreateManyProductInputEnvelope = {
    data: ProductGalleryCreateManyProductInput | ProductGalleryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductMaterialsCreateWithoutProductInput = {
    Material: MaterialCreateNestedOneWithoutProductMaterialsInput
  }

  export type ProductMaterialsUncheckedCreateWithoutProductInput = {
    materialId: number
  }

  export type ProductMaterialsCreateOrConnectWithoutProductInput = {
    where: ProductMaterialsWhereUniqueInput
    create: XOR<ProductMaterialsCreateWithoutProductInput, ProductMaterialsUncheckedCreateWithoutProductInput>
  }

  export type ProductMaterialsCreateManyProductInputEnvelope = {
    data: ProductMaterialsCreateManyProductInput | ProductMaterialsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    label?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaterialUpsertWithWhereUniqueWithoutProductsInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutProductsInput, MaterialUncheckedUpdateWithoutProductsInput>
    create: XOR<MaterialCreateWithoutProductsInput, MaterialUncheckedCreateWithoutProductsInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutProductsInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutProductsInput, MaterialUncheckedUpdateWithoutProductsInput>
  }

  export type MaterialUpdateManyWithWhereWithoutProductsInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutProductsInput>
  }

  export type MaterialScalarWhereInput = {
    AND?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    OR?: MaterialScalarWhereInput[]
    NOT?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    id?: IntFilter<"Material"> | number
    label?: StringNullableFilter<"Material"> | string | null
  }

  export type ArticleOrderUpsertWithWhereUniqueWithoutProductInput = {
    where: ArticleOrderWhereUniqueInput
    update: XOR<ArticleOrderUpdateWithoutProductInput, ArticleOrderUncheckedUpdateWithoutProductInput>
    create: XOR<ArticleOrderCreateWithoutProductInput, ArticleOrderUncheckedCreateWithoutProductInput>
  }

  export type ArticleOrderUpdateWithWhereUniqueWithoutProductInput = {
    where: ArticleOrderWhereUniqueInput
    data: XOR<ArticleOrderUpdateWithoutProductInput, ArticleOrderUncheckedUpdateWithoutProductInput>
  }

  export type ArticleOrderUpdateManyWithWhereWithoutProductInput = {
    where: ArticleOrderScalarWhereInput
    data: XOR<ArticleOrderUpdateManyMutationInput, ArticleOrderUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductGalleryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductGalleryWhereUniqueInput
    update: XOR<ProductGalleryUpdateWithoutProductInput, ProductGalleryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductGalleryCreateWithoutProductInput, ProductGalleryUncheckedCreateWithoutProductInput>
  }

  export type ProductGalleryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductGalleryWhereUniqueInput
    data: XOR<ProductGalleryUpdateWithoutProductInput, ProductGalleryUncheckedUpdateWithoutProductInput>
  }

  export type ProductGalleryUpdateManyWithWhereWithoutProductInput = {
    where: ProductGalleryScalarWhereInput
    data: XOR<ProductGalleryUpdateManyMutationInput, ProductGalleryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductGalleryScalarWhereInput = {
    AND?: ProductGalleryScalarWhereInput | ProductGalleryScalarWhereInput[]
    OR?: ProductGalleryScalarWhereInput[]
    NOT?: ProductGalleryScalarWhereInput | ProductGalleryScalarWhereInput[]
    id?: IntFilter<"ProductGallery"> | number
    url?: StringFilter<"ProductGallery"> | string
    productId?: IntFilter<"ProductGallery"> | number
  }

  export type ProductMaterialsUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductMaterialsWhereUniqueInput
    update: XOR<ProductMaterialsUpdateWithoutProductInput, ProductMaterialsUncheckedUpdateWithoutProductInput>
    create: XOR<ProductMaterialsCreateWithoutProductInput, ProductMaterialsUncheckedCreateWithoutProductInput>
  }

  export type ProductMaterialsUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductMaterialsWhereUniqueInput
    data: XOR<ProductMaterialsUpdateWithoutProductInput, ProductMaterialsUncheckedUpdateWithoutProductInput>
  }

  export type ProductMaterialsUpdateManyWithWhereWithoutProductInput = {
    where: ProductMaterialsScalarWhereInput
    data: XOR<ProductMaterialsUpdateManyMutationInput, ProductMaterialsUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutProductMaterialsInput = {
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    thumbnail?: string | null
    Category?: CategoryCreateNestedOneWithoutProductsInput
    materials?: MaterialCreateNestedManyWithoutProductsInput
    ArticleOrder?: ArticleOrderCreateNestedManyWithoutProductInput
    images?: ProductGalleryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductMaterialsInput = {
    id?: number
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    categoryId?: number | null
    thumbnail?: string | null
    materials?: MaterialUncheckedCreateNestedManyWithoutProductsInput
    ArticleOrder?: ArticleOrderUncheckedCreateNestedManyWithoutProductInput
    images?: ProductGalleryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductMaterialsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductMaterialsInput, ProductUncheckedCreateWithoutProductMaterialsInput>
  }

  export type MaterialCreateWithoutProductMaterialsInput = {
    label?: string | null
    products?: ProductCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateWithoutProductMaterialsInput = {
    id?: number
    label?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutMaterialsInput
  }

  export type MaterialCreateOrConnectWithoutProductMaterialsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutProductMaterialsInput, MaterialUncheckedCreateWithoutProductMaterialsInput>
  }

  export type ProductUpsertWithoutProductMaterialsInput = {
    update: XOR<ProductUpdateWithoutProductMaterialsInput, ProductUncheckedUpdateWithoutProductMaterialsInput>
    create: XOR<ProductCreateWithoutProductMaterialsInput, ProductUncheckedCreateWithoutProductMaterialsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductMaterialsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductMaterialsInput, ProductUncheckedUpdateWithoutProductMaterialsInput>
  }

  export type ProductUpdateWithoutProductMaterialsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoryUpdateOneWithoutProductsNestedInput
    materials?: MaterialUpdateManyWithoutProductsNestedInput
    ArticleOrder?: ArticleOrderUpdateManyWithoutProductNestedInput
    images?: ProductGalleryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: MaterialUncheckedUpdateManyWithoutProductsNestedInput
    ArticleOrder?: ArticleOrderUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductGalleryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type MaterialUpsertWithoutProductMaterialsInput = {
    update: XOR<MaterialUpdateWithoutProductMaterialsInput, MaterialUncheckedUpdateWithoutProductMaterialsInput>
    create: XOR<MaterialCreateWithoutProductMaterialsInput, MaterialUncheckedCreateWithoutProductMaterialsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutProductMaterialsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutProductMaterialsInput, MaterialUncheckedUpdateWithoutProductMaterialsInput>
  }

  export type MaterialUpdateWithoutProductMaterialsInput = {
    label?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateWithoutProductMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutMaterialsNestedInput
  }

  export type ProductCreateWithoutImagesInput = {
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    thumbnail?: string | null
    Category?: CategoryCreateNestedOneWithoutProductsInput
    materials?: MaterialCreateNestedManyWithoutProductsInput
    ArticleOrder?: ArticleOrderCreateNestedManyWithoutProductInput
    ProductMaterials?: ProductMaterialsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: number
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    categoryId?: number | null
    thumbnail?: string | null
    materials?: MaterialUncheckedCreateNestedManyWithoutProductsInput
    ArticleOrder?: ArticleOrderUncheckedCreateNestedManyWithoutProductInput
    ProductMaterials?: ProductMaterialsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoryUpdateOneWithoutProductsNestedInput
    materials?: MaterialUpdateManyWithoutProductsNestedInput
    ArticleOrder?: ArticleOrderUpdateManyWithoutProductNestedInput
    ProductMaterials?: ProductMaterialsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: MaterialUncheckedUpdateManyWithoutProductsNestedInput
    ArticleOrder?: ArticleOrderUncheckedUpdateManyWithoutProductNestedInput
    ProductMaterials?: ProductMaterialsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ClientCreateWithoutCheckoutMethodsInput = {
    email?: string | null
    password?: string | null
    address?: string | null
    city?: string | null
    createdAt?: Date | string | null
    lastName?: string | null
    firstName?: string | null
    role?: string
    orders?: OrderCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCheckoutMethodsInput = {
    id?: number
    email?: string | null
    password?: string | null
    address?: string | null
    city?: string | null
    createdAt?: Date | string | null
    lastName?: string | null
    firstName?: string | null
    role?: string
    orders?: OrderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCheckoutMethodsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCheckoutMethodsInput, ClientUncheckedCreateWithoutCheckoutMethodsInput>
  }

  export type ClientUpsertWithoutCheckoutMethodsInput = {
    update: XOR<ClientUpdateWithoutCheckoutMethodsInput, ClientUncheckedUpdateWithoutCheckoutMethodsInput>
    create: XOR<ClientCreateWithoutCheckoutMethodsInput, ClientUncheckedCreateWithoutCheckoutMethodsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutCheckoutMethodsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutCheckoutMethodsInput, ClientUncheckedUpdateWithoutCheckoutMethodsInput>
  }

  export type ClientUpdateWithoutCheckoutMethodsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCheckoutMethodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name?: string | null
    price?: number | null
    stock?: number | null
    description?: string | null
    thumbnail?: string | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: MaterialUpdateManyWithoutProductsNestedInput
    ArticleOrder?: ArticleOrderUpdateManyWithoutProductNestedInput
    images?: ProductGalleryUpdateManyWithoutProductNestedInput
    ProductMaterials?: ProductMaterialsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: MaterialUncheckedUpdateManyWithoutProductsNestedInput
    ArticleOrder?: ArticleOrderUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductGalleryUncheckedUpdateManyWithoutProductNestedInput
    ProductMaterials?: ProductMaterialsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateManyClientInput = {
    id?: number
    status?: string | null
    createdAt?: Date | string | null
    orderDate?: Date | string | null
  }

  export type CheckoutMethodCreateManyClientInput = {
    id?: number
    cardType: string
    cardHolderName: string
    cardNumber: string
    expirationDate: Date | string
  }

  export type OrderUpdateWithoutClientInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ArticleOrder?: ArticleOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ArticleOrder?: ArticleOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CheckoutMethodUpdateWithoutClientInput = {
    cardType?: StringFieldUpdateOperationsInput | string
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutMethodUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardType?: StringFieldUpdateOperationsInput | string
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutMethodUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardType?: StringFieldUpdateOperationsInput | string
    cardHolderName?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleOrderCreateManyOrderInput = {
    id?: number
    productId?: number | null
    quantity?: number | null
    price?: number | null
  }

  export type ArticleOrderUpdateWithoutOrderInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    product?: ProductUpdateOneWithoutArticleOrderNestedInput
  }

  export type ArticleOrderUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArticleOrderUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductMaterialsCreateManyMaterialInput = {
    productId: number
  }

  export type ProductUpdateWithoutMaterialsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoryUpdateOneWithoutProductsNestedInput
    ArticleOrder?: ArticleOrderUpdateManyWithoutProductNestedInput
    images?: ProductGalleryUpdateManyWithoutProductNestedInput
    ProductMaterials?: ProductMaterialsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    ArticleOrder?: ArticleOrderUncheckedUpdateManyWithoutProductNestedInput
    images?: ProductGalleryUncheckedUpdateManyWithoutProductNestedInput
    ProductMaterials?: ProductMaterialsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductMaterialsUpdateWithoutMaterialInput = {
    Product?: ProductUpdateOneRequiredWithoutProductMaterialsNestedInput
  }

  export type ProductMaterialsUncheckedUpdateWithoutMaterialInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductMaterialsUncheckedUpdateManyWithoutMaterialInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleOrderCreateManyProductInput = {
    id?: number
    orderId?: number | null
    quantity?: number | null
    price?: number | null
  }

  export type ProductGalleryCreateManyProductInput = {
    id?: number
    url: string
  }

  export type ProductMaterialsCreateManyProductInput = {
    materialId: number
  }

  export type MaterialUpdateWithoutProductsInput = {
    label?: NullableStringFieldUpdateOperationsInput | string | null
    ProductMaterials?: ProductMaterialsUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    ProductMaterials?: ProductMaterialsUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArticleOrderUpdateWithoutProductInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    order?: OrderUpdateOneWithoutArticleOrderNestedInput
  }

  export type ArticleOrderUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArticleOrderUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductGalleryUpdateWithoutProductInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductGalleryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductGalleryUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProductMaterialsUpdateWithoutProductInput = {
    Material?: MaterialUpdateOneRequiredWithoutProductMaterialsNestedInput
  }

  export type ProductMaterialsUncheckedUpdateWithoutProductInput = {
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductMaterialsUncheckedUpdateManyWithoutProductInput = {
    materialId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaterialCountOutputTypeDefaultArgs instead
     */
    export type MaterialCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaterialCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArticleOrderDefaultArgs instead
     */
    export type ArticleOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArticleOrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaterialDefaultArgs instead
     */
    export type MaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaterialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductMaterialsDefaultArgs instead
     */
    export type ProductMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductMaterialsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductGalleryDefaultArgs instead
     */
    export type ProductGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductGalleryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactDefaultArgs instead
     */
    export type ContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CheckoutMethodDefaultArgs instead
     */
    export type CheckoutMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CheckoutMethodDefaultArgs<ExtArgs>

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