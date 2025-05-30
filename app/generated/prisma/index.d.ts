
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
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Permiso
 * 
 */
export type Permiso = $Result.DefaultSelection<Prisma.$PermisoPayload>
/**
 * Model RolPermiso
 * 
 */
export type RolPermiso = $Result.DefaultSelection<Prisma.$RolPermisoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Galeria
 * 
 */
export type Galeria = $Result.DefaultSelection<Prisma.$GaleriaPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Fotografo
 * 
 */
export type Fotografo = $Result.DefaultSelection<Prisma.$FotografoPayload>
/**
 * Model PhotoService
 * 
 */
export type PhotoService = $Result.DefaultSelection<Prisma.$PhotoServicePayload>
/**
 * Model FotografoServicio
 * 
 */
export type FotografoServicio = $Result.DefaultSelection<Prisma.$FotografoServicioPayload>
/**
 * Model Unavailability
 * 
 */
export type Unavailability = $Result.DefaultSelection<Prisma.$UnavailabilityPayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Rols
 * const rols = await prisma.rol.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Rols
   * const rols = await prisma.rol.findMany()
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
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permiso`: Exposes CRUD operations for the **Permiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permisos
    * const permisos = await prisma.permiso.findMany()
    * ```
    */
  get permiso(): Prisma.PermisoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolPermiso`: Exposes CRUD operations for the **RolPermiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolPermisos
    * const rolPermisos = await prisma.rolPermiso.findMany()
    * ```
    */
  get rolPermiso(): Prisma.RolPermisoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galeria`: Exposes CRUD operations for the **Galeria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galerias
    * const galerias = await prisma.galeria.findMany()
    * ```
    */
  get galeria(): Prisma.GaleriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fotografo`: Exposes CRUD operations for the **Fotografo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fotografos
    * const fotografos = await prisma.fotografo.findMany()
    * ```
    */
  get fotografo(): Prisma.FotografoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photoService`: Exposes CRUD operations for the **PhotoService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoServices
    * const photoServices = await prisma.photoService.findMany()
    * ```
    */
  get photoService(): Prisma.PhotoServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fotografoServicio`: Exposes CRUD operations for the **FotografoServicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FotografoServicios
    * const fotografoServicios = await prisma.fotografoServicio.findMany()
    * ```
    */
  get fotografoServicio(): Prisma.FotografoServicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unavailability`: Exposes CRUD operations for the **Unavailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unavailabilities
    * const unavailabilities = await prisma.unavailability.findMany()
    * ```
    */
  get unavailability(): Prisma.UnavailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **Reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.ReservaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Rol: 'Rol',
    Permiso: 'Permiso',
    RolPermiso: 'RolPermiso',
    Usuario: 'Usuario',
    Galeria: 'Galeria',
    Cliente: 'Cliente',
    Category: 'Category',
    Fotografo: 'Fotografo',
    PhotoService: 'PhotoService',
    FotografoServicio: 'FotografoServicio',
    Unavailability: 'Unavailability',
    Reserva: 'Reserva'
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
      modelProps: "rol" | "permiso" | "rolPermiso" | "usuario" | "galeria" | "cliente" | "category" | "fotografo" | "photoService" | "fotografoServicio" | "unavailability" | "reserva"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Permiso: {
        payload: Prisma.$PermisoPayload<ExtArgs>
        fields: Prisma.PermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findFirst: {
            args: Prisma.PermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findMany: {
            args: Prisma.PermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          create: {
            args: Prisma.PermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          createMany: {
            args: Prisma.PermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          update: {
            args: Prisma.PermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          deleteMany: {
            args: Prisma.PermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          aggregate: {
            args: Prisma.PermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermiso>
          }
          groupBy: {
            args: Prisma.PermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermisoCountArgs<ExtArgs>
            result: $Utils.Optional<PermisoCountAggregateOutputType> | number
          }
        }
      }
      RolPermiso: {
        payload: Prisma.$RolPermisoPayload<ExtArgs>
        fields: Prisma.RolPermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolPermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolPermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findFirst: {
            args: Prisma.RolPermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolPermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          findMany: {
            args: Prisma.RolPermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>[]
          }
          create: {
            args: Prisma.RolPermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          createMany: {
            args: Prisma.RolPermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolPermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          update: {
            args: Prisma.RolPermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          deleteMany: {
            args: Prisma.RolPermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolPermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolPermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisoPayload>
          }
          aggregate: {
            args: Prisma.RolPermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolPermiso>
          }
          groupBy: {
            args: Prisma.RolPermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolPermisoCountArgs<ExtArgs>
            result: $Utils.Optional<RolPermisoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Galeria: {
        payload: Prisma.$GaleriaPayload<ExtArgs>
        fields: Prisma.GaleriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GaleriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GaleriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          findFirst: {
            args: Prisma.GaleriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GaleriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          findMany: {
            args: Prisma.GaleriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>[]
          }
          create: {
            args: Prisma.GaleriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          createMany: {
            args: Prisma.GaleriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GaleriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          update: {
            args: Prisma.GaleriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          deleteMany: {
            args: Prisma.GaleriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GaleriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GaleriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriaPayload>
          }
          aggregate: {
            args: Prisma.GaleriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGaleria>
          }
          groupBy: {
            args: Prisma.GaleriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<GaleriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.GaleriaCountArgs<ExtArgs>
            result: $Utils.Optional<GaleriaCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Fotografo: {
        payload: Prisma.$FotografoPayload<ExtArgs>
        fields: Prisma.FotografoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotografoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotografoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoPayload>
          }
          findFirst: {
            args: Prisma.FotografoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotografoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoPayload>
          }
          findMany: {
            args: Prisma.FotografoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoPayload>[]
          }
          create: {
            args: Prisma.FotografoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoPayload>
          }
          createMany: {
            args: Prisma.FotografoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FotografoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoPayload>
          }
          update: {
            args: Prisma.FotografoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoPayload>
          }
          deleteMany: {
            args: Prisma.FotografoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotografoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FotografoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoPayload>
          }
          aggregate: {
            args: Prisma.FotografoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFotografo>
          }
          groupBy: {
            args: Prisma.FotografoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotografoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotografoCountArgs<ExtArgs>
            result: $Utils.Optional<FotografoCountAggregateOutputType> | number
          }
        }
      }
      PhotoService: {
        payload: Prisma.$PhotoServicePayload<ExtArgs>
        fields: Prisma.PhotoServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoServicePayload>
          }
          findFirst: {
            args: Prisma.PhotoServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoServicePayload>
          }
          findMany: {
            args: Prisma.PhotoServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoServicePayload>[]
          }
          create: {
            args: Prisma.PhotoServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoServicePayload>
          }
          createMany: {
            args: Prisma.PhotoServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhotoServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoServicePayload>
          }
          update: {
            args: Prisma.PhotoServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoServicePayload>
          }
          deleteMany: {
            args: Prisma.PhotoServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoServicePayload>
          }
          aggregate: {
            args: Prisma.PhotoServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoService>
          }
          groupBy: {
            args: Prisma.PhotoServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoServiceCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoServiceCountAggregateOutputType> | number
          }
        }
      }
      FotografoServicio: {
        payload: Prisma.$FotografoServicioPayload<ExtArgs>
        fields: Prisma.FotografoServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotografoServicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotografoServicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoServicioPayload>
          }
          findFirst: {
            args: Prisma.FotografoServicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotografoServicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoServicioPayload>
          }
          findMany: {
            args: Prisma.FotografoServicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoServicioPayload>[]
          }
          create: {
            args: Prisma.FotografoServicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoServicioPayload>
          }
          createMany: {
            args: Prisma.FotografoServicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FotografoServicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoServicioPayload>
          }
          update: {
            args: Prisma.FotografoServicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoServicioPayload>
          }
          deleteMany: {
            args: Prisma.FotografoServicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotografoServicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FotografoServicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotografoServicioPayload>
          }
          aggregate: {
            args: Prisma.FotografoServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFotografoServicio>
          }
          groupBy: {
            args: Prisma.FotografoServicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotografoServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotografoServicioCountArgs<ExtArgs>
            result: $Utils.Optional<FotografoServicioCountAggregateOutputType> | number
          }
        }
      }
      Unavailability: {
        payload: Prisma.$UnavailabilityPayload<ExtArgs>
        fields: Prisma.UnavailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnavailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnavailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          findFirst: {
            args: Prisma.UnavailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnavailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          findMany: {
            args: Prisma.UnavailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>[]
          }
          create: {
            args: Prisma.UnavailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          createMany: {
            args: Prisma.UnavailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnavailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          update: {
            args: Prisma.UnavailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          deleteMany: {
            args: Prisma.UnavailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnavailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnavailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          aggregate: {
            args: Prisma.UnavailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnavailability>
          }
          groupBy: {
            args: Prisma.UnavailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnavailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnavailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<UnavailabilityCountAggregateOutputType> | number
          }
        }
      }
      Reserva: {
        payload: Prisma.$ReservaPayload<ExtArgs>
        fields: Prisma.ReservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findFirst: {
            args: Prisma.ReservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findMany: {
            args: Prisma.ReservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          create: {
            args: Prisma.ReservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          createMany: {
            args: Prisma.ReservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          update: {
            args: Prisma.ReservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.ReservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
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
    rol?: RolOmit
    permiso?: PermisoOmit
    rolPermiso?: RolPermisoOmit
    usuario?: UsuarioOmit
    galeria?: GaleriaOmit
    cliente?: ClienteOmit
    category?: CategoryOmit
    fotografo?: FotografoOmit
    photoService?: PhotoServiceOmit
    fotografoServicio?: FotografoServicioOmit
    unavailability?: UnavailabilityOmit
    reserva?: ReservaOmit
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
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    permisos: number
    usuarios: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permisos?: boolean | RolCountOutputTypeCountPermisosArgs
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type PermisoCountOutputType
   */

  export type PermisoCountOutputType = {
    roles: number
  }

  export type PermisoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermisoCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoCountOutputType
     */
    select?: PermisoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    reservas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | ClienteCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    services: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | CategoryCountOutputTypeCountServicesArgs
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
  export type CategoryCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoServiceWhereInput
  }


  /**
   * Count Type FotografoCountOutputType
   */

  export type FotografoCountOutputType = {
    reservas: number
    galeria: number
    unavailabilities: number
    servicios: number
  }

  export type FotografoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | FotografoCountOutputTypeCountReservasArgs
    galeria?: boolean | FotografoCountOutputTypeCountGaleriaArgs
    unavailabilities?: boolean | FotografoCountOutputTypeCountUnavailabilitiesArgs
    servicios?: boolean | FotografoCountOutputTypeCountServiciosArgs
  }

  // Custom InputTypes
  /**
   * FotografoCountOutputType without action
   */
  export type FotografoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoCountOutputType
     */
    select?: FotografoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FotografoCountOutputType without action
   */
  export type FotografoCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * FotografoCountOutputType without action
   */
  export type FotografoCountOutputTypeCountGaleriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GaleriaWhereInput
  }

  /**
   * FotografoCountOutputType without action
   */
  export type FotografoCountOutputTypeCountUnavailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnavailabilityWhereInput
  }

  /**
   * FotografoCountOutputType without action
   */
  export type FotografoCountOutputTypeCountServiciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotografoServicioWhereInput
  }


  /**
   * Count Type PhotoServiceCountOutputType
   */

  export type PhotoServiceCountOutputType = {
    fotografos: number
    reservas: number
  }

  export type PhotoServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotografos?: boolean | PhotoServiceCountOutputTypeCountFotografosArgs
    reservas?: boolean | PhotoServiceCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * PhotoServiceCountOutputType without action
   */
  export type PhotoServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoServiceCountOutputType
     */
    select?: PhotoServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhotoServiceCountOutputType without action
   */
  export type PhotoServiceCountOutputTypeCountFotografosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotografoServicioWhereInput
  }

  /**
   * PhotoServiceCountOutputType without action
   */
  export type PhotoServiceCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    createAt: Date | null
    updateAt: Date | null
    activo: boolean | null
  }

  export type RolMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    createAt: Date | null
    updateAt: Date | null
    activo: boolean | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    createAt: number
    updateAt: number
    activo: number
    _all: number
  }


  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createAt?: true
    updateAt?: true
    activo?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createAt?: true
    updateAt?: true
    activo?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createAt?: true
    updateAt?: true
    activo?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string
    createAt: Date
    updateAt: Date
    activo: boolean
    _count: RolCountAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createAt?: boolean
    updateAt?: boolean
    activo?: boolean
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>



  export type RolSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createAt?: boolean
    updateAt?: boolean
    activo?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "createAt" | "updateAt" | "activo", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      permisos: Prisma.$RolPermisoPayload<ExtArgs>[]
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string
      createAt: Date
      updateAt: Date
      activo: boolean
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permisos<T extends Rol$permisosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'String'>
    readonly nombre: FieldRef<"Rol", 'String'>
    readonly descripcion: FieldRef<"Rol", 'String'>
    readonly createAt: FieldRef<"Rol", 'DateTime'>
    readonly updateAt: FieldRef<"Rol", 'DateTime'>
    readonly activo: FieldRef<"Rol", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.permisos
   */
  export type Rol$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Permiso
   */

  export type AggregatePermiso = {
    _count: PermisoCountAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  export type PermisoMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    createAt: Date | null
    updateAt: Date | null
    activo: boolean | null
  }

  export type PermisoMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    createAt: Date | null
    updateAt: Date | null
    activo: boolean | null
  }

  export type PermisoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    createAt: number
    updateAt: number
    activo: number
    _all: number
  }


  export type PermisoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createAt?: true
    updateAt?: true
    activo?: true
  }

  export type PermisoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createAt?: true
    updateAt?: true
    activo?: true
  }

  export type PermisoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createAt?: true
    updateAt?: true
    activo?: true
    _all?: true
  }

  export type PermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permiso to aggregate.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permisos
    **/
    _count?: true | PermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermisoMaxAggregateInputType
  }

  export type GetPermisoAggregateType<T extends PermisoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermiso[P]>
      : GetScalarType<T[P], AggregatePermiso[P]>
  }




  export type PermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoWhereInput
    orderBy?: PermisoOrderByWithAggregationInput | PermisoOrderByWithAggregationInput[]
    by: PermisoScalarFieldEnum[] | PermisoScalarFieldEnum
    having?: PermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermisoCountAggregateInputType | true
    _min?: PermisoMinAggregateInputType
    _max?: PermisoMaxAggregateInputType
  }

  export type PermisoGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string
    createAt: Date
    updateAt: Date
    activo: boolean
    _count: PermisoCountAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  type GetPermisoGroupByPayload<T extends PermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermisoGroupByOutputType[P]>
            : GetScalarType<T[P], PermisoGroupByOutputType[P]>
        }
      >
    >


  export type PermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createAt?: boolean
    updateAt?: boolean
    activo?: boolean
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permiso"]>



  export type PermisoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createAt?: boolean
    updateAt?: boolean
    activo?: boolean
  }

  export type PermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "createAt" | "updateAt" | "activo", ExtArgs["result"]["permiso"]>
  export type PermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permiso"
    objects: {
      roles: Prisma.$RolPermisoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string
      createAt: Date
      updateAt: Date
      activo: boolean
    }, ExtArgs["result"]["permiso"]>
    composites: {}
  }

  type PermisoGetPayload<S extends boolean | null | undefined | PermisoDefaultArgs> = $Result.GetResult<Prisma.$PermisoPayload, S>

  type PermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermisoCountAggregateInputType | true
    }

  export interface PermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permiso'], meta: { name: 'Permiso' } }
    /**
     * Find zero or one Permiso that matches the filter.
     * @param {PermisoFindUniqueArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermisoFindUniqueArgs>(args: SelectSubset<T, PermisoFindUniqueArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermisoFindUniqueOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermisoFindFirstArgs>(args?: SelectSubset<T, PermisoFindFirstArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permisos
     * const permisos = await prisma.permiso.findMany()
     * 
     * // Get first 10 Permisos
     * const permisos = await prisma.permiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permisoWithIdOnly = await prisma.permiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermisoFindManyArgs>(args?: SelectSubset<T, PermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permiso.
     * @param {PermisoCreateArgs} args - Arguments to create a Permiso.
     * @example
     * // Create one Permiso
     * const Permiso = await prisma.permiso.create({
     *   data: {
     *     // ... data to create a Permiso
     *   }
     * })
     * 
     */
    create<T extends PermisoCreateArgs>(args: SelectSubset<T, PermisoCreateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permisos.
     * @param {PermisoCreateManyArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermisoCreateManyArgs>(args?: SelectSubset<T, PermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permiso.
     * @param {PermisoDeleteArgs} args - Arguments to delete one Permiso.
     * @example
     * // Delete one Permiso
     * const Permiso = await prisma.permiso.delete({
     *   where: {
     *     // ... filter to delete one Permiso
     *   }
     * })
     * 
     */
    delete<T extends PermisoDeleteArgs>(args: SelectSubset<T, PermisoDeleteArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permiso.
     * @param {PermisoUpdateArgs} args - Arguments to update one Permiso.
     * @example
     * // Update one Permiso
     * const permiso = await prisma.permiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermisoUpdateArgs>(args: SelectSubset<T, PermisoUpdateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permisos.
     * @param {PermisoDeleteManyArgs} args - Arguments to filter Permisos to delete.
     * @example
     * // Delete a few Permisos
     * const { count } = await prisma.permiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermisoDeleteManyArgs>(args?: SelectSubset<T, PermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermisoUpdateManyArgs>(args: SelectSubset<T, PermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permiso.
     * @param {PermisoUpsertArgs} args - Arguments to update or create a Permiso.
     * @example
     * // Update or create a Permiso
     * const permiso = await prisma.permiso.upsert({
     *   create: {
     *     // ... data to create a Permiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permiso we want to update
     *   }
     * })
     */
    upsert<T extends PermisoUpsertArgs>(args: SelectSubset<T, PermisoUpsertArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoCountArgs} args - Arguments to filter Permisos to count.
     * @example
     * // Count the number of Permisos
     * const count = await prisma.permiso.count({
     *   where: {
     *     // ... the filter for the Permisos we want to count
     *   }
     * })
    **/
    count<T extends PermisoCountArgs>(
      args?: Subset<T, PermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermisoAggregateArgs>(args: Subset<T, PermisoAggregateArgs>): Prisma.PrismaPromise<GetPermisoAggregateType<T>>

    /**
     * Group by Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoGroupByArgs} args - Group by arguments.
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
      T extends PermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermisoGroupByArgs['orderBy'] }
        : { orderBy?: PermisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permiso model
   */
  readonly fields: PermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permiso$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permiso$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permiso model
   */
  interface PermisoFieldRefs {
    readonly id: FieldRef<"Permiso", 'String'>
    readonly nombre: FieldRef<"Permiso", 'String'>
    readonly descripcion: FieldRef<"Permiso", 'String'>
    readonly createAt: FieldRef<"Permiso", 'DateTime'>
    readonly updateAt: FieldRef<"Permiso", 'DateTime'>
    readonly activo: FieldRef<"Permiso", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Permiso findUnique
   */
  export type PermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findUniqueOrThrow
   */
  export type PermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findFirst
   */
  export type PermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findFirstOrThrow
   */
  export type PermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findMany
   */
  export type PermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso create
   */
  export type PermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permiso.
     */
    data: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
  }

  /**
   * Permiso createMany
   */
  export type PermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso update
   */
  export type PermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permiso.
     */
    data: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
    /**
     * Choose, which Permiso to update.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso updateMany
   */
  export type PermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso upsert
   */
  export type PermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permiso to update in case it exists.
     */
    where: PermisoWhereUniqueInput
    /**
     * In case the Permiso found by the `where` argument doesn't exist, create a new Permiso with this data.
     */
    create: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
    /**
     * In case the Permiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
  }

  /**
   * Permiso delete
   */
  export type PermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter which Permiso to delete.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso deleteMany
   */
  export type PermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permisos to delete
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to delete.
     */
    limit?: number
  }

  /**
   * Permiso.roles
   */
  export type Permiso$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    cursor?: RolPermisoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * Permiso without action
   */
  export type PermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
  }


  /**
   * Model RolPermiso
   */

  export type AggregateRolPermiso = {
    _count: RolPermisoCountAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  export type RolPermisoMinAggregateOutputType = {
    id: string | null
    rolId: string | null
    permisoId: string | null
    createAt: Date | null
  }

  export type RolPermisoMaxAggregateOutputType = {
    id: string | null
    rolId: string | null
    permisoId: string | null
    createAt: Date | null
  }

  export type RolPermisoCountAggregateOutputType = {
    id: number
    rolId: number
    permisoId: number
    createAt: number
    _all: number
  }


  export type RolPermisoMinAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
    createAt?: true
  }

  export type RolPermisoMaxAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
    createAt?: true
  }

  export type RolPermisoCountAggregateInputType = {
    id?: true
    rolId?: true
    permisoId?: true
    createAt?: true
    _all?: true
  }

  export type RolPermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermiso to aggregate.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolPermisos
    **/
    _count?: true | RolPermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolPermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolPermisoMaxAggregateInputType
  }

  export type GetRolPermisoAggregateType<T extends RolPermisoAggregateArgs> = {
        [P in keyof T & keyof AggregateRolPermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolPermiso[P]>
      : GetScalarType<T[P], AggregateRolPermiso[P]>
  }




  export type RolPermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisoWhereInput
    orderBy?: RolPermisoOrderByWithAggregationInput | RolPermisoOrderByWithAggregationInput[]
    by: RolPermisoScalarFieldEnum[] | RolPermisoScalarFieldEnum
    having?: RolPermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolPermisoCountAggregateInputType | true
    _min?: RolPermisoMinAggregateInputType
    _max?: RolPermisoMaxAggregateInputType
  }

  export type RolPermisoGroupByOutputType = {
    id: string
    rolId: string
    permisoId: string
    createAt: Date
    _count: RolPermisoCountAggregateOutputType | null
    _min: RolPermisoMinAggregateOutputType | null
    _max: RolPermisoMaxAggregateOutputType | null
  }

  type GetRolPermisoGroupByPayload<T extends RolPermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolPermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolPermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
            : GetScalarType<T[P], RolPermisoGroupByOutputType[P]>
        }
      >
    >


  export type RolPermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    createAt?: boolean
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermiso"]>



  export type RolPermisoSelectScalar = {
    id?: boolean
    rolId?: boolean
    permisoId?: boolean
    createAt?: boolean
  }

  export type RolPermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rolId" | "permisoId" | "createAt", ExtArgs["result"]["rolPermiso"]>
  export type RolPermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $RolPermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolPermiso"
    objects: {
      permiso: Prisma.$PermisoPayload<ExtArgs>
      rol: Prisma.$RolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rolId: string
      permisoId: string
      createAt: Date
    }, ExtArgs["result"]["rolPermiso"]>
    composites: {}
  }

  type RolPermisoGetPayload<S extends boolean | null | undefined | RolPermisoDefaultArgs> = $Result.GetResult<Prisma.$RolPermisoPayload, S>

  type RolPermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolPermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolPermisoCountAggregateInputType | true
    }

  export interface RolPermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolPermiso'], meta: { name: 'RolPermiso' } }
    /**
     * Find zero or one RolPermiso that matches the filter.
     * @param {RolPermisoFindUniqueArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolPermisoFindUniqueArgs>(args: SelectSubset<T, RolPermisoFindUniqueArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolPermiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolPermisoFindUniqueOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolPermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, RolPermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolPermisoFindFirstArgs>(args?: SelectSubset<T, RolPermisoFindFirstArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindFirstOrThrowArgs} args - Arguments to find a RolPermiso
     * @example
     * // Get one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolPermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, RolPermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolPermisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany()
     * 
     * // Get first 10 RolPermisos
     * const rolPermisos = await prisma.rolPermiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolPermisoWithIdOnly = await prisma.rolPermiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolPermisoFindManyArgs>(args?: SelectSubset<T, RolPermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolPermiso.
     * @param {RolPermisoCreateArgs} args - Arguments to create a RolPermiso.
     * @example
     * // Create one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.create({
     *   data: {
     *     // ... data to create a RolPermiso
     *   }
     * })
     * 
     */
    create<T extends RolPermisoCreateArgs>(args: SelectSubset<T, RolPermisoCreateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolPermisos.
     * @param {RolPermisoCreateManyArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolPermisoCreateManyArgs>(args?: SelectSubset<T, RolPermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RolPermiso.
     * @param {RolPermisoDeleteArgs} args - Arguments to delete one RolPermiso.
     * @example
     * // Delete one RolPermiso
     * const RolPermiso = await prisma.rolPermiso.delete({
     *   where: {
     *     // ... filter to delete one RolPermiso
     *   }
     * })
     * 
     */
    delete<T extends RolPermisoDeleteArgs>(args: SelectSubset<T, RolPermisoDeleteArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolPermiso.
     * @param {RolPermisoUpdateArgs} args - Arguments to update one RolPermiso.
     * @example
     * // Update one RolPermiso
     * const rolPermiso = await prisma.rolPermiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolPermisoUpdateArgs>(args: SelectSubset<T, RolPermisoUpdateArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolPermisos.
     * @param {RolPermisoDeleteManyArgs} args - Arguments to filter RolPermisos to delete.
     * @example
     * // Delete a few RolPermisos
     * const { count } = await prisma.rolPermiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolPermisoDeleteManyArgs>(args?: SelectSubset<T, RolPermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolPermisos
     * const rolPermiso = await prisma.rolPermiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolPermisoUpdateManyArgs>(args: SelectSubset<T, RolPermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RolPermiso.
     * @param {RolPermisoUpsertArgs} args - Arguments to update or create a RolPermiso.
     * @example
     * // Update or create a RolPermiso
     * const rolPermiso = await prisma.rolPermiso.upsert({
     *   create: {
     *     // ... data to create a RolPermiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolPermiso we want to update
     *   }
     * })
     */
    upsert<T extends RolPermisoUpsertArgs>(args: SelectSubset<T, RolPermisoUpsertArgs<ExtArgs>>): Prisma__RolPermisoClient<$Result.GetResult<Prisma.$RolPermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoCountArgs} args - Arguments to filter RolPermisos to count.
     * @example
     * // Count the number of RolPermisos
     * const count = await prisma.rolPermiso.count({
     *   where: {
     *     // ... the filter for the RolPermisos we want to count
     *   }
     * })
    **/
    count<T extends RolPermisoCountArgs>(
      args?: Subset<T, RolPermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolPermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolPermisoAggregateArgs>(args: Subset<T, RolPermisoAggregateArgs>): Prisma.PrismaPromise<GetRolPermisoAggregateType<T>>

    /**
     * Group by RolPermiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisoGroupByArgs} args - Group by arguments.
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
      T extends RolPermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolPermisoGroupByArgs['orderBy'] }
        : { orderBy?: RolPermisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolPermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolPermiso model
   */
  readonly fields: RolPermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolPermiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolPermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permiso<T extends PermisoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermisoDefaultArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RolPermiso model
   */
  interface RolPermisoFieldRefs {
    readonly id: FieldRef<"RolPermiso", 'String'>
    readonly rolId: FieldRef<"RolPermiso", 'String'>
    readonly permisoId: FieldRef<"RolPermiso", 'String'>
    readonly createAt: FieldRef<"RolPermiso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RolPermiso findUnique
   */
  export type RolPermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findUniqueOrThrow
   */
  export type RolPermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso findFirst
   */
  export type RolPermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findFirstOrThrow
   */
  export type RolPermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermiso to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso findMany
   */
  export type RolPermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter, which RolPermisos to fetch.
     */
    where?: RolPermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisoOrderByWithRelationInput | RolPermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolPermisos.
     */
    cursor?: RolPermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    distinct?: RolPermisoScalarFieldEnum | RolPermisoScalarFieldEnum[]
  }

  /**
   * RolPermiso create
   */
  export type RolPermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a RolPermiso.
     */
    data: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
  }

  /**
   * RolPermiso createMany
   */
  export type RolPermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisoCreateManyInput | RolPermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolPermiso update
   */
  export type RolPermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a RolPermiso.
     */
    data: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
    /**
     * Choose, which RolPermiso to update.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso updateMany
   */
  export type RolPermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to update.
     */
    limit?: number
  }

  /**
   * RolPermiso upsert
   */
  export type RolPermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the RolPermiso to update in case it exists.
     */
    where: RolPermisoWhereUniqueInput
    /**
     * In case the RolPermiso found by the `where` argument doesn't exist, create a new RolPermiso with this data.
     */
    create: XOR<RolPermisoCreateInput, RolPermisoUncheckedCreateInput>
    /**
     * In case the RolPermiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolPermisoUpdateInput, RolPermisoUncheckedUpdateInput>
  }

  /**
   * RolPermiso delete
   */
  export type RolPermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
    /**
     * Filter which RolPermiso to delete.
     */
    where: RolPermisoWhereUniqueInput
  }

  /**
   * RolPermiso deleteMany
   */
  export type RolPermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermisos to delete
     */
    where?: RolPermisoWhereInput
    /**
     * Limit how many RolPermisos to delete.
     */
    limit?: number
  }

  /**
   * RolPermiso without action
   */
  export type RolPermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermiso
     */
    select?: RolPermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermiso
     */
    omit?: RolPermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
    activo: boolean | null
    rolId: string | null
    debeCambiar: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
    activo: boolean | null
    rolId: string | null
    debeCambiar: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    createAt: number
    updateAt: number
    activo: number
    rolId: number
    debeCambiar: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
    activo?: true
    rolId?: true
    debeCambiar?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
    activo?: true
    rolId?: true
    debeCambiar?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
    activo?: true
    rolId?: true
    debeCambiar?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nombre: string
    email: string
    password: string
    createAt: Date
    updateAt: Date
    activo: boolean
    rolId: string
    debeCambiar: boolean
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    activo?: boolean
    rolId?: boolean
    debeCambiar?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    fotografo?: boolean | Usuario$fotografoArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    activo?: boolean
    rolId?: boolean
    debeCambiar?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "createAt" | "updateAt" | "activo" | "rolId" | "debeCambiar", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    fotografo?: boolean | Usuario$fotografoArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      fotografo: Prisma.$FotografoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      password: string
      createAt: Date
      updateAt: Date
      activo: boolean
      rolId: string
      debeCambiar: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fotografo<T extends Usuario$fotografoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$fotografoArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly createAt: FieldRef<"Usuario", 'DateTime'>
    readonly updateAt: FieldRef<"Usuario", 'DateTime'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly rolId: FieldRef<"Usuario", 'String'>
    readonly debeCambiar: FieldRef<"Usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.fotografo
   */
  export type Usuario$fotografoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografo
     */
    select?: FotografoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografo
     */
    omit?: FotografoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoInclude<ExtArgs> | null
    where?: FotografoWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Galeria
   */

  export type AggregateGaleria = {
    _count: GaleriaCountAggregateOutputType | null
    _min: GaleriaMinAggregateOutputType | null
    _max: GaleriaMaxAggregateOutputType | null
  }

  export type GaleriaMinAggregateOutputType = {
    id: string | null
    nombreFoto: string | null
    url: string | null
    fotografoId: string | null
  }

  export type GaleriaMaxAggregateOutputType = {
    id: string | null
    nombreFoto: string | null
    url: string | null
    fotografoId: string | null
  }

  export type GaleriaCountAggregateOutputType = {
    id: number
    nombreFoto: number
    url: number
    fotografoId: number
    _all: number
  }


  export type GaleriaMinAggregateInputType = {
    id?: true
    nombreFoto?: true
    url?: true
    fotografoId?: true
  }

  export type GaleriaMaxAggregateInputType = {
    id?: true
    nombreFoto?: true
    url?: true
    fotografoId?: true
  }

  export type GaleriaCountAggregateInputType = {
    id?: true
    nombreFoto?: true
    url?: true
    fotografoId?: true
    _all?: true
  }

  export type GaleriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galeria to aggregate.
     */
    where?: GaleriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galerias to fetch.
     */
    orderBy?: GaleriaOrderByWithRelationInput | GaleriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GaleriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galerias
    **/
    _count?: true | GaleriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GaleriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GaleriaMaxAggregateInputType
  }

  export type GetGaleriaAggregateType<T extends GaleriaAggregateArgs> = {
        [P in keyof T & keyof AggregateGaleria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGaleria[P]>
      : GetScalarType<T[P], AggregateGaleria[P]>
  }




  export type GaleriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GaleriaWhereInput
    orderBy?: GaleriaOrderByWithAggregationInput | GaleriaOrderByWithAggregationInput[]
    by: GaleriaScalarFieldEnum[] | GaleriaScalarFieldEnum
    having?: GaleriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GaleriaCountAggregateInputType | true
    _min?: GaleriaMinAggregateInputType
    _max?: GaleriaMaxAggregateInputType
  }

  export type GaleriaGroupByOutputType = {
    id: string
    nombreFoto: string
    url: string
    fotografoId: string
    _count: GaleriaCountAggregateOutputType | null
    _min: GaleriaMinAggregateOutputType | null
    _max: GaleriaMaxAggregateOutputType | null
  }

  type GetGaleriaGroupByPayload<T extends GaleriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GaleriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GaleriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GaleriaGroupByOutputType[P]>
            : GetScalarType<T[P], GaleriaGroupByOutputType[P]>
        }
      >
    >


  export type GaleriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreFoto?: boolean
    url?: boolean
    fotografoId?: boolean
    fotografo?: boolean | FotografoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galeria"]>



  export type GaleriaSelectScalar = {
    id?: boolean
    nombreFoto?: boolean
    url?: boolean
    fotografoId?: boolean
  }

  export type GaleriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombreFoto" | "url" | "fotografoId", ExtArgs["result"]["galeria"]>
  export type GaleriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotografo?: boolean | FotografoDefaultArgs<ExtArgs>
  }

  export type $GaleriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Galeria"
    objects: {
      fotografo: Prisma.$FotografoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombreFoto: string
      url: string
      fotografoId: string
    }, ExtArgs["result"]["galeria"]>
    composites: {}
  }

  type GaleriaGetPayload<S extends boolean | null | undefined | GaleriaDefaultArgs> = $Result.GetResult<Prisma.$GaleriaPayload, S>

  type GaleriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GaleriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GaleriaCountAggregateInputType | true
    }

  export interface GaleriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Galeria'], meta: { name: 'Galeria' } }
    /**
     * Find zero or one Galeria that matches the filter.
     * @param {GaleriaFindUniqueArgs} args - Arguments to find a Galeria
     * @example
     * // Get one Galeria
     * const galeria = await prisma.galeria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GaleriaFindUniqueArgs>(args: SelectSubset<T, GaleriaFindUniqueArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Galeria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GaleriaFindUniqueOrThrowArgs} args - Arguments to find a Galeria
     * @example
     * // Get one Galeria
     * const galeria = await prisma.galeria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GaleriaFindUniqueOrThrowArgs>(args: SelectSubset<T, GaleriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galeria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaFindFirstArgs} args - Arguments to find a Galeria
     * @example
     * // Get one Galeria
     * const galeria = await prisma.galeria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GaleriaFindFirstArgs>(args?: SelectSubset<T, GaleriaFindFirstArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galeria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaFindFirstOrThrowArgs} args - Arguments to find a Galeria
     * @example
     * // Get one Galeria
     * const galeria = await prisma.galeria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GaleriaFindFirstOrThrowArgs>(args?: SelectSubset<T, GaleriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galerias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galerias
     * const galerias = await prisma.galeria.findMany()
     * 
     * // Get first 10 Galerias
     * const galerias = await prisma.galeria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galeriaWithIdOnly = await prisma.galeria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GaleriaFindManyArgs>(args?: SelectSubset<T, GaleriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Galeria.
     * @param {GaleriaCreateArgs} args - Arguments to create a Galeria.
     * @example
     * // Create one Galeria
     * const Galeria = await prisma.galeria.create({
     *   data: {
     *     // ... data to create a Galeria
     *   }
     * })
     * 
     */
    create<T extends GaleriaCreateArgs>(args: SelectSubset<T, GaleriaCreateArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galerias.
     * @param {GaleriaCreateManyArgs} args - Arguments to create many Galerias.
     * @example
     * // Create many Galerias
     * const galeria = await prisma.galeria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GaleriaCreateManyArgs>(args?: SelectSubset<T, GaleriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Galeria.
     * @param {GaleriaDeleteArgs} args - Arguments to delete one Galeria.
     * @example
     * // Delete one Galeria
     * const Galeria = await prisma.galeria.delete({
     *   where: {
     *     // ... filter to delete one Galeria
     *   }
     * })
     * 
     */
    delete<T extends GaleriaDeleteArgs>(args: SelectSubset<T, GaleriaDeleteArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Galeria.
     * @param {GaleriaUpdateArgs} args - Arguments to update one Galeria.
     * @example
     * // Update one Galeria
     * const galeria = await prisma.galeria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GaleriaUpdateArgs>(args: SelectSubset<T, GaleriaUpdateArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galerias.
     * @param {GaleriaDeleteManyArgs} args - Arguments to filter Galerias to delete.
     * @example
     * // Delete a few Galerias
     * const { count } = await prisma.galeria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GaleriaDeleteManyArgs>(args?: SelectSubset<T, GaleriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galerias
     * const galeria = await prisma.galeria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GaleriaUpdateManyArgs>(args: SelectSubset<T, GaleriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Galeria.
     * @param {GaleriaUpsertArgs} args - Arguments to update or create a Galeria.
     * @example
     * // Update or create a Galeria
     * const galeria = await prisma.galeria.upsert({
     *   create: {
     *     // ... data to create a Galeria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Galeria we want to update
     *   }
     * })
     */
    upsert<T extends GaleriaUpsertArgs>(args: SelectSubset<T, GaleriaUpsertArgs<ExtArgs>>): Prisma__GaleriaClient<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaCountArgs} args - Arguments to filter Galerias to count.
     * @example
     * // Count the number of Galerias
     * const count = await prisma.galeria.count({
     *   where: {
     *     // ... the filter for the Galerias we want to count
     *   }
     * })
    **/
    count<T extends GaleriaCountArgs>(
      args?: Subset<T, GaleriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GaleriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Galeria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GaleriaAggregateArgs>(args: Subset<T, GaleriaAggregateArgs>): Prisma.PrismaPromise<GetGaleriaAggregateType<T>>

    /**
     * Group by Galeria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GaleriaGroupByArgs} args - Group by arguments.
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
      T extends GaleriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GaleriaGroupByArgs['orderBy'] }
        : { orderBy?: GaleriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GaleriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGaleriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Galeria model
   */
  readonly fields: GaleriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Galeria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GaleriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fotografo<T extends FotografoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FotografoDefaultArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Galeria model
   */
  interface GaleriaFieldRefs {
    readonly id: FieldRef<"Galeria", 'String'>
    readonly nombreFoto: FieldRef<"Galeria", 'String'>
    readonly url: FieldRef<"Galeria", 'String'>
    readonly fotografoId: FieldRef<"Galeria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Galeria findUnique
   */
  export type GaleriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeria
     */
    omit?: GaleriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GaleriaInclude<ExtArgs> | null
    /**
     * Filter, which Galeria to fetch.
     */
    where: GaleriaWhereUniqueInput
  }

  /**
   * Galeria findUniqueOrThrow
   */
  export type GaleriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeria
     */
    omit?: GaleriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GaleriaInclude<ExtArgs> | null
    /**
     * Filter, which Galeria to fetch.
     */
    where: GaleriaWhereUniqueInput
  }

  /**
   * Galeria findFirst
   */
  export type GaleriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeria
     */
    omit?: GaleriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GaleriaInclude<ExtArgs> | null
    /**
     * Filter, which Galeria to fetch.
     */
    where?: GaleriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galerias to fetch.
     */
    orderBy?: GaleriaOrderByWithRelationInput | GaleriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galerias.
     */
    cursor?: GaleriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galerias.
     */
    distinct?: GaleriaScalarFieldEnum | GaleriaScalarFieldEnum[]
  }

  /**
   * Galeria findFirstOrThrow
   */
  export type GaleriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeria
     */
    omit?: GaleriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GaleriaInclude<ExtArgs> | null
    /**
     * Filter, which Galeria to fetch.
     */
    where?: GaleriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galerias to fetch.
     */
    orderBy?: GaleriaOrderByWithRelationInput | GaleriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galerias.
     */
    cursor?: GaleriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galerias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galerias.
     */
    distinct?: GaleriaScalarFieldEnum | GaleriaScalarFieldEnum[]
  }

  /**
   * Galeria findMany
   */
  export type GaleriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeria
     */
    omit?: GaleriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GaleriaInclude<ExtArgs> | null
    /**
     * Filter, which Galerias to fetch.
     */
    where?: GaleriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galerias to fetch.
     */
    orderBy?: GaleriaOrderByWithRelationInput | GaleriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galerias.
     */
    cursor?: GaleriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galerias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galerias.
     */
    skip?: number
    distinct?: GaleriaScalarFieldEnum | GaleriaScalarFieldEnum[]
  }

  /**
   * Galeria create
   */
  export type GaleriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeria
     */
    omit?: GaleriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GaleriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Galeria.
     */
    data: XOR<GaleriaCreateInput, GaleriaUncheckedCreateInput>
  }

  /**
   * Galeria createMany
   */
  export type GaleriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galerias.
     */
    data: GaleriaCreateManyInput | GaleriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Galeria update
   */
  export type GaleriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeria
     */
    omit?: GaleriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GaleriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Galeria.
     */
    data: XOR<GaleriaUpdateInput, GaleriaUncheckedUpdateInput>
    /**
     * Choose, which Galeria to update.
     */
    where: GaleriaWhereUniqueInput
  }

  /**
   * Galeria updateMany
   */
  export type GaleriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galerias.
     */
    data: XOR<GaleriaUpdateManyMutationInput, GaleriaUncheckedUpdateManyInput>
    /**
     * Filter which Galerias to update
     */
    where?: GaleriaWhereInput
    /**
     * Limit how many Galerias to update.
     */
    limit?: number
  }

  /**
   * Galeria upsert
   */
  export type GaleriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeria
     */
    omit?: GaleriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GaleriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Galeria to update in case it exists.
     */
    where: GaleriaWhereUniqueInput
    /**
     * In case the Galeria found by the `where` argument doesn't exist, create a new Galeria with this data.
     */
    create: XOR<GaleriaCreateInput, GaleriaUncheckedCreateInput>
    /**
     * In case the Galeria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GaleriaUpdateInput, GaleriaUncheckedUpdateInput>
  }

  /**
   * Galeria delete
   */
  export type GaleriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeria
     */
    omit?: GaleriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GaleriaInclude<ExtArgs> | null
    /**
     * Filter which Galeria to delete.
     */
    where: GaleriaWhereUniqueInput
  }

  /**
   * Galeria deleteMany
   */
  export type GaleriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galerias to delete
     */
    where?: GaleriaWhereInput
    /**
     * Limit how many Galerias to delete.
     */
    limit?: number
  }

  /**
   * Galeria without action
   */
  export type GaleriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeria
     */
    omit?: GaleriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GaleriaInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    telefono: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    telefono: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    createAt?: true
    updateAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    createAt?: true
    updateAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    telefono?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nombre: string
    email: string
    telefono: string
    createAt: Date
    updateAt: Date
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    createAt?: boolean
    updateAt?: boolean
    reservas?: boolean | Cliente$reservasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    telefono?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "telefono" | "createAt" | "updateAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Cliente$reservasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      telefono: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Cliente$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly createAt: FieldRef<"Cliente", 'DateTime'>
    readonly updateAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.reservas
   */
  export type Cliente$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    activo: boolean | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    activo: boolean | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    activo: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    activo?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    activo?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    activo?: true
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
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    activo: boolean
    _count: CategoryCountAggregateOutputType | null
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
    name?: boolean
    activo?: boolean
    services?: boolean | Category$servicesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    activo?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "activo", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Category$servicesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      services: Prisma.$PhotoServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      activo: boolean
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Category$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Category$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly activo: FieldRef<"Category", 'Boolean'>
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Categories to update.
     */
    limit?: number
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.services
   */
  export type Category$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
    where?: PhotoServiceWhereInput
    orderBy?: PhotoServiceOrderByWithRelationInput | PhotoServiceOrderByWithRelationInput[]
    cursor?: PhotoServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoServiceScalarFieldEnum | PhotoServiceScalarFieldEnum[]
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Fotografo
   */

  export type AggregateFotografo = {
    _count: FotografoCountAggregateOutputType | null
    _min: FotografoMinAggregateOutputType | null
    _max: FotografoMaxAggregateOutputType | null
  }

  export type FotografoMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    nombre: string | null
    telefono: string | null
    bio: string | null
    url: string | null
    Foto: string | null
    disponible: boolean | null
  }

  export type FotografoMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    nombre: string | null
    telefono: string | null
    bio: string | null
    url: string | null
    Foto: string | null
    disponible: boolean | null
  }

  export type FotografoCountAggregateOutputType = {
    id: number
    usuarioId: number
    nombre: number
    telefono: number
    bio: number
    url: number
    Foto: number
    disponible: number
    _all: number
  }


  export type FotografoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    nombre?: true
    telefono?: true
    bio?: true
    url?: true
    Foto?: true
    disponible?: true
  }

  export type FotografoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    nombre?: true
    telefono?: true
    bio?: true
    url?: true
    Foto?: true
    disponible?: true
  }

  export type FotografoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    nombre?: true
    telefono?: true
    bio?: true
    url?: true
    Foto?: true
    disponible?: true
    _all?: true
  }

  export type FotografoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fotografo to aggregate.
     */
    where?: FotografoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotografos to fetch.
     */
    orderBy?: FotografoOrderByWithRelationInput | FotografoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotografoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotografos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotografos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fotografos
    **/
    _count?: true | FotografoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotografoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotografoMaxAggregateInputType
  }

  export type GetFotografoAggregateType<T extends FotografoAggregateArgs> = {
        [P in keyof T & keyof AggregateFotografo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFotografo[P]>
      : GetScalarType<T[P], AggregateFotografo[P]>
  }




  export type FotografoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotografoWhereInput
    orderBy?: FotografoOrderByWithAggregationInput | FotografoOrderByWithAggregationInput[]
    by: FotografoScalarFieldEnum[] | FotografoScalarFieldEnum
    having?: FotografoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotografoCountAggregateInputType | true
    _min?: FotografoMinAggregateInputType
    _max?: FotografoMaxAggregateInputType
  }

  export type FotografoGroupByOutputType = {
    id: string
    usuarioId: string
    nombre: string
    telefono: string | null
    bio: string | null
    url: string | null
    Foto: string
    disponible: boolean
    _count: FotografoCountAggregateOutputType | null
    _min: FotografoMinAggregateOutputType | null
    _max: FotografoMaxAggregateOutputType | null
  }

  type GetFotografoGroupByPayload<T extends FotografoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotografoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotografoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotografoGroupByOutputType[P]>
            : GetScalarType<T[P], FotografoGroupByOutputType[P]>
        }
      >
    >


  export type FotografoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    nombre?: boolean
    telefono?: boolean
    bio?: boolean
    url?: boolean
    Foto?: boolean
    disponible?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    reservas?: boolean | Fotografo$reservasArgs<ExtArgs>
    galeria?: boolean | Fotografo$galeriaArgs<ExtArgs>
    unavailabilities?: boolean | Fotografo$unavailabilitiesArgs<ExtArgs>
    servicios?: boolean | Fotografo$serviciosArgs<ExtArgs>
    _count?: boolean | FotografoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotografo"]>



  export type FotografoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    nombre?: boolean
    telefono?: boolean
    bio?: boolean
    url?: boolean
    Foto?: boolean
    disponible?: boolean
  }

  export type FotografoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "nombre" | "telefono" | "bio" | "url" | "Foto" | "disponible", ExtArgs["result"]["fotografo"]>
  export type FotografoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    reservas?: boolean | Fotografo$reservasArgs<ExtArgs>
    galeria?: boolean | Fotografo$galeriaArgs<ExtArgs>
    unavailabilities?: boolean | Fotografo$unavailabilitiesArgs<ExtArgs>
    servicios?: boolean | Fotografo$serviciosArgs<ExtArgs>
    _count?: boolean | FotografoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FotografoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fotografo"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      galeria: Prisma.$GaleriaPayload<ExtArgs>[]
      unavailabilities: Prisma.$UnavailabilityPayload<ExtArgs>[]
      servicios: Prisma.$FotografoServicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      nombre: string
      telefono: string | null
      bio: string | null
      url: string | null
      Foto: string
      disponible: boolean
    }, ExtArgs["result"]["fotografo"]>
    composites: {}
  }

  type FotografoGetPayload<S extends boolean | null | undefined | FotografoDefaultArgs> = $Result.GetResult<Prisma.$FotografoPayload, S>

  type FotografoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotografoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotografoCountAggregateInputType | true
    }

  export interface FotografoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fotografo'], meta: { name: 'Fotografo' } }
    /**
     * Find zero or one Fotografo that matches the filter.
     * @param {FotografoFindUniqueArgs} args - Arguments to find a Fotografo
     * @example
     * // Get one Fotografo
     * const fotografo = await prisma.fotografo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotografoFindUniqueArgs>(args: SelectSubset<T, FotografoFindUniqueArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fotografo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotografoFindUniqueOrThrowArgs} args - Arguments to find a Fotografo
     * @example
     * // Get one Fotografo
     * const fotografo = await prisma.fotografo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotografoFindUniqueOrThrowArgs>(args: SelectSubset<T, FotografoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fotografo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoFindFirstArgs} args - Arguments to find a Fotografo
     * @example
     * // Get one Fotografo
     * const fotografo = await prisma.fotografo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotografoFindFirstArgs>(args?: SelectSubset<T, FotografoFindFirstArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fotografo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoFindFirstOrThrowArgs} args - Arguments to find a Fotografo
     * @example
     * // Get one Fotografo
     * const fotografo = await prisma.fotografo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotografoFindFirstOrThrowArgs>(args?: SelectSubset<T, FotografoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fotografos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fotografos
     * const fotografos = await prisma.fotografo.findMany()
     * 
     * // Get first 10 Fotografos
     * const fotografos = await prisma.fotografo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotografoWithIdOnly = await prisma.fotografo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotografoFindManyArgs>(args?: SelectSubset<T, FotografoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fotografo.
     * @param {FotografoCreateArgs} args - Arguments to create a Fotografo.
     * @example
     * // Create one Fotografo
     * const Fotografo = await prisma.fotografo.create({
     *   data: {
     *     // ... data to create a Fotografo
     *   }
     * })
     * 
     */
    create<T extends FotografoCreateArgs>(args: SelectSubset<T, FotografoCreateArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fotografos.
     * @param {FotografoCreateManyArgs} args - Arguments to create many Fotografos.
     * @example
     * // Create many Fotografos
     * const fotografo = await prisma.fotografo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotografoCreateManyArgs>(args?: SelectSubset<T, FotografoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fotografo.
     * @param {FotografoDeleteArgs} args - Arguments to delete one Fotografo.
     * @example
     * // Delete one Fotografo
     * const Fotografo = await prisma.fotografo.delete({
     *   where: {
     *     // ... filter to delete one Fotografo
     *   }
     * })
     * 
     */
    delete<T extends FotografoDeleteArgs>(args: SelectSubset<T, FotografoDeleteArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fotografo.
     * @param {FotografoUpdateArgs} args - Arguments to update one Fotografo.
     * @example
     * // Update one Fotografo
     * const fotografo = await prisma.fotografo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotografoUpdateArgs>(args: SelectSubset<T, FotografoUpdateArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fotografos.
     * @param {FotografoDeleteManyArgs} args - Arguments to filter Fotografos to delete.
     * @example
     * // Delete a few Fotografos
     * const { count } = await prisma.fotografo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotografoDeleteManyArgs>(args?: SelectSubset<T, FotografoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotografos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fotografos
     * const fotografo = await prisma.fotografo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotografoUpdateManyArgs>(args: SelectSubset<T, FotografoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fotografo.
     * @param {FotografoUpsertArgs} args - Arguments to update or create a Fotografo.
     * @example
     * // Update or create a Fotografo
     * const fotografo = await prisma.fotografo.upsert({
     *   create: {
     *     // ... data to create a Fotografo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fotografo we want to update
     *   }
     * })
     */
    upsert<T extends FotografoUpsertArgs>(args: SelectSubset<T, FotografoUpsertArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fotografos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoCountArgs} args - Arguments to filter Fotografos to count.
     * @example
     * // Count the number of Fotografos
     * const count = await prisma.fotografo.count({
     *   where: {
     *     // ... the filter for the Fotografos we want to count
     *   }
     * })
    **/
    count<T extends FotografoCountArgs>(
      args?: Subset<T, FotografoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotografoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fotografo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotografoAggregateArgs>(args: Subset<T, FotografoAggregateArgs>): Prisma.PrismaPromise<GetFotografoAggregateType<T>>

    /**
     * Group by Fotografo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoGroupByArgs} args - Group by arguments.
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
      T extends FotografoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotografoGroupByArgs['orderBy'] }
        : { orderBy?: FotografoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotografoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotografoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fotografo model
   */
  readonly fields: FotografoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fotografo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotografoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservas<T extends Fotografo$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Fotografo$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    galeria<T extends Fotografo$galeriaArgs<ExtArgs> = {}>(args?: Subset<T, Fotografo$galeriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unavailabilities<T extends Fotografo$unavailabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Fotografo$unavailabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicios<T extends Fotografo$serviciosArgs<ExtArgs> = {}>(args?: Subset<T, Fotografo$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotografoServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fotografo model
   */
  interface FotografoFieldRefs {
    readonly id: FieldRef<"Fotografo", 'String'>
    readonly usuarioId: FieldRef<"Fotografo", 'String'>
    readonly nombre: FieldRef<"Fotografo", 'String'>
    readonly telefono: FieldRef<"Fotografo", 'String'>
    readonly bio: FieldRef<"Fotografo", 'String'>
    readonly url: FieldRef<"Fotografo", 'String'>
    readonly Foto: FieldRef<"Fotografo", 'String'>
    readonly disponible: FieldRef<"Fotografo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Fotografo findUnique
   */
  export type FotografoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografo
     */
    select?: FotografoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografo
     */
    omit?: FotografoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoInclude<ExtArgs> | null
    /**
     * Filter, which Fotografo to fetch.
     */
    where: FotografoWhereUniqueInput
  }

  /**
   * Fotografo findUniqueOrThrow
   */
  export type FotografoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografo
     */
    select?: FotografoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografo
     */
    omit?: FotografoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoInclude<ExtArgs> | null
    /**
     * Filter, which Fotografo to fetch.
     */
    where: FotografoWhereUniqueInput
  }

  /**
   * Fotografo findFirst
   */
  export type FotografoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografo
     */
    select?: FotografoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografo
     */
    omit?: FotografoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoInclude<ExtArgs> | null
    /**
     * Filter, which Fotografo to fetch.
     */
    where?: FotografoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotografos to fetch.
     */
    orderBy?: FotografoOrderByWithRelationInput | FotografoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotografos.
     */
    cursor?: FotografoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotografos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotografos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotografos.
     */
    distinct?: FotografoScalarFieldEnum | FotografoScalarFieldEnum[]
  }

  /**
   * Fotografo findFirstOrThrow
   */
  export type FotografoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografo
     */
    select?: FotografoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografo
     */
    omit?: FotografoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoInclude<ExtArgs> | null
    /**
     * Filter, which Fotografo to fetch.
     */
    where?: FotografoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotografos to fetch.
     */
    orderBy?: FotografoOrderByWithRelationInput | FotografoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotografos.
     */
    cursor?: FotografoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotografos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotografos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotografos.
     */
    distinct?: FotografoScalarFieldEnum | FotografoScalarFieldEnum[]
  }

  /**
   * Fotografo findMany
   */
  export type FotografoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografo
     */
    select?: FotografoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografo
     */
    omit?: FotografoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoInclude<ExtArgs> | null
    /**
     * Filter, which Fotografos to fetch.
     */
    where?: FotografoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotografos to fetch.
     */
    orderBy?: FotografoOrderByWithRelationInput | FotografoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fotografos.
     */
    cursor?: FotografoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotografos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotografos.
     */
    skip?: number
    distinct?: FotografoScalarFieldEnum | FotografoScalarFieldEnum[]
  }

  /**
   * Fotografo create
   */
  export type FotografoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografo
     */
    select?: FotografoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografo
     */
    omit?: FotografoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoInclude<ExtArgs> | null
    /**
     * The data needed to create a Fotografo.
     */
    data: XOR<FotografoCreateInput, FotografoUncheckedCreateInput>
  }

  /**
   * Fotografo createMany
   */
  export type FotografoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fotografos.
     */
    data: FotografoCreateManyInput | FotografoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fotografo update
   */
  export type FotografoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografo
     */
    select?: FotografoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografo
     */
    omit?: FotografoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoInclude<ExtArgs> | null
    /**
     * The data needed to update a Fotografo.
     */
    data: XOR<FotografoUpdateInput, FotografoUncheckedUpdateInput>
    /**
     * Choose, which Fotografo to update.
     */
    where: FotografoWhereUniqueInput
  }

  /**
   * Fotografo updateMany
   */
  export type FotografoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fotografos.
     */
    data: XOR<FotografoUpdateManyMutationInput, FotografoUncheckedUpdateManyInput>
    /**
     * Filter which Fotografos to update
     */
    where?: FotografoWhereInput
    /**
     * Limit how many Fotografos to update.
     */
    limit?: number
  }

  /**
   * Fotografo upsert
   */
  export type FotografoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografo
     */
    select?: FotografoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografo
     */
    omit?: FotografoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoInclude<ExtArgs> | null
    /**
     * The filter to search for the Fotografo to update in case it exists.
     */
    where: FotografoWhereUniqueInput
    /**
     * In case the Fotografo found by the `where` argument doesn't exist, create a new Fotografo with this data.
     */
    create: XOR<FotografoCreateInput, FotografoUncheckedCreateInput>
    /**
     * In case the Fotografo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotografoUpdateInput, FotografoUncheckedUpdateInput>
  }

  /**
   * Fotografo delete
   */
  export type FotografoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografo
     */
    select?: FotografoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografo
     */
    omit?: FotografoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoInclude<ExtArgs> | null
    /**
     * Filter which Fotografo to delete.
     */
    where: FotografoWhereUniqueInput
  }

  /**
   * Fotografo deleteMany
   */
  export type FotografoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fotografos to delete
     */
    where?: FotografoWhereInput
    /**
     * Limit how many Fotografos to delete.
     */
    limit?: number
  }

  /**
   * Fotografo.reservas
   */
  export type Fotografo$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Fotografo.galeria
   */
  export type Fotografo$galeriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galeria
     */
    select?: GaleriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galeria
     */
    omit?: GaleriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GaleriaInclude<ExtArgs> | null
    where?: GaleriaWhereInput
    orderBy?: GaleriaOrderByWithRelationInput | GaleriaOrderByWithRelationInput[]
    cursor?: GaleriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GaleriaScalarFieldEnum | GaleriaScalarFieldEnum[]
  }

  /**
   * Fotografo.unavailabilities
   */
  export type Fotografo$unavailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    where?: UnavailabilityWhereInput
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    cursor?: UnavailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnavailabilityScalarFieldEnum | UnavailabilityScalarFieldEnum[]
  }

  /**
   * Fotografo.servicios
   */
  export type Fotografo$serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
    where?: FotografoServicioWhereInput
    orderBy?: FotografoServicioOrderByWithRelationInput | FotografoServicioOrderByWithRelationInput[]
    cursor?: FotografoServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotografoServicioScalarFieldEnum | FotografoServicioScalarFieldEnum[]
  }

  /**
   * Fotografo without action
   */
  export type FotografoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fotografo
     */
    select?: FotografoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fotografo
     */
    omit?: FotografoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoInclude<ExtArgs> | null
  }


  /**
   * Model PhotoService
   */

  export type AggregatePhotoService = {
    _count: PhotoServiceCountAggregateOutputType | null
    _avg: PhotoServiceAvgAggregateOutputType | null
    _sum: PhotoServiceSumAggregateOutputType | null
    _min: PhotoServiceMinAggregateOutputType | null
    _max: PhotoServiceMaxAggregateOutputType | null
  }

  export type PhotoServiceAvgAggregateOutputType = {
    precio: number | null
  }

  export type PhotoServiceSumAggregateOutputType = {
    precio: number | null
  }

  export type PhotoServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    img: string | null
    description: string | null
    precio: number | null
    activo: boolean | null
    categoryId: string | null
  }

  export type PhotoServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    img: string | null
    description: string | null
    precio: number | null
    activo: boolean | null
    categoryId: string | null
  }

  export type PhotoServiceCountAggregateOutputType = {
    id: number
    name: number
    img: number
    description: number
    precio: number
    activo: number
    categoryId: number
    _all: number
  }


  export type PhotoServiceAvgAggregateInputType = {
    precio?: true
  }

  export type PhotoServiceSumAggregateInputType = {
    precio?: true
  }

  export type PhotoServiceMinAggregateInputType = {
    id?: true
    name?: true
    img?: true
    description?: true
    precio?: true
    activo?: true
    categoryId?: true
  }

  export type PhotoServiceMaxAggregateInputType = {
    id?: true
    name?: true
    img?: true
    description?: true
    precio?: true
    activo?: true
    categoryId?: true
  }

  export type PhotoServiceCountAggregateInputType = {
    id?: true
    name?: true
    img?: true
    description?: true
    precio?: true
    activo?: true
    categoryId?: true
    _all?: true
  }

  export type PhotoServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoService to aggregate.
     */
    where?: PhotoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoServices to fetch.
     */
    orderBy?: PhotoServiceOrderByWithRelationInput | PhotoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoServices
    **/
    _count?: true | PhotoServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoServiceMaxAggregateInputType
  }

  export type GetPhotoServiceAggregateType<T extends PhotoServiceAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoService[P]>
      : GetScalarType<T[P], AggregatePhotoService[P]>
  }




  export type PhotoServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoServiceWhereInput
    orderBy?: PhotoServiceOrderByWithAggregationInput | PhotoServiceOrderByWithAggregationInput[]
    by: PhotoServiceScalarFieldEnum[] | PhotoServiceScalarFieldEnum
    having?: PhotoServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoServiceCountAggregateInputType | true
    _avg?: PhotoServiceAvgAggregateInputType
    _sum?: PhotoServiceSumAggregateInputType
    _min?: PhotoServiceMinAggregateInputType
    _max?: PhotoServiceMaxAggregateInputType
  }

  export type PhotoServiceGroupByOutputType = {
    id: string
    name: string
    img: string
    description: string
    precio: number
    activo: boolean
    categoryId: string
    _count: PhotoServiceCountAggregateOutputType | null
    _avg: PhotoServiceAvgAggregateOutputType | null
    _sum: PhotoServiceSumAggregateOutputType | null
    _min: PhotoServiceMinAggregateOutputType | null
    _max: PhotoServiceMaxAggregateOutputType | null
  }

  type GetPhotoServiceGroupByPayload<T extends PhotoServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoServiceGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoServiceGroupByOutputType[P]>
        }
      >
    >


  export type PhotoServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img?: boolean
    description?: boolean
    precio?: boolean
    activo?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    fotografos?: boolean | PhotoService$fotografosArgs<ExtArgs>
    reservas?: boolean | PhotoService$reservasArgs<ExtArgs>
    _count?: boolean | PhotoServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoService"]>



  export type PhotoServiceSelectScalar = {
    id?: boolean
    name?: boolean
    img?: boolean
    description?: boolean
    precio?: boolean
    activo?: boolean
    categoryId?: boolean
  }

  export type PhotoServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "img" | "description" | "precio" | "activo" | "categoryId", ExtArgs["result"]["photoService"]>
  export type PhotoServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    fotografos?: boolean | PhotoService$fotografosArgs<ExtArgs>
    reservas?: boolean | PhotoService$reservasArgs<ExtArgs>
    _count?: boolean | PhotoServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PhotoServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoService"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      fotografos: Prisma.$FotografoServicioPayload<ExtArgs>[]
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      img: string
      description: string
      precio: number
      activo: boolean
      categoryId: string
    }, ExtArgs["result"]["photoService"]>
    composites: {}
  }

  type PhotoServiceGetPayload<S extends boolean | null | undefined | PhotoServiceDefaultArgs> = $Result.GetResult<Prisma.$PhotoServicePayload, S>

  type PhotoServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoServiceCountAggregateInputType | true
    }

  export interface PhotoServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoService'], meta: { name: 'PhotoService' } }
    /**
     * Find zero or one PhotoService that matches the filter.
     * @param {PhotoServiceFindUniqueArgs} args - Arguments to find a PhotoService
     * @example
     * // Get one PhotoService
     * const photoService = await prisma.photoService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoServiceFindUniqueArgs>(args: SelectSubset<T, PhotoServiceFindUniqueArgs<ExtArgs>>): Prisma__PhotoServiceClient<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhotoService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoServiceFindUniqueOrThrowArgs} args - Arguments to find a PhotoService
     * @example
     * // Get one PhotoService
     * const photoService = await prisma.photoService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoServiceClient<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoServiceFindFirstArgs} args - Arguments to find a PhotoService
     * @example
     * // Get one PhotoService
     * const photoService = await prisma.photoService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoServiceFindFirstArgs>(args?: SelectSubset<T, PhotoServiceFindFirstArgs<ExtArgs>>): Prisma__PhotoServiceClient<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoServiceFindFirstOrThrowArgs} args - Arguments to find a PhotoService
     * @example
     * // Get one PhotoService
     * const photoService = await prisma.photoService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoServiceClient<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhotoServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoServices
     * const photoServices = await prisma.photoService.findMany()
     * 
     * // Get first 10 PhotoServices
     * const photoServices = await prisma.photoService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoServiceWithIdOnly = await prisma.photoService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoServiceFindManyArgs>(args?: SelectSubset<T, PhotoServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhotoService.
     * @param {PhotoServiceCreateArgs} args - Arguments to create a PhotoService.
     * @example
     * // Create one PhotoService
     * const PhotoService = await prisma.photoService.create({
     *   data: {
     *     // ... data to create a PhotoService
     *   }
     * })
     * 
     */
    create<T extends PhotoServiceCreateArgs>(args: SelectSubset<T, PhotoServiceCreateArgs<ExtArgs>>): Prisma__PhotoServiceClient<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhotoServices.
     * @param {PhotoServiceCreateManyArgs} args - Arguments to create many PhotoServices.
     * @example
     * // Create many PhotoServices
     * const photoService = await prisma.photoService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoServiceCreateManyArgs>(args?: SelectSubset<T, PhotoServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PhotoService.
     * @param {PhotoServiceDeleteArgs} args - Arguments to delete one PhotoService.
     * @example
     * // Delete one PhotoService
     * const PhotoService = await prisma.photoService.delete({
     *   where: {
     *     // ... filter to delete one PhotoService
     *   }
     * })
     * 
     */
    delete<T extends PhotoServiceDeleteArgs>(args: SelectSubset<T, PhotoServiceDeleteArgs<ExtArgs>>): Prisma__PhotoServiceClient<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhotoService.
     * @param {PhotoServiceUpdateArgs} args - Arguments to update one PhotoService.
     * @example
     * // Update one PhotoService
     * const photoService = await prisma.photoService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoServiceUpdateArgs>(args: SelectSubset<T, PhotoServiceUpdateArgs<ExtArgs>>): Prisma__PhotoServiceClient<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhotoServices.
     * @param {PhotoServiceDeleteManyArgs} args - Arguments to filter PhotoServices to delete.
     * @example
     * // Delete a few PhotoServices
     * const { count } = await prisma.photoService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoServiceDeleteManyArgs>(args?: SelectSubset<T, PhotoServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoServices
     * const photoService = await prisma.photoService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoServiceUpdateManyArgs>(args: SelectSubset<T, PhotoServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhotoService.
     * @param {PhotoServiceUpsertArgs} args - Arguments to update or create a PhotoService.
     * @example
     * // Update or create a PhotoService
     * const photoService = await prisma.photoService.upsert({
     *   create: {
     *     // ... data to create a PhotoService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoService we want to update
     *   }
     * })
     */
    upsert<T extends PhotoServiceUpsertArgs>(args: SelectSubset<T, PhotoServiceUpsertArgs<ExtArgs>>): Prisma__PhotoServiceClient<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhotoServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoServiceCountArgs} args - Arguments to filter PhotoServices to count.
     * @example
     * // Count the number of PhotoServices
     * const count = await prisma.photoService.count({
     *   where: {
     *     // ... the filter for the PhotoServices we want to count
     *   }
     * })
    **/
    count<T extends PhotoServiceCountArgs>(
      args?: Subset<T, PhotoServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoServiceAggregateArgs>(args: Subset<T, PhotoServiceAggregateArgs>): Prisma.PrismaPromise<GetPhotoServiceAggregateType<T>>

    /**
     * Group by PhotoService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoServiceGroupByArgs} args - Group by arguments.
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
      T extends PhotoServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoServiceGroupByArgs['orderBy'] }
        : { orderBy?: PhotoServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoService model
   */
  readonly fields: PhotoServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fotografos<T extends PhotoService$fotografosArgs<ExtArgs> = {}>(args?: Subset<T, PhotoService$fotografosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotografoServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservas<T extends PhotoService$reservasArgs<ExtArgs> = {}>(args?: Subset<T, PhotoService$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PhotoService model
   */
  interface PhotoServiceFieldRefs {
    readonly id: FieldRef<"PhotoService", 'String'>
    readonly name: FieldRef<"PhotoService", 'String'>
    readonly img: FieldRef<"PhotoService", 'String'>
    readonly description: FieldRef<"PhotoService", 'String'>
    readonly precio: FieldRef<"PhotoService", 'Float'>
    readonly activo: FieldRef<"PhotoService", 'Boolean'>
    readonly categoryId: FieldRef<"PhotoService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PhotoService findUnique
   */
  export type PhotoServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
    /**
     * Filter, which PhotoService to fetch.
     */
    where: PhotoServiceWhereUniqueInput
  }

  /**
   * PhotoService findUniqueOrThrow
   */
  export type PhotoServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
    /**
     * Filter, which PhotoService to fetch.
     */
    where: PhotoServiceWhereUniqueInput
  }

  /**
   * PhotoService findFirst
   */
  export type PhotoServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
    /**
     * Filter, which PhotoService to fetch.
     */
    where?: PhotoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoServices to fetch.
     */
    orderBy?: PhotoServiceOrderByWithRelationInput | PhotoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoServices.
     */
    cursor?: PhotoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoServices.
     */
    distinct?: PhotoServiceScalarFieldEnum | PhotoServiceScalarFieldEnum[]
  }

  /**
   * PhotoService findFirstOrThrow
   */
  export type PhotoServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
    /**
     * Filter, which PhotoService to fetch.
     */
    where?: PhotoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoServices to fetch.
     */
    orderBy?: PhotoServiceOrderByWithRelationInput | PhotoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoServices.
     */
    cursor?: PhotoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoServices.
     */
    distinct?: PhotoServiceScalarFieldEnum | PhotoServiceScalarFieldEnum[]
  }

  /**
   * PhotoService findMany
   */
  export type PhotoServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
    /**
     * Filter, which PhotoServices to fetch.
     */
    where?: PhotoServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoServices to fetch.
     */
    orderBy?: PhotoServiceOrderByWithRelationInput | PhotoServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoServices.
     */
    cursor?: PhotoServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoServices.
     */
    skip?: number
    distinct?: PhotoServiceScalarFieldEnum | PhotoServiceScalarFieldEnum[]
  }

  /**
   * PhotoService create
   */
  export type PhotoServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoService.
     */
    data: XOR<PhotoServiceCreateInput, PhotoServiceUncheckedCreateInput>
  }

  /**
   * PhotoService createMany
   */
  export type PhotoServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoServices.
     */
    data: PhotoServiceCreateManyInput | PhotoServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotoService update
   */
  export type PhotoServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoService.
     */
    data: XOR<PhotoServiceUpdateInput, PhotoServiceUncheckedUpdateInput>
    /**
     * Choose, which PhotoService to update.
     */
    where: PhotoServiceWhereUniqueInput
  }

  /**
   * PhotoService updateMany
   */
  export type PhotoServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoServices.
     */
    data: XOR<PhotoServiceUpdateManyMutationInput, PhotoServiceUncheckedUpdateManyInput>
    /**
     * Filter which PhotoServices to update
     */
    where?: PhotoServiceWhereInput
    /**
     * Limit how many PhotoServices to update.
     */
    limit?: number
  }

  /**
   * PhotoService upsert
   */
  export type PhotoServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoService to update in case it exists.
     */
    where: PhotoServiceWhereUniqueInput
    /**
     * In case the PhotoService found by the `where` argument doesn't exist, create a new PhotoService with this data.
     */
    create: XOR<PhotoServiceCreateInput, PhotoServiceUncheckedCreateInput>
    /**
     * In case the PhotoService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoServiceUpdateInput, PhotoServiceUncheckedUpdateInput>
  }

  /**
   * PhotoService delete
   */
  export type PhotoServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
    /**
     * Filter which PhotoService to delete.
     */
    where: PhotoServiceWhereUniqueInput
  }

  /**
   * PhotoService deleteMany
   */
  export type PhotoServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoServices to delete
     */
    where?: PhotoServiceWhereInput
    /**
     * Limit how many PhotoServices to delete.
     */
    limit?: number
  }

  /**
   * PhotoService.fotografos
   */
  export type PhotoService$fotografosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
    where?: FotografoServicioWhereInput
    orderBy?: FotografoServicioOrderByWithRelationInput | FotografoServicioOrderByWithRelationInput[]
    cursor?: FotografoServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotografoServicioScalarFieldEnum | FotografoServicioScalarFieldEnum[]
  }

  /**
   * PhotoService.reservas
   */
  export type PhotoService$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * PhotoService without action
   */
  export type PhotoServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
  }


  /**
   * Model FotografoServicio
   */

  export type AggregateFotografoServicio = {
    _count: FotografoServicioCountAggregateOutputType | null
    _min: FotografoServicioMinAggregateOutputType | null
    _max: FotografoServicioMaxAggregateOutputType | null
  }

  export type FotografoServicioMinAggregateOutputType = {
    fotografoId: string | null
    servicioId: string | null
  }

  export type FotografoServicioMaxAggregateOutputType = {
    fotografoId: string | null
    servicioId: string | null
  }

  export type FotografoServicioCountAggregateOutputType = {
    fotografoId: number
    servicioId: number
    _all: number
  }


  export type FotografoServicioMinAggregateInputType = {
    fotografoId?: true
    servicioId?: true
  }

  export type FotografoServicioMaxAggregateInputType = {
    fotografoId?: true
    servicioId?: true
  }

  export type FotografoServicioCountAggregateInputType = {
    fotografoId?: true
    servicioId?: true
    _all?: true
  }

  export type FotografoServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotografoServicio to aggregate.
     */
    where?: FotografoServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotografoServicios to fetch.
     */
    orderBy?: FotografoServicioOrderByWithRelationInput | FotografoServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotografoServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotografoServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotografoServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FotografoServicios
    **/
    _count?: true | FotografoServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotografoServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotografoServicioMaxAggregateInputType
  }

  export type GetFotografoServicioAggregateType<T extends FotografoServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateFotografoServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFotografoServicio[P]>
      : GetScalarType<T[P], AggregateFotografoServicio[P]>
  }




  export type FotografoServicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotografoServicioWhereInput
    orderBy?: FotografoServicioOrderByWithAggregationInput | FotografoServicioOrderByWithAggregationInput[]
    by: FotografoServicioScalarFieldEnum[] | FotografoServicioScalarFieldEnum
    having?: FotografoServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotografoServicioCountAggregateInputType | true
    _min?: FotografoServicioMinAggregateInputType
    _max?: FotografoServicioMaxAggregateInputType
  }

  export type FotografoServicioGroupByOutputType = {
    fotografoId: string
    servicioId: string
    _count: FotografoServicioCountAggregateOutputType | null
    _min: FotografoServicioMinAggregateOutputType | null
    _max: FotografoServicioMaxAggregateOutputType | null
  }

  type GetFotografoServicioGroupByPayload<T extends FotografoServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotografoServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotografoServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotografoServicioGroupByOutputType[P]>
            : GetScalarType<T[P], FotografoServicioGroupByOutputType[P]>
        }
      >
    >


  export type FotografoServicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fotografoId?: boolean
    servicioId?: boolean
    fotografo?: boolean | FotografoDefaultArgs<ExtArgs>
    servicio?: boolean | PhotoServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotografoServicio"]>



  export type FotografoServicioSelectScalar = {
    fotografoId?: boolean
    servicioId?: boolean
  }

  export type FotografoServicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fotografoId" | "servicioId", ExtArgs["result"]["fotografoServicio"]>
  export type FotografoServicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotografo?: boolean | FotografoDefaultArgs<ExtArgs>
    servicio?: boolean | PhotoServiceDefaultArgs<ExtArgs>
  }

  export type $FotografoServicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FotografoServicio"
    objects: {
      fotografo: Prisma.$FotografoPayload<ExtArgs>
      servicio: Prisma.$PhotoServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fotografoId: string
      servicioId: string
    }, ExtArgs["result"]["fotografoServicio"]>
    composites: {}
  }

  type FotografoServicioGetPayload<S extends boolean | null | undefined | FotografoServicioDefaultArgs> = $Result.GetResult<Prisma.$FotografoServicioPayload, S>

  type FotografoServicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotografoServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotografoServicioCountAggregateInputType | true
    }

  export interface FotografoServicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FotografoServicio'], meta: { name: 'FotografoServicio' } }
    /**
     * Find zero or one FotografoServicio that matches the filter.
     * @param {FotografoServicioFindUniqueArgs} args - Arguments to find a FotografoServicio
     * @example
     * // Get one FotografoServicio
     * const fotografoServicio = await prisma.fotografoServicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotografoServicioFindUniqueArgs>(args: SelectSubset<T, FotografoServicioFindUniqueArgs<ExtArgs>>): Prisma__FotografoServicioClient<$Result.GetResult<Prisma.$FotografoServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FotografoServicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotografoServicioFindUniqueOrThrowArgs} args - Arguments to find a FotografoServicio
     * @example
     * // Get one FotografoServicio
     * const fotografoServicio = await prisma.fotografoServicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotografoServicioFindUniqueOrThrowArgs>(args: SelectSubset<T, FotografoServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotografoServicioClient<$Result.GetResult<Prisma.$FotografoServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotografoServicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoServicioFindFirstArgs} args - Arguments to find a FotografoServicio
     * @example
     * // Get one FotografoServicio
     * const fotografoServicio = await prisma.fotografoServicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotografoServicioFindFirstArgs>(args?: SelectSubset<T, FotografoServicioFindFirstArgs<ExtArgs>>): Prisma__FotografoServicioClient<$Result.GetResult<Prisma.$FotografoServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotografoServicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoServicioFindFirstOrThrowArgs} args - Arguments to find a FotografoServicio
     * @example
     * // Get one FotografoServicio
     * const fotografoServicio = await prisma.fotografoServicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotografoServicioFindFirstOrThrowArgs>(args?: SelectSubset<T, FotografoServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotografoServicioClient<$Result.GetResult<Prisma.$FotografoServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FotografoServicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoServicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FotografoServicios
     * const fotografoServicios = await prisma.fotografoServicio.findMany()
     * 
     * // Get first 10 FotografoServicios
     * const fotografoServicios = await prisma.fotografoServicio.findMany({ take: 10 })
     * 
     * // Only select the `fotografoId`
     * const fotografoServicioWithFotografoIdOnly = await prisma.fotografoServicio.findMany({ select: { fotografoId: true } })
     * 
     */
    findMany<T extends FotografoServicioFindManyArgs>(args?: SelectSubset<T, FotografoServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotografoServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FotografoServicio.
     * @param {FotografoServicioCreateArgs} args - Arguments to create a FotografoServicio.
     * @example
     * // Create one FotografoServicio
     * const FotografoServicio = await prisma.fotografoServicio.create({
     *   data: {
     *     // ... data to create a FotografoServicio
     *   }
     * })
     * 
     */
    create<T extends FotografoServicioCreateArgs>(args: SelectSubset<T, FotografoServicioCreateArgs<ExtArgs>>): Prisma__FotografoServicioClient<$Result.GetResult<Prisma.$FotografoServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FotografoServicios.
     * @param {FotografoServicioCreateManyArgs} args - Arguments to create many FotografoServicios.
     * @example
     * // Create many FotografoServicios
     * const fotografoServicio = await prisma.fotografoServicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotografoServicioCreateManyArgs>(args?: SelectSubset<T, FotografoServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FotografoServicio.
     * @param {FotografoServicioDeleteArgs} args - Arguments to delete one FotografoServicio.
     * @example
     * // Delete one FotografoServicio
     * const FotografoServicio = await prisma.fotografoServicio.delete({
     *   where: {
     *     // ... filter to delete one FotografoServicio
     *   }
     * })
     * 
     */
    delete<T extends FotografoServicioDeleteArgs>(args: SelectSubset<T, FotografoServicioDeleteArgs<ExtArgs>>): Prisma__FotografoServicioClient<$Result.GetResult<Prisma.$FotografoServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FotografoServicio.
     * @param {FotografoServicioUpdateArgs} args - Arguments to update one FotografoServicio.
     * @example
     * // Update one FotografoServicio
     * const fotografoServicio = await prisma.fotografoServicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotografoServicioUpdateArgs>(args: SelectSubset<T, FotografoServicioUpdateArgs<ExtArgs>>): Prisma__FotografoServicioClient<$Result.GetResult<Prisma.$FotografoServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FotografoServicios.
     * @param {FotografoServicioDeleteManyArgs} args - Arguments to filter FotografoServicios to delete.
     * @example
     * // Delete a few FotografoServicios
     * const { count } = await prisma.fotografoServicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotografoServicioDeleteManyArgs>(args?: SelectSubset<T, FotografoServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotografoServicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FotografoServicios
     * const fotografoServicio = await prisma.fotografoServicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotografoServicioUpdateManyArgs>(args: SelectSubset<T, FotografoServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FotografoServicio.
     * @param {FotografoServicioUpsertArgs} args - Arguments to update or create a FotografoServicio.
     * @example
     * // Update or create a FotografoServicio
     * const fotografoServicio = await prisma.fotografoServicio.upsert({
     *   create: {
     *     // ... data to create a FotografoServicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FotografoServicio we want to update
     *   }
     * })
     */
    upsert<T extends FotografoServicioUpsertArgs>(args: SelectSubset<T, FotografoServicioUpsertArgs<ExtArgs>>): Prisma__FotografoServicioClient<$Result.GetResult<Prisma.$FotografoServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FotografoServicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoServicioCountArgs} args - Arguments to filter FotografoServicios to count.
     * @example
     * // Count the number of FotografoServicios
     * const count = await prisma.fotografoServicio.count({
     *   where: {
     *     // ... the filter for the FotografoServicios we want to count
     *   }
     * })
    **/
    count<T extends FotografoServicioCountArgs>(
      args?: Subset<T, FotografoServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotografoServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FotografoServicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotografoServicioAggregateArgs>(args: Subset<T, FotografoServicioAggregateArgs>): Prisma.PrismaPromise<GetFotografoServicioAggregateType<T>>

    /**
     * Group by FotografoServicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotografoServicioGroupByArgs} args - Group by arguments.
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
      T extends FotografoServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotografoServicioGroupByArgs['orderBy'] }
        : { orderBy?: FotografoServicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotografoServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotografoServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FotografoServicio model
   */
  readonly fields: FotografoServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FotografoServicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotografoServicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fotografo<T extends FotografoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FotografoDefaultArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicio<T extends PhotoServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhotoServiceDefaultArgs<ExtArgs>>): Prisma__PhotoServiceClient<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FotografoServicio model
   */
  interface FotografoServicioFieldRefs {
    readonly fotografoId: FieldRef<"FotografoServicio", 'String'>
    readonly servicioId: FieldRef<"FotografoServicio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FotografoServicio findUnique
   */
  export type FotografoServicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
    /**
     * Filter, which FotografoServicio to fetch.
     */
    where: FotografoServicioWhereUniqueInput
  }

  /**
   * FotografoServicio findUniqueOrThrow
   */
  export type FotografoServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
    /**
     * Filter, which FotografoServicio to fetch.
     */
    where: FotografoServicioWhereUniqueInput
  }

  /**
   * FotografoServicio findFirst
   */
  export type FotografoServicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
    /**
     * Filter, which FotografoServicio to fetch.
     */
    where?: FotografoServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotografoServicios to fetch.
     */
    orderBy?: FotografoServicioOrderByWithRelationInput | FotografoServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotografoServicios.
     */
    cursor?: FotografoServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotografoServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotografoServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotografoServicios.
     */
    distinct?: FotografoServicioScalarFieldEnum | FotografoServicioScalarFieldEnum[]
  }

  /**
   * FotografoServicio findFirstOrThrow
   */
  export type FotografoServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
    /**
     * Filter, which FotografoServicio to fetch.
     */
    where?: FotografoServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotografoServicios to fetch.
     */
    orderBy?: FotografoServicioOrderByWithRelationInput | FotografoServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotografoServicios.
     */
    cursor?: FotografoServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotografoServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotografoServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotografoServicios.
     */
    distinct?: FotografoServicioScalarFieldEnum | FotografoServicioScalarFieldEnum[]
  }

  /**
   * FotografoServicio findMany
   */
  export type FotografoServicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
    /**
     * Filter, which FotografoServicios to fetch.
     */
    where?: FotografoServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotografoServicios to fetch.
     */
    orderBy?: FotografoServicioOrderByWithRelationInput | FotografoServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FotografoServicios.
     */
    cursor?: FotografoServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotografoServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotografoServicios.
     */
    skip?: number
    distinct?: FotografoServicioScalarFieldEnum | FotografoServicioScalarFieldEnum[]
  }

  /**
   * FotografoServicio create
   */
  export type FotografoServicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a FotografoServicio.
     */
    data: XOR<FotografoServicioCreateInput, FotografoServicioUncheckedCreateInput>
  }

  /**
   * FotografoServicio createMany
   */
  export type FotografoServicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FotografoServicios.
     */
    data: FotografoServicioCreateManyInput | FotografoServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FotografoServicio update
   */
  export type FotografoServicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a FotografoServicio.
     */
    data: XOR<FotografoServicioUpdateInput, FotografoServicioUncheckedUpdateInput>
    /**
     * Choose, which FotografoServicio to update.
     */
    where: FotografoServicioWhereUniqueInput
  }

  /**
   * FotografoServicio updateMany
   */
  export type FotografoServicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FotografoServicios.
     */
    data: XOR<FotografoServicioUpdateManyMutationInput, FotografoServicioUncheckedUpdateManyInput>
    /**
     * Filter which FotografoServicios to update
     */
    where?: FotografoServicioWhereInput
    /**
     * Limit how many FotografoServicios to update.
     */
    limit?: number
  }

  /**
   * FotografoServicio upsert
   */
  export type FotografoServicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the FotografoServicio to update in case it exists.
     */
    where: FotografoServicioWhereUniqueInput
    /**
     * In case the FotografoServicio found by the `where` argument doesn't exist, create a new FotografoServicio with this data.
     */
    create: XOR<FotografoServicioCreateInput, FotografoServicioUncheckedCreateInput>
    /**
     * In case the FotografoServicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotografoServicioUpdateInput, FotografoServicioUncheckedUpdateInput>
  }

  /**
   * FotografoServicio delete
   */
  export type FotografoServicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
    /**
     * Filter which FotografoServicio to delete.
     */
    where: FotografoServicioWhereUniqueInput
  }

  /**
   * FotografoServicio deleteMany
   */
  export type FotografoServicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotografoServicios to delete
     */
    where?: FotografoServicioWhereInput
    /**
     * Limit how many FotografoServicios to delete.
     */
    limit?: number
  }

  /**
   * FotografoServicio without action
   */
  export type FotografoServicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotografoServicio
     */
    select?: FotografoServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotografoServicio
     */
    omit?: FotografoServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotografoServicioInclude<ExtArgs> | null
  }


  /**
   * Model Unavailability
   */

  export type AggregateUnavailability = {
    _count: UnavailabilityCountAggregateOutputType | null
    _avg: UnavailabilityAvgAggregateOutputType | null
    _sum: UnavailabilitySumAggregateOutputType | null
    _min: UnavailabilityMinAggregateOutputType | null
    _max: UnavailabilityMaxAggregateOutputType | null
  }

  export type UnavailabilityAvgAggregateOutputType = {
    weekday: number | null
  }

  export type UnavailabilitySumAggregateOutputType = {
    weekday: number | null
  }

  export type UnavailabilityMinAggregateOutputType = {
    id: string | null
    fotografoId: string | null
    recurring: boolean | null
    weekday: number | null
    startDate: Date | null
    endDate: Date | null
    activo: boolean | null
  }

  export type UnavailabilityMaxAggregateOutputType = {
    id: string | null
    fotografoId: string | null
    recurring: boolean | null
    weekday: number | null
    startDate: Date | null
    endDate: Date | null
    activo: boolean | null
  }

  export type UnavailabilityCountAggregateOutputType = {
    id: number
    fotografoId: number
    recurring: number
    weekday: number
    startDate: number
    endDate: number
    activo: number
    _all: number
  }


  export type UnavailabilityAvgAggregateInputType = {
    weekday?: true
  }

  export type UnavailabilitySumAggregateInputType = {
    weekday?: true
  }

  export type UnavailabilityMinAggregateInputType = {
    id?: true
    fotografoId?: true
    recurring?: true
    weekday?: true
    startDate?: true
    endDate?: true
    activo?: true
  }

  export type UnavailabilityMaxAggregateInputType = {
    id?: true
    fotografoId?: true
    recurring?: true
    weekday?: true
    startDate?: true
    endDate?: true
    activo?: true
  }

  export type UnavailabilityCountAggregateInputType = {
    id?: true
    fotografoId?: true
    recurring?: true
    weekday?: true
    startDate?: true
    endDate?: true
    activo?: true
    _all?: true
  }

  export type UnavailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unavailability to aggregate.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Unavailabilities
    **/
    _count?: true | UnavailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnavailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnavailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnavailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnavailabilityMaxAggregateInputType
  }

  export type GetUnavailabilityAggregateType<T extends UnavailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateUnavailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnavailability[P]>
      : GetScalarType<T[P], AggregateUnavailability[P]>
  }




  export type UnavailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnavailabilityWhereInput
    orderBy?: UnavailabilityOrderByWithAggregationInput | UnavailabilityOrderByWithAggregationInput[]
    by: UnavailabilityScalarFieldEnum[] | UnavailabilityScalarFieldEnum
    having?: UnavailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnavailabilityCountAggregateInputType | true
    _avg?: UnavailabilityAvgAggregateInputType
    _sum?: UnavailabilitySumAggregateInputType
    _min?: UnavailabilityMinAggregateInputType
    _max?: UnavailabilityMaxAggregateInputType
  }

  export type UnavailabilityGroupByOutputType = {
    id: string
    fotografoId: string
    recurring: boolean
    weekday: number | null
    startDate: Date | null
    endDate: Date | null
    activo: boolean
    _count: UnavailabilityCountAggregateOutputType | null
    _avg: UnavailabilityAvgAggregateOutputType | null
    _sum: UnavailabilitySumAggregateOutputType | null
    _min: UnavailabilityMinAggregateOutputType | null
    _max: UnavailabilityMaxAggregateOutputType | null
  }

  type GetUnavailabilityGroupByPayload<T extends UnavailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnavailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnavailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnavailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], UnavailabilityGroupByOutputType[P]>
        }
      >
    >


  export type UnavailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fotografoId?: boolean
    recurring?: boolean
    weekday?: boolean
    startDate?: boolean
    endDate?: boolean
    activo?: boolean
    fotografo?: boolean | FotografoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unavailability"]>



  export type UnavailabilitySelectScalar = {
    id?: boolean
    fotografoId?: boolean
    recurring?: boolean
    weekday?: boolean
    startDate?: boolean
    endDate?: boolean
    activo?: boolean
  }

  export type UnavailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fotografoId" | "recurring" | "weekday" | "startDate" | "endDate" | "activo", ExtArgs["result"]["unavailability"]>
  export type UnavailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotografo?: boolean | FotografoDefaultArgs<ExtArgs>
  }

  export type $UnavailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unavailability"
    objects: {
      fotografo: Prisma.$FotografoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fotografoId: string
      recurring: boolean
      weekday: number | null
      startDate: Date | null
      endDate: Date | null
      activo: boolean
    }, ExtArgs["result"]["unavailability"]>
    composites: {}
  }

  type UnavailabilityGetPayload<S extends boolean | null | undefined | UnavailabilityDefaultArgs> = $Result.GetResult<Prisma.$UnavailabilityPayload, S>

  type UnavailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnavailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnavailabilityCountAggregateInputType | true
    }

  export interface UnavailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unavailability'], meta: { name: 'Unavailability' } }
    /**
     * Find zero or one Unavailability that matches the filter.
     * @param {UnavailabilityFindUniqueArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnavailabilityFindUniqueArgs>(args: SelectSubset<T, UnavailabilityFindUniqueArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unavailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnavailabilityFindUniqueOrThrowArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnavailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, UnavailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unavailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityFindFirstArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnavailabilityFindFirstArgs>(args?: SelectSubset<T, UnavailabilityFindFirstArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unavailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityFindFirstOrThrowArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnavailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, UnavailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Unavailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unavailabilities
     * const unavailabilities = await prisma.unavailability.findMany()
     * 
     * // Get first 10 Unavailabilities
     * const unavailabilities = await prisma.unavailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unavailabilityWithIdOnly = await prisma.unavailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnavailabilityFindManyArgs>(args?: SelectSubset<T, UnavailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unavailability.
     * @param {UnavailabilityCreateArgs} args - Arguments to create a Unavailability.
     * @example
     * // Create one Unavailability
     * const Unavailability = await prisma.unavailability.create({
     *   data: {
     *     // ... data to create a Unavailability
     *   }
     * })
     * 
     */
    create<T extends UnavailabilityCreateArgs>(args: SelectSubset<T, UnavailabilityCreateArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Unavailabilities.
     * @param {UnavailabilityCreateManyArgs} args - Arguments to create many Unavailabilities.
     * @example
     * // Create many Unavailabilities
     * const unavailability = await prisma.unavailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnavailabilityCreateManyArgs>(args?: SelectSubset<T, UnavailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Unavailability.
     * @param {UnavailabilityDeleteArgs} args - Arguments to delete one Unavailability.
     * @example
     * // Delete one Unavailability
     * const Unavailability = await prisma.unavailability.delete({
     *   where: {
     *     // ... filter to delete one Unavailability
     *   }
     * })
     * 
     */
    delete<T extends UnavailabilityDeleteArgs>(args: SelectSubset<T, UnavailabilityDeleteArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unavailability.
     * @param {UnavailabilityUpdateArgs} args - Arguments to update one Unavailability.
     * @example
     * // Update one Unavailability
     * const unavailability = await prisma.unavailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnavailabilityUpdateArgs>(args: SelectSubset<T, UnavailabilityUpdateArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Unavailabilities.
     * @param {UnavailabilityDeleteManyArgs} args - Arguments to filter Unavailabilities to delete.
     * @example
     * // Delete a few Unavailabilities
     * const { count } = await prisma.unavailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnavailabilityDeleteManyArgs>(args?: SelectSubset<T, UnavailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unavailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unavailabilities
     * const unavailability = await prisma.unavailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnavailabilityUpdateManyArgs>(args: SelectSubset<T, UnavailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unavailability.
     * @param {UnavailabilityUpsertArgs} args - Arguments to update or create a Unavailability.
     * @example
     * // Update or create a Unavailability
     * const unavailability = await prisma.unavailability.upsert({
     *   create: {
     *     // ... data to create a Unavailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unavailability we want to update
     *   }
     * })
     */
    upsert<T extends UnavailabilityUpsertArgs>(args: SelectSubset<T, UnavailabilityUpsertArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Unavailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityCountArgs} args - Arguments to filter Unavailabilities to count.
     * @example
     * // Count the number of Unavailabilities
     * const count = await prisma.unavailability.count({
     *   where: {
     *     // ... the filter for the Unavailabilities we want to count
     *   }
     * })
    **/
    count<T extends UnavailabilityCountArgs>(
      args?: Subset<T, UnavailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnavailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unavailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnavailabilityAggregateArgs>(args: Subset<T, UnavailabilityAggregateArgs>): Prisma.PrismaPromise<GetUnavailabilityAggregateType<T>>

    /**
     * Group by Unavailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityGroupByArgs} args - Group by arguments.
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
      T extends UnavailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnavailabilityGroupByArgs['orderBy'] }
        : { orderBy?: UnavailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnavailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnavailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unavailability model
   */
  readonly fields: UnavailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unavailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnavailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fotografo<T extends FotografoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FotografoDefaultArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Unavailability model
   */
  interface UnavailabilityFieldRefs {
    readonly id: FieldRef<"Unavailability", 'String'>
    readonly fotografoId: FieldRef<"Unavailability", 'String'>
    readonly recurring: FieldRef<"Unavailability", 'Boolean'>
    readonly weekday: FieldRef<"Unavailability", 'Int'>
    readonly startDate: FieldRef<"Unavailability", 'DateTime'>
    readonly endDate: FieldRef<"Unavailability", 'DateTime'>
    readonly activo: FieldRef<"Unavailability", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Unavailability findUnique
   */
  export type UnavailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability findUniqueOrThrow
   */
  export type UnavailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability findFirst
   */
  export type UnavailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unavailabilities.
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unavailabilities.
     */
    distinct?: UnavailabilityScalarFieldEnum | UnavailabilityScalarFieldEnum[]
  }

  /**
   * Unavailability findFirstOrThrow
   */
  export type UnavailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unavailabilities.
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unavailabilities.
     */
    distinct?: UnavailabilityScalarFieldEnum | UnavailabilityScalarFieldEnum[]
  }

  /**
   * Unavailability findMany
   */
  export type UnavailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Unavailabilities to fetch.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Unavailabilities.
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    distinct?: UnavailabilityScalarFieldEnum | UnavailabilityScalarFieldEnum[]
  }

  /**
   * Unavailability create
   */
  export type UnavailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Unavailability.
     */
    data: XOR<UnavailabilityCreateInput, UnavailabilityUncheckedCreateInput>
  }

  /**
   * Unavailability createMany
   */
  export type UnavailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Unavailabilities.
     */
    data: UnavailabilityCreateManyInput | UnavailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unavailability update
   */
  export type UnavailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Unavailability.
     */
    data: XOR<UnavailabilityUpdateInput, UnavailabilityUncheckedUpdateInput>
    /**
     * Choose, which Unavailability to update.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability updateMany
   */
  export type UnavailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Unavailabilities.
     */
    data: XOR<UnavailabilityUpdateManyMutationInput, UnavailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Unavailabilities to update
     */
    where?: UnavailabilityWhereInput
    /**
     * Limit how many Unavailabilities to update.
     */
    limit?: number
  }

  /**
   * Unavailability upsert
   */
  export type UnavailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Unavailability to update in case it exists.
     */
    where: UnavailabilityWhereUniqueInput
    /**
     * In case the Unavailability found by the `where` argument doesn't exist, create a new Unavailability with this data.
     */
    create: XOR<UnavailabilityCreateInput, UnavailabilityUncheckedCreateInput>
    /**
     * In case the Unavailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnavailabilityUpdateInput, UnavailabilityUncheckedUpdateInput>
  }

  /**
   * Unavailability delete
   */
  export type UnavailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter which Unavailability to delete.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability deleteMany
   */
  export type UnavailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unavailabilities to delete
     */
    where?: UnavailabilityWhereInput
    /**
     * Limit how many Unavailabilities to delete.
     */
    limit?: number
  }

  /**
   * Unavailability without action
   */
  export type UnavailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    precio: number | null
  }

  export type ReservaSumAggregateOutputType = {
    precio: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    fotografoId: string | null
    clienteId: string | null
    photoServiceId: string | null
    estado: boolean | null
    precio: number | null
    createdAt: Date | null
  }

  export type ReservaMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    fotografoId: string | null
    clienteId: string | null
    photoServiceId: string | null
    estado: boolean | null
    precio: number | null
    createdAt: Date | null
  }

  export type ReservaCountAggregateOutputType = {
    id: number
    fecha: number
    horaInicio: number
    horaFin: number
    fotografoId: number
    clienteId: number
    photoServiceId: number
    estado: number
    precio: number
    createdAt: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    precio?: true
  }

  export type ReservaSumAggregateInputType = {
    precio?: true
  }

  export type ReservaMinAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    fotografoId?: true
    clienteId?: true
    photoServiceId?: true
    estado?: true
    precio?: true
    createdAt?: true
  }

  export type ReservaMaxAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    fotografoId?: true
    clienteId?: true
    photoServiceId?: true
    estado?: true
    precio?: true
    createdAt?: true
  }

  export type ReservaCountAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    fotografoId?: true
    clienteId?: true
    photoServiceId?: true
    estado?: true
    precio?: true
    createdAt?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reserva to aggregate.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type ReservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithAggregationInput | ReservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: ReservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id: string
    fecha: Date
    horaInicio: Date
    horaFin: Date
    fotografoId: string
    clienteId: string
    photoServiceId: string | null
    estado: boolean
    precio: number | null
    createdAt: Date
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends ReservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    fotografoId?: boolean
    clienteId?: boolean
    photoServiceId?: boolean
    estado?: boolean
    precio?: boolean
    createdAt?: boolean
    fotografo?: boolean | FotografoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    photoService?: boolean | Reserva$photoServiceArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>



  export type ReservaSelectScalar = {
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    fotografoId?: boolean
    clienteId?: boolean
    photoServiceId?: boolean
    estado?: boolean
    precio?: boolean
    createdAt?: boolean
  }

  export type ReservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "horaInicio" | "horaFin" | "fotografoId" | "clienteId" | "photoServiceId" | "estado" | "precio" | "createdAt", ExtArgs["result"]["reserva"]>
  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotografo?: boolean | FotografoDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    photoService?: boolean | Reserva$photoServiceArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      fotografo: Prisma.$FotografoPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
      photoService: Prisma.$PhotoServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      horaInicio: Date
      horaFin: Date
      fotografoId: string
      clienteId: string
      photoServiceId: string | null
      estado: boolean
      precio: number | null
      createdAt: Date
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type ReservaGetPayload<S extends boolean | null | undefined | ReservaDefaultArgs> = $Result.GetResult<Prisma.$ReservaPayload, S>

  type ReservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface ReservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reserva'], meta: { name: 'Reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {ReservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaFindUniqueArgs>(args: SelectSubset<T, ReservaFindUniqueArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaFindFirstArgs>(args?: SelectSubset<T, ReservaFindFirstArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaWithIdOnly = await prisma.reserva.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservaFindManyArgs>(args?: SelectSubset<T, ReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {ReservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends ReservaCreateArgs>(args: SelectSubset<T, ReservaCreateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaCreateManyArgs>(args?: SelectSubset<T, ReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reserva.
     * @param {ReservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends ReservaDeleteArgs>(args: SelectSubset<T, ReservaDeleteArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {ReservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaUpdateArgs>(args: SelectSubset<T, ReservaUpdateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaDeleteManyArgs>(args?: SelectSubset<T, ReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaUpdateManyArgs>(args: SelectSubset<T, ReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reserva.
     * @param {ReservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends ReservaUpsertArgs>(args: SelectSubset<T, ReservaUpsertArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservaCountArgs>(
      args?: Subset<T, ReservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaGroupByArgs} args - Group by arguments.
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
      T extends ReservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reserva model
   */
  readonly fields: ReservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fotografo<T extends FotografoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FotografoDefaultArgs<ExtArgs>>): Prisma__FotografoClient<$Result.GetResult<Prisma.$FotografoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photoService<T extends Reserva$photoServiceArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$photoServiceArgs<ExtArgs>>): Prisma__PhotoServiceClient<$Result.GetResult<Prisma.$PhotoServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reserva model
   */
  interface ReservaFieldRefs {
    readonly id: FieldRef<"Reserva", 'String'>
    readonly fecha: FieldRef<"Reserva", 'DateTime'>
    readonly horaInicio: FieldRef<"Reserva", 'DateTime'>
    readonly horaFin: FieldRef<"Reserva", 'DateTime'>
    readonly fotografoId: FieldRef<"Reserva", 'String'>
    readonly clienteId: FieldRef<"Reserva", 'String'>
    readonly photoServiceId: FieldRef<"Reserva", 'String'>
    readonly estado: FieldRef<"Reserva", 'Boolean'>
    readonly precio: FieldRef<"Reserva", 'Float'>
    readonly createdAt: FieldRef<"Reserva", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reserva findUnique
   */
  export type ReservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findUniqueOrThrow
   */
  export type ReservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findFirst
   */
  export type ReservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findFirstOrThrow
   */
  export type ReservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findMany
   */
  export type ReservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva create
   */
  export type ReservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reserva.
     */
    data: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
  }

  /**
   * Reserva createMany
   */
  export type ReservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reserva update
   */
  export type ReservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reserva.
     */
    data: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
    /**
     * Choose, which Reserva to update.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva updateMany
   */
  export type ReservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reserva upsert
   */
  export type ReservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reserva to update in case it exists.
     */
    where: ReservaWhereUniqueInput
    /**
     * In case the Reserva found by the `where` argument doesn't exist, create a new Reserva with this data.
     */
    create: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
    /**
     * In case the Reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
  }

  /**
   * Reserva delete
   */
  export type ReservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter which Reserva to delete.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva deleteMany
   */
  export type ReservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reserva.photoService
   */
  export type Reserva$photoServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoService
     */
    select?: PhotoServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoService
     */
    omit?: PhotoServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoServiceInclude<ExtArgs> | null
    where?: PhotoServiceWhereInput
  }

  /**
   * Reserva without action
   */
  export type ReservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
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


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    createAt: 'createAt',
    updateAt: 'updateAt',
    activo: 'activo'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const PermisoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    createAt: 'createAt',
    updateAt: 'updateAt',
    activo: 'activo'
  };

  export type PermisoScalarFieldEnum = (typeof PermisoScalarFieldEnum)[keyof typeof PermisoScalarFieldEnum]


  export const RolPermisoScalarFieldEnum: {
    id: 'id',
    rolId: 'rolId',
    permisoId: 'permisoId',
    createAt: 'createAt'
  };

  export type RolPermisoScalarFieldEnum = (typeof RolPermisoScalarFieldEnum)[keyof typeof RolPermisoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    createAt: 'createAt',
    updateAt: 'updateAt',
    activo: 'activo',
    rolId: 'rolId',
    debeCambiar: 'debeCambiar'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const GaleriaScalarFieldEnum: {
    id: 'id',
    nombreFoto: 'nombreFoto',
    url: 'url',
    fotografoId: 'fotografoId'
  };

  export type GaleriaScalarFieldEnum = (typeof GaleriaScalarFieldEnum)[keyof typeof GaleriaScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    activo: 'activo'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FotografoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    nombre: 'nombre',
    telefono: 'telefono',
    bio: 'bio',
    url: 'url',
    Foto: 'Foto',
    disponible: 'disponible'
  };

  export type FotografoScalarFieldEnum = (typeof FotografoScalarFieldEnum)[keyof typeof FotografoScalarFieldEnum]


  export const PhotoServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    img: 'img',
    description: 'description',
    precio: 'precio',
    activo: 'activo',
    categoryId: 'categoryId'
  };

  export type PhotoServiceScalarFieldEnum = (typeof PhotoServiceScalarFieldEnum)[keyof typeof PhotoServiceScalarFieldEnum]


  export const FotografoServicioScalarFieldEnum: {
    fotografoId: 'fotografoId',
    servicioId: 'servicioId'
  };

  export type FotografoServicioScalarFieldEnum = (typeof FotografoServicioScalarFieldEnum)[keyof typeof FotografoServicioScalarFieldEnum]


  export const UnavailabilityScalarFieldEnum: {
    id: 'id',
    fotografoId: 'fotografoId',
    recurring: 'recurring',
    weekday: 'weekday',
    startDate: 'startDate',
    endDate: 'endDate',
    activo: 'activo'
  };

  export type UnavailabilityScalarFieldEnum = (typeof UnavailabilityScalarFieldEnum)[keyof typeof UnavailabilityScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    fotografoId: 'fotografoId',
    clienteId: 'clienteId',
    photoServiceId: 'photoServiceId',
    estado: 'estado',
    precio: 'precio',
    createdAt: 'createdAt'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const RolOrderByRelevanceFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type RolOrderByRelevanceFieldEnum = (typeof RolOrderByRelevanceFieldEnum)[keyof typeof RolOrderByRelevanceFieldEnum]


  export const PermisoOrderByRelevanceFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type PermisoOrderByRelevanceFieldEnum = (typeof PermisoOrderByRelevanceFieldEnum)[keyof typeof PermisoOrderByRelevanceFieldEnum]


  export const RolPermisoOrderByRelevanceFieldEnum: {
    id: 'id',
    rolId: 'rolId',
    permisoId: 'permisoId'
  };

  export type RolPermisoOrderByRelevanceFieldEnum = (typeof RolPermisoOrderByRelevanceFieldEnum)[keyof typeof RolPermisoOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    rolId: 'rolId'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const GaleriaOrderByRelevanceFieldEnum: {
    id: 'id',
    nombreFoto: 'nombreFoto',
    url: 'url',
    fotografoId: 'fotografoId'
  };

  export type GaleriaOrderByRelevanceFieldEnum = (typeof GaleriaOrderByRelevanceFieldEnum)[keyof typeof GaleriaOrderByRelevanceFieldEnum]


  export const ClienteOrderByRelevanceFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    telefono: 'telefono'
  };

  export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const FotografoOrderByRelevanceFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    nombre: 'nombre',
    telefono: 'telefono',
    bio: 'bio',
    url: 'url',
    Foto: 'Foto'
  };

  export type FotografoOrderByRelevanceFieldEnum = (typeof FotografoOrderByRelevanceFieldEnum)[keyof typeof FotografoOrderByRelevanceFieldEnum]


  export const PhotoServiceOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    img: 'img',
    description: 'description',
    categoryId: 'categoryId'
  };

  export type PhotoServiceOrderByRelevanceFieldEnum = (typeof PhotoServiceOrderByRelevanceFieldEnum)[keyof typeof PhotoServiceOrderByRelevanceFieldEnum]


  export const FotografoServicioOrderByRelevanceFieldEnum: {
    fotografoId: 'fotografoId',
    servicioId: 'servicioId'
  };

  export type FotografoServicioOrderByRelevanceFieldEnum = (typeof FotografoServicioOrderByRelevanceFieldEnum)[keyof typeof FotografoServicioOrderByRelevanceFieldEnum]


  export const UnavailabilityOrderByRelevanceFieldEnum: {
    id: 'id',
    fotografoId: 'fotografoId'
  };

  export type UnavailabilityOrderByRelevanceFieldEnum = (typeof UnavailabilityOrderByRelevanceFieldEnum)[keyof typeof UnavailabilityOrderByRelevanceFieldEnum]


  export const ReservaOrderByRelevanceFieldEnum: {
    id: 'id',
    fotografoId: 'fotografoId',
    clienteId: 'clienteId',
    photoServiceId: 'photoServiceId'
  };

  export type ReservaOrderByRelevanceFieldEnum = (typeof ReservaOrderByRelevanceFieldEnum)[keyof typeof ReservaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: StringFilter<"Rol"> | string
    nombre?: StringFilter<"Rol"> | string
    descripcion?: StringFilter<"Rol"> | string
    createAt?: DateTimeFilter<"Rol"> | Date | string
    updateAt?: DateTimeFilter<"Rol"> | Date | string
    activo?: BoolFilter<"Rol"> | boolean
    permisos?: RolPermisoListRelationFilter
    usuarios?: UsuarioListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
    permisos?: RolPermisoOrderByRelationAggregateInput
    usuarios?: UsuarioOrderByRelationAggregateInput
    _relevance?: RolOrderByRelevanceInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    descripcion?: StringFilter<"Rol"> | string
    createAt?: DateTimeFilter<"Rol"> | Date | string
    updateAt?: DateTimeFilter<"Rol"> | Date | string
    activo?: BoolFilter<"Rol"> | boolean
    permisos?: RolPermisoListRelationFilter
    usuarios?: UsuarioListRelationFilter
  }, "id" | "nombre">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rol"> | string
    nombre?: StringWithAggregatesFilter<"Rol"> | string
    descripcion?: StringWithAggregatesFilter<"Rol"> | string
    createAt?: DateTimeWithAggregatesFilter<"Rol"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Rol"> | Date | string
    activo?: BoolWithAggregatesFilter<"Rol"> | boolean
  }

  export type PermisoWhereInput = {
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    id?: StringFilter<"Permiso"> | string
    nombre?: StringFilter<"Permiso"> | string
    descripcion?: StringFilter<"Permiso"> | string
    createAt?: DateTimeFilter<"Permiso"> | Date | string
    updateAt?: DateTimeFilter<"Permiso"> | Date | string
    activo?: BoolFilter<"Permiso"> | boolean
    roles?: RolPermisoListRelationFilter
  }

  export type PermisoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
    roles?: RolPermisoOrderByRelationAggregateInput
    _relevance?: PermisoOrderByRelevanceInput
  }

  export type PermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    descripcion?: StringFilter<"Permiso"> | string
    createAt?: DateTimeFilter<"Permiso"> | Date | string
    updateAt?: DateTimeFilter<"Permiso"> | Date | string
    activo?: BoolFilter<"Permiso"> | boolean
    roles?: RolPermisoListRelationFilter
  }, "id" | "nombre">

  export type PermisoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
    _count?: PermisoCountOrderByAggregateInput
    _max?: PermisoMaxOrderByAggregateInput
    _min?: PermisoMinOrderByAggregateInput
  }

  export type PermisoScalarWhereWithAggregatesInput = {
    AND?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    OR?: PermisoScalarWhereWithAggregatesInput[]
    NOT?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permiso"> | string
    nombre?: StringWithAggregatesFilter<"Permiso"> | string
    descripcion?: StringWithAggregatesFilter<"Permiso"> | string
    createAt?: DateTimeWithAggregatesFilter<"Permiso"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Permiso"> | Date | string
    activo?: BoolWithAggregatesFilter<"Permiso"> | boolean
  }

  export type RolPermisoWhereInput = {
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    id?: StringFilter<"RolPermiso"> | string
    rolId?: StringFilter<"RolPermiso"> | string
    permisoId?: StringFilter<"RolPermiso"> | string
    createAt?: DateTimeFilter<"RolPermiso"> | Date | string
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }

  export type RolPermisoOrderByWithRelationInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    createAt?: SortOrder
    permiso?: PermisoOrderByWithRelationInput
    rol?: RolOrderByWithRelationInput
    _relevance?: RolPermisoOrderByRelevanceInput
  }

  export type RolPermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rolId_permisoId?: RolPermisoRolIdPermisoIdCompoundUniqueInput
    AND?: RolPermisoWhereInput | RolPermisoWhereInput[]
    OR?: RolPermisoWhereInput[]
    NOT?: RolPermisoWhereInput | RolPermisoWhereInput[]
    rolId?: StringFilter<"RolPermiso"> | string
    permisoId?: StringFilter<"RolPermiso"> | string
    createAt?: DateTimeFilter<"RolPermiso"> | Date | string
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }, "id" | "rolId_permisoId">

  export type RolPermisoOrderByWithAggregationInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    createAt?: SortOrder
    _count?: RolPermisoCountOrderByAggregateInput
    _max?: RolPermisoMaxOrderByAggregateInput
    _min?: RolPermisoMinOrderByAggregateInput
  }

  export type RolPermisoScalarWhereWithAggregatesInput = {
    AND?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    OR?: RolPermisoScalarWhereWithAggregatesInput[]
    NOT?: RolPermisoScalarWhereWithAggregatesInput | RolPermisoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RolPermiso"> | string
    rolId?: StringWithAggregatesFilter<"RolPermiso"> | string
    permisoId?: StringWithAggregatesFilter<"RolPermiso"> | string
    createAt?: DateTimeWithAggregatesFilter<"RolPermiso"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createAt?: DateTimeFilter<"Usuario"> | Date | string
    updateAt?: DateTimeFilter<"Usuario"> | Date | string
    activo?: BoolFilter<"Usuario"> | boolean
    rolId?: StringFilter<"Usuario"> | string
    debeCambiar?: BoolFilter<"Usuario"> | boolean
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    fotografo?: XOR<FotografoNullableScalarRelationFilter, FotografoWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    debeCambiar?: SortOrder
    rol?: RolOrderByWithRelationInput
    fotografo?: FotografoOrderByWithRelationInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createAt?: DateTimeFilter<"Usuario"> | Date | string
    updateAt?: DateTimeFilter<"Usuario"> | Date | string
    activo?: BoolFilter<"Usuario"> | boolean
    rolId?: StringFilter<"Usuario"> | string
    debeCambiar?: BoolFilter<"Usuario"> | boolean
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    fotografo?: XOR<FotografoNullableScalarRelationFilter, FotografoWhereInput> | null
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    debeCambiar?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    createAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    rolId?: StringWithAggregatesFilter<"Usuario"> | string
    debeCambiar?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type GaleriaWhereInput = {
    AND?: GaleriaWhereInput | GaleriaWhereInput[]
    OR?: GaleriaWhereInput[]
    NOT?: GaleriaWhereInput | GaleriaWhereInput[]
    id?: StringFilter<"Galeria"> | string
    nombreFoto?: StringFilter<"Galeria"> | string
    url?: StringFilter<"Galeria"> | string
    fotografoId?: StringFilter<"Galeria"> | string
    fotografo?: XOR<FotografoScalarRelationFilter, FotografoWhereInput>
  }

  export type GaleriaOrderByWithRelationInput = {
    id?: SortOrder
    nombreFoto?: SortOrder
    url?: SortOrder
    fotografoId?: SortOrder
    fotografo?: FotografoOrderByWithRelationInput
    _relevance?: GaleriaOrderByRelevanceInput
  }

  export type GaleriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GaleriaWhereInput | GaleriaWhereInput[]
    OR?: GaleriaWhereInput[]
    NOT?: GaleriaWhereInput | GaleriaWhereInput[]
    nombreFoto?: StringFilter<"Galeria"> | string
    url?: StringFilter<"Galeria"> | string
    fotografoId?: StringFilter<"Galeria"> | string
    fotografo?: XOR<FotografoScalarRelationFilter, FotografoWhereInput>
  }, "id">

  export type GaleriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombreFoto?: SortOrder
    url?: SortOrder
    fotografoId?: SortOrder
    _count?: GaleriaCountOrderByAggregateInput
    _max?: GaleriaMaxOrderByAggregateInput
    _min?: GaleriaMinOrderByAggregateInput
  }

  export type GaleriaScalarWhereWithAggregatesInput = {
    AND?: GaleriaScalarWhereWithAggregatesInput | GaleriaScalarWhereWithAggregatesInput[]
    OR?: GaleriaScalarWhereWithAggregatesInput[]
    NOT?: GaleriaScalarWhereWithAggregatesInput | GaleriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Galeria"> | string
    nombreFoto?: StringWithAggregatesFilter<"Galeria"> | string
    url?: StringWithAggregatesFilter<"Galeria"> | string
    fotografoId?: StringWithAggregatesFilter<"Galeria"> | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nombre?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    createAt?: DateTimeFilter<"Cliente"> | Date | string
    updateAt?: DateTimeFilter<"Cliente"> | Date | string
    reservas?: ReservaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
    _relevance?: ClienteOrderByRelevanceInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    createAt?: DateTimeFilter<"Cliente"> | Date | string
    updateAt?: DateTimeFilter<"Cliente"> | Date | string
    reservas?: ReservaListRelationFilter
  }, "id" | "email">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringWithAggregatesFilter<"Cliente"> | string
    createAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    activo?: BoolFilter<"Category"> | boolean
    services?: PhotoServiceListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    activo?: SortOrder
    services?: PhotoServiceOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    activo?: BoolFilter<"Category"> | boolean
    services?: PhotoServiceListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    activo?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    activo?: BoolWithAggregatesFilter<"Category"> | boolean
  }

  export type FotografoWhereInput = {
    AND?: FotografoWhereInput | FotografoWhereInput[]
    OR?: FotografoWhereInput[]
    NOT?: FotografoWhereInput | FotografoWhereInput[]
    id?: StringFilter<"Fotografo"> | string
    usuarioId?: StringFilter<"Fotografo"> | string
    nombre?: StringFilter<"Fotografo"> | string
    telefono?: StringNullableFilter<"Fotografo"> | string | null
    bio?: StringNullableFilter<"Fotografo"> | string | null
    url?: StringNullableFilter<"Fotografo"> | string | null
    Foto?: StringFilter<"Fotografo"> | string
    disponible?: BoolFilter<"Fotografo"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    reservas?: ReservaListRelationFilter
    galeria?: GaleriaListRelationFilter
    unavailabilities?: UnavailabilityListRelationFilter
    servicios?: FotografoServicioListRelationFilter
  }

  export type FotografoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    Foto?: SortOrder
    disponible?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    reservas?: ReservaOrderByRelationAggregateInput
    galeria?: GaleriaOrderByRelationAggregateInput
    unavailabilities?: UnavailabilityOrderByRelationAggregateInput
    servicios?: FotografoServicioOrderByRelationAggregateInput
    _relevance?: FotografoOrderByRelevanceInput
  }

  export type FotografoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    nombre?: string
    AND?: FotografoWhereInput | FotografoWhereInput[]
    OR?: FotografoWhereInput[]
    NOT?: FotografoWhereInput | FotografoWhereInput[]
    telefono?: StringNullableFilter<"Fotografo"> | string | null
    bio?: StringNullableFilter<"Fotografo"> | string | null
    url?: StringNullableFilter<"Fotografo"> | string | null
    Foto?: StringFilter<"Fotografo"> | string
    disponible?: BoolFilter<"Fotografo"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    reservas?: ReservaListRelationFilter
    galeria?: GaleriaListRelationFilter
    unavailabilities?: UnavailabilityListRelationFilter
    servicios?: FotografoServicioListRelationFilter
  }, "id" | "usuarioId" | "nombre">

  export type FotografoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    Foto?: SortOrder
    disponible?: SortOrder
    _count?: FotografoCountOrderByAggregateInput
    _max?: FotografoMaxOrderByAggregateInput
    _min?: FotografoMinOrderByAggregateInput
  }

  export type FotografoScalarWhereWithAggregatesInput = {
    AND?: FotografoScalarWhereWithAggregatesInput | FotografoScalarWhereWithAggregatesInput[]
    OR?: FotografoScalarWhereWithAggregatesInput[]
    NOT?: FotografoScalarWhereWithAggregatesInput | FotografoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fotografo"> | string
    usuarioId?: StringWithAggregatesFilter<"Fotografo"> | string
    nombre?: StringWithAggregatesFilter<"Fotografo"> | string
    telefono?: StringNullableWithAggregatesFilter<"Fotografo"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Fotografo"> | string | null
    url?: StringNullableWithAggregatesFilter<"Fotografo"> | string | null
    Foto?: StringWithAggregatesFilter<"Fotografo"> | string
    disponible?: BoolWithAggregatesFilter<"Fotografo"> | boolean
  }

  export type PhotoServiceWhereInput = {
    AND?: PhotoServiceWhereInput | PhotoServiceWhereInput[]
    OR?: PhotoServiceWhereInput[]
    NOT?: PhotoServiceWhereInput | PhotoServiceWhereInput[]
    id?: StringFilter<"PhotoService"> | string
    name?: StringFilter<"PhotoService"> | string
    img?: StringFilter<"PhotoService"> | string
    description?: StringFilter<"PhotoService"> | string
    precio?: FloatFilter<"PhotoService"> | number
    activo?: BoolFilter<"PhotoService"> | boolean
    categoryId?: StringFilter<"PhotoService"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    fotografos?: FotografoServicioListRelationFilter
    reservas?: ReservaListRelationFilter
  }

  export type PhotoServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    description?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    fotografos?: FotografoServicioOrderByRelationAggregateInput
    reservas?: ReservaOrderByRelationAggregateInput
    _relevance?: PhotoServiceOrderByRelevanceInput
  }

  export type PhotoServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PhotoServiceWhereInput | PhotoServiceWhereInput[]
    OR?: PhotoServiceWhereInput[]
    NOT?: PhotoServiceWhereInput | PhotoServiceWhereInput[]
    img?: StringFilter<"PhotoService"> | string
    description?: StringFilter<"PhotoService"> | string
    precio?: FloatFilter<"PhotoService"> | number
    activo?: BoolFilter<"PhotoService"> | boolean
    categoryId?: StringFilter<"PhotoService"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    fotografos?: FotografoServicioListRelationFilter
    reservas?: ReservaListRelationFilter
  }, "id" | "name">

  export type PhotoServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    description?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    categoryId?: SortOrder
    _count?: PhotoServiceCountOrderByAggregateInput
    _avg?: PhotoServiceAvgOrderByAggregateInput
    _max?: PhotoServiceMaxOrderByAggregateInput
    _min?: PhotoServiceMinOrderByAggregateInput
    _sum?: PhotoServiceSumOrderByAggregateInput
  }

  export type PhotoServiceScalarWhereWithAggregatesInput = {
    AND?: PhotoServiceScalarWhereWithAggregatesInput | PhotoServiceScalarWhereWithAggregatesInput[]
    OR?: PhotoServiceScalarWhereWithAggregatesInput[]
    NOT?: PhotoServiceScalarWhereWithAggregatesInput | PhotoServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhotoService"> | string
    name?: StringWithAggregatesFilter<"PhotoService"> | string
    img?: StringWithAggregatesFilter<"PhotoService"> | string
    description?: StringWithAggregatesFilter<"PhotoService"> | string
    precio?: FloatWithAggregatesFilter<"PhotoService"> | number
    activo?: BoolWithAggregatesFilter<"PhotoService"> | boolean
    categoryId?: StringWithAggregatesFilter<"PhotoService"> | string
  }

  export type FotografoServicioWhereInput = {
    AND?: FotografoServicioWhereInput | FotografoServicioWhereInput[]
    OR?: FotografoServicioWhereInput[]
    NOT?: FotografoServicioWhereInput | FotografoServicioWhereInput[]
    fotografoId?: StringFilter<"FotografoServicio"> | string
    servicioId?: StringFilter<"FotografoServicio"> | string
    fotografo?: XOR<FotografoScalarRelationFilter, FotografoWhereInput>
    servicio?: XOR<PhotoServiceScalarRelationFilter, PhotoServiceWhereInput>
  }

  export type FotografoServicioOrderByWithRelationInput = {
    fotografoId?: SortOrder
    servicioId?: SortOrder
    fotografo?: FotografoOrderByWithRelationInput
    servicio?: PhotoServiceOrderByWithRelationInput
    _relevance?: FotografoServicioOrderByRelevanceInput
  }

  export type FotografoServicioWhereUniqueInput = Prisma.AtLeast<{
    fotografoId_servicioId?: FotografoServicioFotografoIdServicioIdCompoundUniqueInput
    AND?: FotografoServicioWhereInput | FotografoServicioWhereInput[]
    OR?: FotografoServicioWhereInput[]
    NOT?: FotografoServicioWhereInput | FotografoServicioWhereInput[]
    fotografoId?: StringFilter<"FotografoServicio"> | string
    servicioId?: StringFilter<"FotografoServicio"> | string
    fotografo?: XOR<FotografoScalarRelationFilter, FotografoWhereInput>
    servicio?: XOR<PhotoServiceScalarRelationFilter, PhotoServiceWhereInput>
  }, "fotografoId_servicioId">

  export type FotografoServicioOrderByWithAggregationInput = {
    fotografoId?: SortOrder
    servicioId?: SortOrder
    _count?: FotografoServicioCountOrderByAggregateInput
    _max?: FotografoServicioMaxOrderByAggregateInput
    _min?: FotografoServicioMinOrderByAggregateInput
  }

  export type FotografoServicioScalarWhereWithAggregatesInput = {
    AND?: FotografoServicioScalarWhereWithAggregatesInput | FotografoServicioScalarWhereWithAggregatesInput[]
    OR?: FotografoServicioScalarWhereWithAggregatesInput[]
    NOT?: FotografoServicioScalarWhereWithAggregatesInput | FotografoServicioScalarWhereWithAggregatesInput[]
    fotografoId?: StringWithAggregatesFilter<"FotografoServicio"> | string
    servicioId?: StringWithAggregatesFilter<"FotografoServicio"> | string
  }

  export type UnavailabilityWhereInput = {
    AND?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    OR?: UnavailabilityWhereInput[]
    NOT?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    id?: StringFilter<"Unavailability"> | string
    fotografoId?: StringFilter<"Unavailability"> | string
    recurring?: BoolFilter<"Unavailability"> | boolean
    weekday?: IntNullableFilter<"Unavailability"> | number | null
    startDate?: DateTimeNullableFilter<"Unavailability"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Unavailability"> | Date | string | null
    activo?: BoolFilter<"Unavailability"> | boolean
    fotografo?: XOR<FotografoScalarRelationFilter, FotografoWhereInput>
  }

  export type UnavailabilityOrderByWithRelationInput = {
    id?: SortOrder
    fotografoId?: SortOrder
    recurring?: SortOrder
    weekday?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    activo?: SortOrder
    fotografo?: FotografoOrderByWithRelationInput
    _relevance?: UnavailabilityOrderByRelevanceInput
  }

  export type UnavailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    OR?: UnavailabilityWhereInput[]
    NOT?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    fotografoId?: StringFilter<"Unavailability"> | string
    recurring?: BoolFilter<"Unavailability"> | boolean
    weekday?: IntNullableFilter<"Unavailability"> | number | null
    startDate?: DateTimeNullableFilter<"Unavailability"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Unavailability"> | Date | string | null
    activo?: BoolFilter<"Unavailability"> | boolean
    fotografo?: XOR<FotografoScalarRelationFilter, FotografoWhereInput>
  }, "id">

  export type UnavailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    fotografoId?: SortOrder
    recurring?: SortOrder
    weekday?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    activo?: SortOrder
    _count?: UnavailabilityCountOrderByAggregateInput
    _avg?: UnavailabilityAvgOrderByAggregateInput
    _max?: UnavailabilityMaxOrderByAggregateInput
    _min?: UnavailabilityMinOrderByAggregateInput
    _sum?: UnavailabilitySumOrderByAggregateInput
  }

  export type UnavailabilityScalarWhereWithAggregatesInput = {
    AND?: UnavailabilityScalarWhereWithAggregatesInput | UnavailabilityScalarWhereWithAggregatesInput[]
    OR?: UnavailabilityScalarWhereWithAggregatesInput[]
    NOT?: UnavailabilityScalarWhereWithAggregatesInput | UnavailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unavailability"> | string
    fotografoId?: StringWithAggregatesFilter<"Unavailability"> | string
    recurring?: BoolWithAggregatesFilter<"Unavailability"> | boolean
    weekday?: IntNullableWithAggregatesFilter<"Unavailability"> | number | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Unavailability"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Unavailability"> | Date | string | null
    activo?: BoolWithAggregatesFilter<"Unavailability"> | boolean
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id?: StringFilter<"Reserva"> | string
    fecha?: DateTimeFilter<"Reserva"> | Date | string
    horaInicio?: DateTimeFilter<"Reserva"> | Date | string
    horaFin?: DateTimeFilter<"Reserva"> | Date | string
    fotografoId?: StringFilter<"Reserva"> | string
    clienteId?: StringFilter<"Reserva"> | string
    photoServiceId?: StringNullableFilter<"Reserva"> | string | null
    estado?: BoolFilter<"Reserva"> | boolean
    precio?: FloatNullableFilter<"Reserva"> | number | null
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    fotografo?: XOR<FotografoScalarRelationFilter, FotografoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    photoService?: XOR<PhotoServiceNullableScalarRelationFilter, PhotoServiceWhereInput> | null
  }

  export type ReservaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    fotografoId?: SortOrder
    clienteId?: SortOrder
    photoServiceId?: SortOrderInput | SortOrder
    estado?: SortOrder
    precio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    fotografo?: FotografoOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    photoService?: PhotoServiceOrderByWithRelationInput
    _relevance?: ReservaOrderByRelevanceInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    fecha?: DateTimeFilter<"Reserva"> | Date | string
    horaInicio?: DateTimeFilter<"Reserva"> | Date | string
    horaFin?: DateTimeFilter<"Reserva"> | Date | string
    fotografoId?: StringFilter<"Reserva"> | string
    clienteId?: StringFilter<"Reserva"> | string
    photoServiceId?: StringNullableFilter<"Reserva"> | string | null
    estado?: BoolFilter<"Reserva"> | boolean
    precio?: FloatNullableFilter<"Reserva"> | number | null
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    fotografo?: XOR<FotografoScalarRelationFilter, FotografoWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    photoService?: XOR<PhotoServiceNullableScalarRelationFilter, PhotoServiceWhereInput> | null
  }, "id">

  export type ReservaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    fotografoId?: SortOrder
    clienteId?: SortOrder
    photoServiceId?: SortOrderInput | SortOrder
    estado?: SortOrder
    precio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _avg?: ReservaAvgOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
    _sum?: ReservaSumOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reserva"> | string
    fecha?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    horaInicio?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    horaFin?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    fotografoId?: StringWithAggregatesFilter<"Reserva"> | string
    clienteId?: StringWithAggregatesFilter<"Reserva"> | string
    photoServiceId?: StringNullableWithAggregatesFilter<"Reserva"> | string | null
    estado?: BoolWithAggregatesFilter<"Reserva"> | boolean
    precio?: FloatNullableWithAggregatesFilter<"Reserva"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
  }

  export type RolCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
  }

  export type RolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermisoCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    roles?: RolPermisoCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    roles?: RolPermisoUncheckedCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    roles?: RolPermisoUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    roles?: RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoCreateManyInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
  }

  export type PermisoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermisoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolPermisoCreateInput = {
    id?: string
    createAt?: Date | string
    permiso: PermisoCreateNestedOneWithoutRolesInput
    rol: RolCreateNestedOneWithoutPermisosInput
  }

  export type RolPermisoUncheckedCreateInput = {
    id?: string
    rolId: string
    permisoId: string
    createAt?: Date | string
  }

  export type RolPermisoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
  }

  export type RolPermisoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rolId?: StringFieldUpdateOperationsInput | string
    permisoId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolPermisoCreateManyInput = {
    id?: string
    rolId: string
    permisoId: string
    createAt?: Date | string
  }

  export type RolPermisoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolPermisoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rolId?: StringFieldUpdateOperationsInput | string
    permisoId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    debeCambiar: boolean
    rol: RolCreateNestedOneWithoutUsuariosInput
    fotografo?: FotografoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    rolId: string
    debeCambiar: boolean
    fotografo?: FotografoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    debeCambiar?: BoolFieldUpdateOperationsInput | boolean
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    fotografo?: FotografoUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rolId?: StringFieldUpdateOperationsInput | string
    debeCambiar?: BoolFieldUpdateOperationsInput | boolean
    fotografo?: FotografoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    rolId: string
    debeCambiar: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    debeCambiar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rolId?: StringFieldUpdateOperationsInput | string
    debeCambiar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GaleriaCreateInput = {
    id?: string
    nombreFoto: string
    url: string
    fotografo: FotografoCreateNestedOneWithoutGaleriaInput
  }

  export type GaleriaUncheckedCreateInput = {
    id?: string
    nombreFoto: string
    url: string
    fotografoId: string
  }

  export type GaleriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreFoto?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fotografo?: FotografoUpdateOneRequiredWithoutGaleriaNestedInput
  }

  export type GaleriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreFoto?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fotografoId?: StringFieldUpdateOperationsInput | string
  }

  export type GaleriaCreateManyInput = {
    id?: string
    nombreFoto: string
    url: string
    fotografoId: string
  }

  export type GaleriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreFoto?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type GaleriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreFoto?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fotografoId?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteCreateInput = {
    id?: string
    nombre: string
    email: string
    telefono: string
    createAt?: Date | string
    updateAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    telefono: string
    createAt?: Date | string
    updateAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nombre: string
    email: string
    telefono: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    activo: boolean
    services?: PhotoServiceCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    activo: boolean
    services?: PhotoServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    services?: PhotoServiceUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    services?: PhotoServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    activo: boolean
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FotografoCreateInput = {
    id?: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    usuario: UsuarioCreateNestedOneWithoutFotografoInput
    reservas?: ReservaCreateNestedManyWithoutFotografoInput
    galeria?: GaleriaCreateNestedManyWithoutFotografoInput
    unavailabilities?: UnavailabilityCreateNestedManyWithoutFotografoInput
    servicios?: FotografoServicioCreateNestedManyWithoutFotografoInput
  }

  export type FotografoUncheckedCreateInput = {
    id?: string
    usuarioId: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    reservas?: ReservaUncheckedCreateNestedManyWithoutFotografoInput
    galeria?: GaleriaUncheckedCreateNestedManyWithoutFotografoInput
    unavailabilities?: UnavailabilityUncheckedCreateNestedManyWithoutFotografoInput
    servicios?: FotografoServicioUncheckedCreateNestedManyWithoutFotografoInput
  }

  export type FotografoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutFotografoNestedInput
    reservas?: ReservaUpdateManyWithoutFotografoNestedInput
    galeria?: GaleriaUpdateManyWithoutFotografoNestedInput
    unavailabilities?: UnavailabilityUpdateManyWithoutFotografoNestedInput
    servicios?: FotografoServicioUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    reservas?: ReservaUncheckedUpdateManyWithoutFotografoNestedInput
    galeria?: GaleriaUncheckedUpdateManyWithoutFotografoNestedInput
    unavailabilities?: UnavailabilityUncheckedUpdateManyWithoutFotografoNestedInput
    servicios?: FotografoServicioUncheckedUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoCreateManyInput = {
    id?: string
    usuarioId: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
  }

  export type FotografoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FotografoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoServiceCreateInput = {
    id?: string
    name: string
    img: string
    description: string
    precio?: number
    activo?: boolean
    category: CategoryCreateNestedOneWithoutServicesInput
    fotografos?: FotografoServicioCreateNestedManyWithoutServicioInput
    reservas?: ReservaCreateNestedManyWithoutPhotoServiceInput
  }

  export type PhotoServiceUncheckedCreateInput = {
    id?: string
    name: string
    img: string
    description: string
    precio?: number
    activo?: boolean
    categoryId: string
    fotografos?: FotografoServicioUncheckedCreateNestedManyWithoutServicioInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutPhotoServiceInput
  }

  export type PhotoServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    fotografos?: FotografoServicioUpdateManyWithoutServicioNestedInput
    reservas?: ReservaUpdateManyWithoutPhotoServiceNestedInput
  }

  export type PhotoServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    fotografos?: FotografoServicioUncheckedUpdateManyWithoutServicioNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutPhotoServiceNestedInput
  }

  export type PhotoServiceCreateManyInput = {
    id?: string
    name: string
    img: string
    description: string
    precio?: number
    activo?: boolean
    categoryId: string
  }

  export type PhotoServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type FotografoServicioCreateInput = {
    fotografo: FotografoCreateNestedOneWithoutServiciosInput
    servicio: PhotoServiceCreateNestedOneWithoutFotografosInput
  }

  export type FotografoServicioUncheckedCreateInput = {
    fotografoId: string
    servicioId: string
  }

  export type FotografoServicioUpdateInput = {
    fotografo?: FotografoUpdateOneRequiredWithoutServiciosNestedInput
    servicio?: PhotoServiceUpdateOneRequiredWithoutFotografosNestedInput
  }

  export type FotografoServicioUncheckedUpdateInput = {
    fotografoId?: StringFieldUpdateOperationsInput | string
    servicioId?: StringFieldUpdateOperationsInput | string
  }

  export type FotografoServicioCreateManyInput = {
    fotografoId: string
    servicioId: string
  }

  export type FotografoServicioUpdateManyMutationInput = {

  }

  export type FotografoServicioUncheckedUpdateManyInput = {
    fotografoId?: StringFieldUpdateOperationsInput | string
    servicioId?: StringFieldUpdateOperationsInput | string
  }

  export type UnavailabilityCreateInput = {
    id?: string
    recurring: boolean
    weekday?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    activo?: boolean
    fotografo: FotografoCreateNestedOneWithoutUnavailabilitiesInput
  }

  export type UnavailabilityUncheckedCreateInput = {
    id?: string
    fotografoId: string
    recurring: boolean
    weekday?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    activo?: boolean
  }

  export type UnavailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recurring?: BoolFieldUpdateOperationsInput | boolean
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    fotografo?: FotografoUpdateOneRequiredWithoutUnavailabilitiesNestedInput
  }

  export type UnavailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    recurring?: BoolFieldUpdateOperationsInput | boolean
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnavailabilityCreateManyInput = {
    id?: string
    fotografoId: string
    recurring: boolean
    weekday?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    activo?: boolean
  }

  export type UnavailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recurring?: BoolFieldUpdateOperationsInput | boolean
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnavailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    recurring?: BoolFieldUpdateOperationsInput | boolean
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservaCreateInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
    fotografo: FotografoCreateNestedOneWithoutReservasInput
    cliente: ClienteCreateNestedOneWithoutReservasInput
    photoService?: PhotoServiceCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    fotografoId: string
    clienteId: string
    photoServiceId?: string | null
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
  }

  export type ReservaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fotografo?: FotografoUpdateOneRequiredWithoutReservasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    photoService?: PhotoServiceUpdateOneWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    photoServiceId?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    fotografoId: string
    clienteId: string
    photoServiceId?: string | null
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
  }

  export type ReservaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    photoServiceId?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RolPermisoListRelationFilter = {
    every?: RolPermisoWhereInput
    some?: RolPermisoWhereInput
    none?: RolPermisoWhereInput
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type RolPermisoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolOrderByRelevanceInput = {
    fields: RolOrderByRelevanceFieldEnum | RolOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PermisoOrderByRelevanceInput = {
    fields: PermisoOrderByRelevanceFieldEnum | PermisoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PermisoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
  }

  export type PermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
  }

  export type PermisoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
  }

  export type PermisoScalarRelationFilter = {
    is?: PermisoWhereInput
    isNot?: PermisoWhereInput
  }

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type RolPermisoOrderByRelevanceInput = {
    fields: RolPermisoOrderByRelevanceFieldEnum | RolPermisoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RolPermisoRolIdPermisoIdCompoundUniqueInput = {
    rolId: string
    permisoId: string
  }

  export type RolPermisoCountOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    createAt?: SortOrder
  }

  export type RolPermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    createAt?: SortOrder
  }

  export type RolPermisoMinOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    permisoId?: SortOrder
    createAt?: SortOrder
  }

  export type FotografoNullableScalarRelationFilter = {
    is?: FotografoWhereInput | null
    isNot?: FotografoWhereInput | null
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    debeCambiar?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    debeCambiar?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    debeCambiar?: SortOrder
  }

  export type FotografoScalarRelationFilter = {
    is?: FotografoWhereInput
    isNot?: FotografoWhereInput
  }

  export type GaleriaOrderByRelevanceInput = {
    fields: GaleriaOrderByRelevanceFieldEnum | GaleriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GaleriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombreFoto?: SortOrder
    url?: SortOrder
    fotografoId?: SortOrder
  }

  export type GaleriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombreFoto?: SortOrder
    url?: SortOrder
    fotografoId?: SortOrder
  }

  export type GaleriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombreFoto?: SortOrder
    url?: SortOrder
    fotografoId?: SortOrder
  }

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelevanceInput = {
    fields: ClienteOrderByRelevanceFieldEnum | ClienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PhotoServiceListRelationFilter = {
    every?: PhotoServiceWhereInput
    some?: PhotoServiceWhereInput
    none?: PhotoServiceWhereInput
  }

  export type PhotoServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    activo?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    activo?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    activo?: SortOrder
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type GaleriaListRelationFilter = {
    every?: GaleriaWhereInput
    some?: GaleriaWhereInput
    none?: GaleriaWhereInput
  }

  export type UnavailabilityListRelationFilter = {
    every?: UnavailabilityWhereInput
    some?: UnavailabilityWhereInput
    none?: UnavailabilityWhereInput
  }

  export type FotografoServicioListRelationFilter = {
    every?: FotografoServicioWhereInput
    some?: FotografoServicioWhereInput
    none?: FotografoServicioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GaleriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnavailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FotografoServicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FotografoOrderByRelevanceInput = {
    fields: FotografoOrderByRelevanceFieldEnum | FotografoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FotografoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    bio?: SortOrder
    url?: SortOrder
    Foto?: SortOrder
    disponible?: SortOrder
  }

  export type FotografoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    bio?: SortOrder
    url?: SortOrder
    Foto?: SortOrder
    disponible?: SortOrder
  }

  export type FotografoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    bio?: SortOrder
    url?: SortOrder
    Foto?: SortOrder
    disponible?: SortOrder
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type PhotoServiceOrderByRelevanceInput = {
    fields: PhotoServiceOrderByRelevanceFieldEnum | PhotoServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotoServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    description?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    categoryId?: SortOrder
  }

  export type PhotoServiceAvgOrderByAggregateInput = {
    precio?: SortOrder
  }

  export type PhotoServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    description?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    categoryId?: SortOrder
  }

  export type PhotoServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    description?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    categoryId?: SortOrder
  }

  export type PhotoServiceSumOrderByAggregateInput = {
    precio?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type PhotoServiceScalarRelationFilter = {
    is?: PhotoServiceWhereInput
    isNot?: PhotoServiceWhereInput
  }

  export type FotografoServicioOrderByRelevanceInput = {
    fields: FotografoServicioOrderByRelevanceFieldEnum | FotografoServicioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FotografoServicioFotografoIdServicioIdCompoundUniqueInput = {
    fotografoId: string
    servicioId: string
  }

  export type FotografoServicioCountOrderByAggregateInput = {
    fotografoId?: SortOrder
    servicioId?: SortOrder
  }

  export type FotografoServicioMaxOrderByAggregateInput = {
    fotografoId?: SortOrder
    servicioId?: SortOrder
  }

  export type FotografoServicioMinOrderByAggregateInput = {
    fotografoId?: SortOrder
    servicioId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UnavailabilityOrderByRelevanceInput = {
    fields: UnavailabilityOrderByRelevanceFieldEnum | UnavailabilityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UnavailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    fotografoId?: SortOrder
    recurring?: SortOrder
    weekday?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    activo?: SortOrder
  }

  export type UnavailabilityAvgOrderByAggregateInput = {
    weekday?: SortOrder
  }

  export type UnavailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    fotografoId?: SortOrder
    recurring?: SortOrder
    weekday?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    activo?: SortOrder
  }

  export type UnavailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    fotografoId?: SortOrder
    recurring?: SortOrder
    weekday?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    activo?: SortOrder
  }

  export type UnavailabilitySumOrderByAggregateInput = {
    weekday?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type PhotoServiceNullableScalarRelationFilter = {
    is?: PhotoServiceWhereInput | null
    isNot?: PhotoServiceWhereInput | null
  }

  export type ReservaOrderByRelevanceInput = {
    fields: ReservaOrderByRelevanceFieldEnum | ReservaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReservaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    fotografoId?: SortOrder
    clienteId?: SortOrder
    photoServiceId?: SortOrder
    estado?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaAvgOrderByAggregateInput = {
    precio?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    fotografoId?: SortOrder
    clienteId?: SortOrder
    photoServiceId?: SortOrder
    estado?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    fotografoId?: SortOrder
    clienteId?: SortOrder
    photoServiceId?: SortOrder
    estado?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaSumOrderByAggregateInput = {
    precio?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type RolPermisoCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RolPermisoUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput> | RolPermisoCreateWithoutRolInput[] | RolPermisoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutRolInput | RolPermisoCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutRolInput | RolPermisoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisoCreateManyRolInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutRolInput | RolPermisoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutRolInput | RolPermisoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type RolPermisoCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type RolPermisoUncheckedCreateNestedManyWithoutPermisoInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
  }

  export type RolPermisoUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput> | RolPermisoCreateWithoutPermisoInput[] | RolPermisoUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: RolPermisoCreateOrConnectWithoutPermisoInput | RolPermisoCreateOrConnectWithoutPermisoInput[]
    upsert?: RolPermisoUpsertWithWhereUniqueWithoutPermisoInput | RolPermisoUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: RolPermisoCreateManyPermisoInputEnvelope
    set?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    disconnect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    delete?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    connect?: RolPermisoWhereUniqueInput | RolPermisoWhereUniqueInput[]
    update?: RolPermisoUpdateWithWhereUniqueWithoutPermisoInput | RolPermisoUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: RolPermisoUpdateManyWithWhereWithoutPermisoInput | RolPermisoUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
  }

  export type PermisoCreateNestedOneWithoutRolesInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    connect?: PermisoWhereUniqueInput
  }

  export type RolCreateNestedOneWithoutPermisosInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    connect?: RolWhereUniqueInput
  }

  export type PermisoUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    upsert?: PermisoUpsertWithoutRolesInput
    connect?: PermisoWhereUniqueInput
    update?: XOR<XOR<PermisoUpdateToOneWithWhereWithoutRolesInput, PermisoUpdateWithoutRolesInput>, PermisoUncheckedUpdateWithoutRolesInput>
  }

  export type RolUpdateOneRequiredWithoutPermisosNestedInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    upsert?: RolUpsertWithoutPermisosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutPermisosInput, RolUpdateWithoutPermisosInput>, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type FotografoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FotografoCreateWithoutUsuarioInput, FotografoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutUsuarioInput
    connect?: FotografoWhereUniqueInput
  }

  export type FotografoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FotografoCreateWithoutUsuarioInput, FotografoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutUsuarioInput
    connect?: FotografoWhereUniqueInput
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type FotografoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FotografoCreateWithoutUsuarioInput, FotografoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutUsuarioInput
    upsert?: FotografoUpsertWithoutUsuarioInput
    disconnect?: FotografoWhereInput | boolean
    delete?: FotografoWhereInput | boolean
    connect?: FotografoWhereUniqueInput
    update?: XOR<XOR<FotografoUpdateToOneWithWhereWithoutUsuarioInput, FotografoUpdateWithoutUsuarioInput>, FotografoUncheckedUpdateWithoutUsuarioInput>
  }

  export type FotografoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FotografoCreateWithoutUsuarioInput, FotografoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutUsuarioInput
    upsert?: FotografoUpsertWithoutUsuarioInput
    disconnect?: FotografoWhereInput | boolean
    delete?: FotografoWhereInput | boolean
    connect?: FotografoWhereUniqueInput
    update?: XOR<XOR<FotografoUpdateToOneWithWhereWithoutUsuarioInput, FotografoUpdateWithoutUsuarioInput>, FotografoUncheckedUpdateWithoutUsuarioInput>
  }

  export type FotografoCreateNestedOneWithoutGaleriaInput = {
    create?: XOR<FotografoCreateWithoutGaleriaInput, FotografoUncheckedCreateWithoutGaleriaInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutGaleriaInput
    connect?: FotografoWhereUniqueInput
  }

  export type FotografoUpdateOneRequiredWithoutGaleriaNestedInput = {
    create?: XOR<FotografoCreateWithoutGaleriaInput, FotografoUncheckedCreateWithoutGaleriaInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutGaleriaInput
    upsert?: FotografoUpsertWithoutGaleriaInput
    connect?: FotografoWhereUniqueInput
    update?: XOR<XOR<FotografoUpdateToOneWithWhereWithoutGaleriaInput, FotografoUpdateWithoutGaleriaInput>, FotografoUncheckedUpdateWithoutGaleriaInput>
  }

  export type ReservaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutClienteInput | ReservaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutClienteInput | ReservaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutClienteInput | ReservaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutClienteInput | ReservaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutClienteInput | ReservaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutClienteInput | ReservaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type PhotoServiceCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PhotoServiceCreateWithoutCategoryInput, PhotoServiceUncheckedCreateWithoutCategoryInput> | PhotoServiceCreateWithoutCategoryInput[] | PhotoServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PhotoServiceCreateOrConnectWithoutCategoryInput | PhotoServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: PhotoServiceCreateManyCategoryInputEnvelope
    connect?: PhotoServiceWhereUniqueInput | PhotoServiceWhereUniqueInput[]
  }

  export type PhotoServiceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PhotoServiceCreateWithoutCategoryInput, PhotoServiceUncheckedCreateWithoutCategoryInput> | PhotoServiceCreateWithoutCategoryInput[] | PhotoServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PhotoServiceCreateOrConnectWithoutCategoryInput | PhotoServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: PhotoServiceCreateManyCategoryInputEnvelope
    connect?: PhotoServiceWhereUniqueInput | PhotoServiceWhereUniqueInput[]
  }

  export type PhotoServiceUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PhotoServiceCreateWithoutCategoryInput, PhotoServiceUncheckedCreateWithoutCategoryInput> | PhotoServiceCreateWithoutCategoryInput[] | PhotoServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PhotoServiceCreateOrConnectWithoutCategoryInput | PhotoServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: PhotoServiceUpsertWithWhereUniqueWithoutCategoryInput | PhotoServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PhotoServiceCreateManyCategoryInputEnvelope
    set?: PhotoServiceWhereUniqueInput | PhotoServiceWhereUniqueInput[]
    disconnect?: PhotoServiceWhereUniqueInput | PhotoServiceWhereUniqueInput[]
    delete?: PhotoServiceWhereUniqueInput | PhotoServiceWhereUniqueInput[]
    connect?: PhotoServiceWhereUniqueInput | PhotoServiceWhereUniqueInput[]
    update?: PhotoServiceUpdateWithWhereUniqueWithoutCategoryInput | PhotoServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PhotoServiceUpdateManyWithWhereWithoutCategoryInput | PhotoServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PhotoServiceScalarWhereInput | PhotoServiceScalarWhereInput[]
  }

  export type PhotoServiceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PhotoServiceCreateWithoutCategoryInput, PhotoServiceUncheckedCreateWithoutCategoryInput> | PhotoServiceCreateWithoutCategoryInput[] | PhotoServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PhotoServiceCreateOrConnectWithoutCategoryInput | PhotoServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: PhotoServiceUpsertWithWhereUniqueWithoutCategoryInput | PhotoServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PhotoServiceCreateManyCategoryInputEnvelope
    set?: PhotoServiceWhereUniqueInput | PhotoServiceWhereUniqueInput[]
    disconnect?: PhotoServiceWhereUniqueInput | PhotoServiceWhereUniqueInput[]
    delete?: PhotoServiceWhereUniqueInput | PhotoServiceWhereUniqueInput[]
    connect?: PhotoServiceWhereUniqueInput | PhotoServiceWhereUniqueInput[]
    update?: PhotoServiceUpdateWithWhereUniqueWithoutCategoryInput | PhotoServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PhotoServiceUpdateManyWithWhereWithoutCategoryInput | PhotoServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PhotoServiceScalarWhereInput | PhotoServiceScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutFotografoInput = {
    create?: XOR<UsuarioCreateWithoutFotografoInput, UsuarioUncheckedCreateWithoutFotografoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFotografoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ReservaCreateNestedManyWithoutFotografoInput = {
    create?: XOR<ReservaCreateWithoutFotografoInput, ReservaUncheckedCreateWithoutFotografoInput> | ReservaCreateWithoutFotografoInput[] | ReservaUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutFotografoInput | ReservaCreateOrConnectWithoutFotografoInput[]
    createMany?: ReservaCreateManyFotografoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type GaleriaCreateNestedManyWithoutFotografoInput = {
    create?: XOR<GaleriaCreateWithoutFotografoInput, GaleriaUncheckedCreateWithoutFotografoInput> | GaleriaCreateWithoutFotografoInput[] | GaleriaUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: GaleriaCreateOrConnectWithoutFotografoInput | GaleriaCreateOrConnectWithoutFotografoInput[]
    createMany?: GaleriaCreateManyFotografoInputEnvelope
    connect?: GaleriaWhereUniqueInput | GaleriaWhereUniqueInput[]
  }

  export type UnavailabilityCreateNestedManyWithoutFotografoInput = {
    create?: XOR<UnavailabilityCreateWithoutFotografoInput, UnavailabilityUncheckedCreateWithoutFotografoInput> | UnavailabilityCreateWithoutFotografoInput[] | UnavailabilityUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: UnavailabilityCreateOrConnectWithoutFotografoInput | UnavailabilityCreateOrConnectWithoutFotografoInput[]
    createMany?: UnavailabilityCreateManyFotografoInputEnvelope
    connect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
  }

  export type FotografoServicioCreateNestedManyWithoutFotografoInput = {
    create?: XOR<FotografoServicioCreateWithoutFotografoInput, FotografoServicioUncheckedCreateWithoutFotografoInput> | FotografoServicioCreateWithoutFotografoInput[] | FotografoServicioUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: FotografoServicioCreateOrConnectWithoutFotografoInput | FotografoServicioCreateOrConnectWithoutFotografoInput[]
    createMany?: FotografoServicioCreateManyFotografoInputEnvelope
    connect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutFotografoInput = {
    create?: XOR<ReservaCreateWithoutFotografoInput, ReservaUncheckedCreateWithoutFotografoInput> | ReservaCreateWithoutFotografoInput[] | ReservaUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutFotografoInput | ReservaCreateOrConnectWithoutFotografoInput[]
    createMany?: ReservaCreateManyFotografoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type GaleriaUncheckedCreateNestedManyWithoutFotografoInput = {
    create?: XOR<GaleriaCreateWithoutFotografoInput, GaleriaUncheckedCreateWithoutFotografoInput> | GaleriaCreateWithoutFotografoInput[] | GaleriaUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: GaleriaCreateOrConnectWithoutFotografoInput | GaleriaCreateOrConnectWithoutFotografoInput[]
    createMany?: GaleriaCreateManyFotografoInputEnvelope
    connect?: GaleriaWhereUniqueInput | GaleriaWhereUniqueInput[]
  }

  export type UnavailabilityUncheckedCreateNestedManyWithoutFotografoInput = {
    create?: XOR<UnavailabilityCreateWithoutFotografoInput, UnavailabilityUncheckedCreateWithoutFotografoInput> | UnavailabilityCreateWithoutFotografoInput[] | UnavailabilityUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: UnavailabilityCreateOrConnectWithoutFotografoInput | UnavailabilityCreateOrConnectWithoutFotografoInput[]
    createMany?: UnavailabilityCreateManyFotografoInputEnvelope
    connect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
  }

  export type FotografoServicioUncheckedCreateNestedManyWithoutFotografoInput = {
    create?: XOR<FotografoServicioCreateWithoutFotografoInput, FotografoServicioUncheckedCreateWithoutFotografoInput> | FotografoServicioCreateWithoutFotografoInput[] | FotografoServicioUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: FotografoServicioCreateOrConnectWithoutFotografoInput | FotografoServicioCreateOrConnectWithoutFotografoInput[]
    createMany?: FotografoServicioCreateManyFotografoInputEnvelope
    connect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneRequiredWithoutFotografoNestedInput = {
    create?: XOR<UsuarioCreateWithoutFotografoInput, UsuarioUncheckedCreateWithoutFotografoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFotografoInput
    upsert?: UsuarioUpsertWithoutFotografoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFotografoInput, UsuarioUpdateWithoutFotografoInput>, UsuarioUncheckedUpdateWithoutFotografoInput>
  }

  export type ReservaUpdateManyWithoutFotografoNestedInput = {
    create?: XOR<ReservaCreateWithoutFotografoInput, ReservaUncheckedCreateWithoutFotografoInput> | ReservaCreateWithoutFotografoInput[] | ReservaUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutFotografoInput | ReservaCreateOrConnectWithoutFotografoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutFotografoInput | ReservaUpsertWithWhereUniqueWithoutFotografoInput[]
    createMany?: ReservaCreateManyFotografoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutFotografoInput | ReservaUpdateWithWhereUniqueWithoutFotografoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutFotografoInput | ReservaUpdateManyWithWhereWithoutFotografoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type GaleriaUpdateManyWithoutFotografoNestedInput = {
    create?: XOR<GaleriaCreateWithoutFotografoInput, GaleriaUncheckedCreateWithoutFotografoInput> | GaleriaCreateWithoutFotografoInput[] | GaleriaUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: GaleriaCreateOrConnectWithoutFotografoInput | GaleriaCreateOrConnectWithoutFotografoInput[]
    upsert?: GaleriaUpsertWithWhereUniqueWithoutFotografoInput | GaleriaUpsertWithWhereUniqueWithoutFotografoInput[]
    createMany?: GaleriaCreateManyFotografoInputEnvelope
    set?: GaleriaWhereUniqueInput | GaleriaWhereUniqueInput[]
    disconnect?: GaleriaWhereUniqueInput | GaleriaWhereUniqueInput[]
    delete?: GaleriaWhereUniqueInput | GaleriaWhereUniqueInput[]
    connect?: GaleriaWhereUniqueInput | GaleriaWhereUniqueInput[]
    update?: GaleriaUpdateWithWhereUniqueWithoutFotografoInput | GaleriaUpdateWithWhereUniqueWithoutFotografoInput[]
    updateMany?: GaleriaUpdateManyWithWhereWithoutFotografoInput | GaleriaUpdateManyWithWhereWithoutFotografoInput[]
    deleteMany?: GaleriaScalarWhereInput | GaleriaScalarWhereInput[]
  }

  export type UnavailabilityUpdateManyWithoutFotografoNestedInput = {
    create?: XOR<UnavailabilityCreateWithoutFotografoInput, UnavailabilityUncheckedCreateWithoutFotografoInput> | UnavailabilityCreateWithoutFotografoInput[] | UnavailabilityUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: UnavailabilityCreateOrConnectWithoutFotografoInput | UnavailabilityCreateOrConnectWithoutFotografoInput[]
    upsert?: UnavailabilityUpsertWithWhereUniqueWithoutFotografoInput | UnavailabilityUpsertWithWhereUniqueWithoutFotografoInput[]
    createMany?: UnavailabilityCreateManyFotografoInputEnvelope
    set?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    disconnect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    delete?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    connect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    update?: UnavailabilityUpdateWithWhereUniqueWithoutFotografoInput | UnavailabilityUpdateWithWhereUniqueWithoutFotografoInput[]
    updateMany?: UnavailabilityUpdateManyWithWhereWithoutFotografoInput | UnavailabilityUpdateManyWithWhereWithoutFotografoInput[]
    deleteMany?: UnavailabilityScalarWhereInput | UnavailabilityScalarWhereInput[]
  }

  export type FotografoServicioUpdateManyWithoutFotografoNestedInput = {
    create?: XOR<FotografoServicioCreateWithoutFotografoInput, FotografoServicioUncheckedCreateWithoutFotografoInput> | FotografoServicioCreateWithoutFotografoInput[] | FotografoServicioUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: FotografoServicioCreateOrConnectWithoutFotografoInput | FotografoServicioCreateOrConnectWithoutFotografoInput[]
    upsert?: FotografoServicioUpsertWithWhereUniqueWithoutFotografoInput | FotografoServicioUpsertWithWhereUniqueWithoutFotografoInput[]
    createMany?: FotografoServicioCreateManyFotografoInputEnvelope
    set?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    disconnect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    delete?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    connect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    update?: FotografoServicioUpdateWithWhereUniqueWithoutFotografoInput | FotografoServicioUpdateWithWhereUniqueWithoutFotografoInput[]
    updateMany?: FotografoServicioUpdateManyWithWhereWithoutFotografoInput | FotografoServicioUpdateManyWithWhereWithoutFotografoInput[]
    deleteMany?: FotografoServicioScalarWhereInput | FotografoServicioScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutFotografoNestedInput = {
    create?: XOR<ReservaCreateWithoutFotografoInput, ReservaUncheckedCreateWithoutFotografoInput> | ReservaCreateWithoutFotografoInput[] | ReservaUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutFotografoInput | ReservaCreateOrConnectWithoutFotografoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutFotografoInput | ReservaUpsertWithWhereUniqueWithoutFotografoInput[]
    createMany?: ReservaCreateManyFotografoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutFotografoInput | ReservaUpdateWithWhereUniqueWithoutFotografoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutFotografoInput | ReservaUpdateManyWithWhereWithoutFotografoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type GaleriaUncheckedUpdateManyWithoutFotografoNestedInput = {
    create?: XOR<GaleriaCreateWithoutFotografoInput, GaleriaUncheckedCreateWithoutFotografoInput> | GaleriaCreateWithoutFotografoInput[] | GaleriaUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: GaleriaCreateOrConnectWithoutFotografoInput | GaleriaCreateOrConnectWithoutFotografoInput[]
    upsert?: GaleriaUpsertWithWhereUniqueWithoutFotografoInput | GaleriaUpsertWithWhereUniqueWithoutFotografoInput[]
    createMany?: GaleriaCreateManyFotografoInputEnvelope
    set?: GaleriaWhereUniqueInput | GaleriaWhereUniqueInput[]
    disconnect?: GaleriaWhereUniqueInput | GaleriaWhereUniqueInput[]
    delete?: GaleriaWhereUniqueInput | GaleriaWhereUniqueInput[]
    connect?: GaleriaWhereUniqueInput | GaleriaWhereUniqueInput[]
    update?: GaleriaUpdateWithWhereUniqueWithoutFotografoInput | GaleriaUpdateWithWhereUniqueWithoutFotografoInput[]
    updateMany?: GaleriaUpdateManyWithWhereWithoutFotografoInput | GaleriaUpdateManyWithWhereWithoutFotografoInput[]
    deleteMany?: GaleriaScalarWhereInput | GaleriaScalarWhereInput[]
  }

  export type UnavailabilityUncheckedUpdateManyWithoutFotografoNestedInput = {
    create?: XOR<UnavailabilityCreateWithoutFotografoInput, UnavailabilityUncheckedCreateWithoutFotografoInput> | UnavailabilityCreateWithoutFotografoInput[] | UnavailabilityUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: UnavailabilityCreateOrConnectWithoutFotografoInput | UnavailabilityCreateOrConnectWithoutFotografoInput[]
    upsert?: UnavailabilityUpsertWithWhereUniqueWithoutFotografoInput | UnavailabilityUpsertWithWhereUniqueWithoutFotografoInput[]
    createMany?: UnavailabilityCreateManyFotografoInputEnvelope
    set?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    disconnect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    delete?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    connect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    update?: UnavailabilityUpdateWithWhereUniqueWithoutFotografoInput | UnavailabilityUpdateWithWhereUniqueWithoutFotografoInput[]
    updateMany?: UnavailabilityUpdateManyWithWhereWithoutFotografoInput | UnavailabilityUpdateManyWithWhereWithoutFotografoInput[]
    deleteMany?: UnavailabilityScalarWhereInput | UnavailabilityScalarWhereInput[]
  }

  export type FotografoServicioUncheckedUpdateManyWithoutFotografoNestedInput = {
    create?: XOR<FotografoServicioCreateWithoutFotografoInput, FotografoServicioUncheckedCreateWithoutFotografoInput> | FotografoServicioCreateWithoutFotografoInput[] | FotografoServicioUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: FotografoServicioCreateOrConnectWithoutFotografoInput | FotografoServicioCreateOrConnectWithoutFotografoInput[]
    upsert?: FotografoServicioUpsertWithWhereUniqueWithoutFotografoInput | FotografoServicioUpsertWithWhereUniqueWithoutFotografoInput[]
    createMany?: FotografoServicioCreateManyFotografoInputEnvelope
    set?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    disconnect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    delete?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    connect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    update?: FotografoServicioUpdateWithWhereUniqueWithoutFotografoInput | FotografoServicioUpdateWithWhereUniqueWithoutFotografoInput[]
    updateMany?: FotografoServicioUpdateManyWithWhereWithoutFotografoInput | FotografoServicioUpdateManyWithWhereWithoutFotografoInput[]
    deleteMany?: FotografoServicioScalarWhereInput | FotografoServicioScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutServicesInput = {
    create?: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
    connect?: CategoryWhereUniqueInput
  }

  export type FotografoServicioCreateNestedManyWithoutServicioInput = {
    create?: XOR<FotografoServicioCreateWithoutServicioInput, FotografoServicioUncheckedCreateWithoutServicioInput> | FotografoServicioCreateWithoutServicioInput[] | FotografoServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: FotografoServicioCreateOrConnectWithoutServicioInput | FotografoServicioCreateOrConnectWithoutServicioInput[]
    createMany?: FotografoServicioCreateManyServicioInputEnvelope
    connect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
  }

  export type ReservaCreateNestedManyWithoutPhotoServiceInput = {
    create?: XOR<ReservaCreateWithoutPhotoServiceInput, ReservaUncheckedCreateWithoutPhotoServiceInput> | ReservaCreateWithoutPhotoServiceInput[] | ReservaUncheckedCreateWithoutPhotoServiceInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutPhotoServiceInput | ReservaCreateOrConnectWithoutPhotoServiceInput[]
    createMany?: ReservaCreateManyPhotoServiceInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type FotografoServicioUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<FotografoServicioCreateWithoutServicioInput, FotografoServicioUncheckedCreateWithoutServicioInput> | FotografoServicioCreateWithoutServicioInput[] | FotografoServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: FotografoServicioCreateOrConnectWithoutServicioInput | FotografoServicioCreateOrConnectWithoutServicioInput[]
    createMany?: FotografoServicioCreateManyServicioInputEnvelope
    connect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutPhotoServiceInput = {
    create?: XOR<ReservaCreateWithoutPhotoServiceInput, ReservaUncheckedCreateWithoutPhotoServiceInput> | ReservaCreateWithoutPhotoServiceInput[] | ReservaUncheckedCreateWithoutPhotoServiceInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutPhotoServiceInput | ReservaCreateOrConnectWithoutPhotoServiceInput[]
    createMany?: ReservaCreateManyPhotoServiceInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
    upsert?: CategoryUpsertWithoutServicesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutServicesInput, CategoryUpdateWithoutServicesInput>, CategoryUncheckedUpdateWithoutServicesInput>
  }

  export type FotografoServicioUpdateManyWithoutServicioNestedInput = {
    create?: XOR<FotografoServicioCreateWithoutServicioInput, FotografoServicioUncheckedCreateWithoutServicioInput> | FotografoServicioCreateWithoutServicioInput[] | FotografoServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: FotografoServicioCreateOrConnectWithoutServicioInput | FotografoServicioCreateOrConnectWithoutServicioInput[]
    upsert?: FotografoServicioUpsertWithWhereUniqueWithoutServicioInput | FotografoServicioUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: FotografoServicioCreateManyServicioInputEnvelope
    set?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    disconnect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    delete?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    connect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    update?: FotografoServicioUpdateWithWhereUniqueWithoutServicioInput | FotografoServicioUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: FotografoServicioUpdateManyWithWhereWithoutServicioInput | FotografoServicioUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: FotografoServicioScalarWhereInput | FotografoServicioScalarWhereInput[]
  }

  export type ReservaUpdateManyWithoutPhotoServiceNestedInput = {
    create?: XOR<ReservaCreateWithoutPhotoServiceInput, ReservaUncheckedCreateWithoutPhotoServiceInput> | ReservaCreateWithoutPhotoServiceInput[] | ReservaUncheckedCreateWithoutPhotoServiceInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutPhotoServiceInput | ReservaCreateOrConnectWithoutPhotoServiceInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutPhotoServiceInput | ReservaUpsertWithWhereUniqueWithoutPhotoServiceInput[]
    createMany?: ReservaCreateManyPhotoServiceInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutPhotoServiceInput | ReservaUpdateWithWhereUniqueWithoutPhotoServiceInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutPhotoServiceInput | ReservaUpdateManyWithWhereWithoutPhotoServiceInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type FotografoServicioUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<FotografoServicioCreateWithoutServicioInput, FotografoServicioUncheckedCreateWithoutServicioInput> | FotografoServicioCreateWithoutServicioInput[] | FotografoServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: FotografoServicioCreateOrConnectWithoutServicioInput | FotografoServicioCreateOrConnectWithoutServicioInput[]
    upsert?: FotografoServicioUpsertWithWhereUniqueWithoutServicioInput | FotografoServicioUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: FotografoServicioCreateManyServicioInputEnvelope
    set?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    disconnect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    delete?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    connect?: FotografoServicioWhereUniqueInput | FotografoServicioWhereUniqueInput[]
    update?: FotografoServicioUpdateWithWhereUniqueWithoutServicioInput | FotografoServicioUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: FotografoServicioUpdateManyWithWhereWithoutServicioInput | FotografoServicioUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: FotografoServicioScalarWhereInput | FotografoServicioScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutPhotoServiceNestedInput = {
    create?: XOR<ReservaCreateWithoutPhotoServiceInput, ReservaUncheckedCreateWithoutPhotoServiceInput> | ReservaCreateWithoutPhotoServiceInput[] | ReservaUncheckedCreateWithoutPhotoServiceInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutPhotoServiceInput | ReservaCreateOrConnectWithoutPhotoServiceInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutPhotoServiceInput | ReservaUpsertWithWhereUniqueWithoutPhotoServiceInput[]
    createMany?: ReservaCreateManyPhotoServiceInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutPhotoServiceInput | ReservaUpdateWithWhereUniqueWithoutPhotoServiceInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutPhotoServiceInput | ReservaUpdateManyWithWhereWithoutPhotoServiceInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type FotografoCreateNestedOneWithoutServiciosInput = {
    create?: XOR<FotografoCreateWithoutServiciosInput, FotografoUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutServiciosInput
    connect?: FotografoWhereUniqueInput
  }

  export type PhotoServiceCreateNestedOneWithoutFotografosInput = {
    create?: XOR<PhotoServiceCreateWithoutFotografosInput, PhotoServiceUncheckedCreateWithoutFotografosInput>
    connectOrCreate?: PhotoServiceCreateOrConnectWithoutFotografosInput
    connect?: PhotoServiceWhereUniqueInput
  }

  export type FotografoUpdateOneRequiredWithoutServiciosNestedInput = {
    create?: XOR<FotografoCreateWithoutServiciosInput, FotografoUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutServiciosInput
    upsert?: FotografoUpsertWithoutServiciosInput
    connect?: FotografoWhereUniqueInput
    update?: XOR<XOR<FotografoUpdateToOneWithWhereWithoutServiciosInput, FotografoUpdateWithoutServiciosInput>, FotografoUncheckedUpdateWithoutServiciosInput>
  }

  export type PhotoServiceUpdateOneRequiredWithoutFotografosNestedInput = {
    create?: XOR<PhotoServiceCreateWithoutFotografosInput, PhotoServiceUncheckedCreateWithoutFotografosInput>
    connectOrCreate?: PhotoServiceCreateOrConnectWithoutFotografosInput
    upsert?: PhotoServiceUpsertWithoutFotografosInput
    connect?: PhotoServiceWhereUniqueInput
    update?: XOR<XOR<PhotoServiceUpdateToOneWithWhereWithoutFotografosInput, PhotoServiceUpdateWithoutFotografosInput>, PhotoServiceUncheckedUpdateWithoutFotografosInput>
  }

  export type FotografoCreateNestedOneWithoutUnavailabilitiesInput = {
    create?: XOR<FotografoCreateWithoutUnavailabilitiesInput, FotografoUncheckedCreateWithoutUnavailabilitiesInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutUnavailabilitiesInput
    connect?: FotografoWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FotografoUpdateOneRequiredWithoutUnavailabilitiesNestedInput = {
    create?: XOR<FotografoCreateWithoutUnavailabilitiesInput, FotografoUncheckedCreateWithoutUnavailabilitiesInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutUnavailabilitiesInput
    upsert?: FotografoUpsertWithoutUnavailabilitiesInput
    connect?: FotografoWhereUniqueInput
    update?: XOR<XOR<FotografoUpdateToOneWithWhereWithoutUnavailabilitiesInput, FotografoUpdateWithoutUnavailabilitiesInput>, FotografoUncheckedUpdateWithoutUnavailabilitiesInput>
  }

  export type FotografoCreateNestedOneWithoutReservasInput = {
    create?: XOR<FotografoCreateWithoutReservasInput, FotografoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutReservasInput
    connect?: FotografoWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutReservasInput = {
    create?: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutReservasInput
    connect?: ClienteWhereUniqueInput
  }

  export type PhotoServiceCreateNestedOneWithoutReservasInput = {
    create?: XOR<PhotoServiceCreateWithoutReservasInput, PhotoServiceUncheckedCreateWithoutReservasInput>
    connectOrCreate?: PhotoServiceCreateOrConnectWithoutReservasInput
    connect?: PhotoServiceWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FotografoUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<FotografoCreateWithoutReservasInput, FotografoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutReservasInput
    upsert?: FotografoUpsertWithoutReservasInput
    connect?: FotografoWhereUniqueInput
    update?: XOR<XOR<FotografoUpdateToOneWithWhereWithoutReservasInput, FotografoUpdateWithoutReservasInput>, FotografoUncheckedUpdateWithoutReservasInput>
  }

  export type ClienteUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutReservasInput
    upsert?: ClienteUpsertWithoutReservasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutReservasInput, ClienteUpdateWithoutReservasInput>, ClienteUncheckedUpdateWithoutReservasInput>
  }

  export type PhotoServiceUpdateOneWithoutReservasNestedInput = {
    create?: XOR<PhotoServiceCreateWithoutReservasInput, PhotoServiceUncheckedCreateWithoutReservasInput>
    connectOrCreate?: PhotoServiceCreateOrConnectWithoutReservasInput
    upsert?: PhotoServiceUpsertWithoutReservasInput
    disconnect?: PhotoServiceWhereInput | boolean
    delete?: PhotoServiceWhereInput | boolean
    connect?: PhotoServiceWhereUniqueInput
    update?: XOR<XOR<PhotoServiceUpdateToOneWithWhereWithoutReservasInput, PhotoServiceUpdateWithoutReservasInput>, PhotoServiceUncheckedUpdateWithoutReservasInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    search?: string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type RolPermisoCreateWithoutRolInput = {
    id?: string
    createAt?: Date | string
    permiso: PermisoCreateNestedOneWithoutRolesInput
  }

  export type RolPermisoUncheckedCreateWithoutRolInput = {
    id?: string
    permisoId: string
    createAt?: Date | string
  }

  export type RolPermisoCreateOrConnectWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoCreateManyRolInputEnvelope = {
    data: RolPermisoCreateManyRolInput | RolPermisoCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutRolInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    debeCambiar: boolean
    fotografo?: FotografoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRolInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    debeCambiar: boolean
    fotografo?: FotografoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioCreateManyRolInputEnvelope = {
    data: UsuarioCreateManyRolInput | UsuarioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
    create: XOR<RolPermisoCreateWithoutRolInput, RolPermisoUncheckedCreateWithoutRolInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutRolInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutRolInput, RolPermisoUncheckedUpdateWithoutRolInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutRolInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutRolInput>
  }

  export type RolPermisoScalarWhereInput = {
    AND?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    OR?: RolPermisoScalarWhereInput[]
    NOT?: RolPermisoScalarWhereInput | RolPermisoScalarWhereInput[]
    id?: StringFilter<"RolPermiso"> | string
    rolId?: StringFilter<"RolPermiso"> | string
    permisoId?: StringFilter<"RolPermiso"> | string
    createAt?: DateTimeFilter<"RolPermiso"> | Date | string
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRolInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createAt?: DateTimeFilter<"Usuario"> | Date | string
    updateAt?: DateTimeFilter<"Usuario"> | Date | string
    activo?: BoolFilter<"Usuario"> | boolean
    rolId?: StringFilter<"Usuario"> | string
    debeCambiar?: BoolFilter<"Usuario"> | boolean
  }

  export type RolPermisoCreateWithoutPermisoInput = {
    id?: string
    createAt?: Date | string
    rol: RolCreateNestedOneWithoutPermisosInput
  }

  export type RolPermisoUncheckedCreateWithoutPermisoInput = {
    id?: string
    rolId: string
    createAt?: Date | string
  }

  export type RolPermisoCreateOrConnectWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoCreateManyPermisoInputEnvelope = {
    data: RolPermisoCreateManyPermisoInput | RolPermisoCreateManyPermisoInput[]
    skipDuplicates?: boolean
  }

  export type RolPermisoUpsertWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    update: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
    create: XOR<RolPermisoCreateWithoutPermisoInput, RolPermisoUncheckedCreateWithoutPermisoInput>
  }

  export type RolPermisoUpdateWithWhereUniqueWithoutPermisoInput = {
    where: RolPermisoWhereUniqueInput
    data: XOR<RolPermisoUpdateWithoutPermisoInput, RolPermisoUncheckedUpdateWithoutPermisoInput>
  }

  export type RolPermisoUpdateManyWithWhereWithoutPermisoInput = {
    where: RolPermisoScalarWhereInput
    data: XOR<RolPermisoUpdateManyMutationInput, RolPermisoUncheckedUpdateManyWithoutPermisoInput>
  }

  export type PermisoCreateWithoutRolesInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
  }

  export type PermisoUncheckedCreateWithoutRolesInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
  }

  export type PermisoCreateOrConnectWithoutRolesInput = {
    where: PermisoWhereUniqueInput
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
  }

  export type RolCreateWithoutPermisosInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutPermisosInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutPermisosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
  }

  export type PermisoUpsertWithoutRolesInput = {
    update: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    where?: PermisoWhereInput
  }

  export type PermisoUpdateToOneWithWhereWithoutRolesInput = {
    where?: PermisoWhereInput
    data: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
  }

  export type PermisoUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermisoUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolUpsertWithoutPermisosInput = {
    update: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutPermisosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type RolUpdateWithoutPermisosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutPermisosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateWithoutUsuariosInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    permisos?: RolPermisoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nombre: string
    descripcion: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    permisos?: RolPermisoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type FotografoCreateWithoutUsuarioInput = {
    id?: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    reservas?: ReservaCreateNestedManyWithoutFotografoInput
    galeria?: GaleriaCreateNestedManyWithoutFotografoInput
    unavailabilities?: UnavailabilityCreateNestedManyWithoutFotografoInput
    servicios?: FotografoServicioCreateNestedManyWithoutFotografoInput
  }

  export type FotografoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    reservas?: ReservaUncheckedCreateNestedManyWithoutFotografoInput
    galeria?: GaleriaUncheckedCreateNestedManyWithoutFotografoInput
    unavailabilities?: UnavailabilityUncheckedCreateNestedManyWithoutFotografoInput
    servicios?: FotografoServicioUncheckedCreateNestedManyWithoutFotografoInput
  }

  export type FotografoCreateOrConnectWithoutUsuarioInput = {
    where: FotografoWhereUniqueInput
    create: XOR<FotografoCreateWithoutUsuarioInput, FotografoUncheckedCreateWithoutUsuarioInput>
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    permisos?: RolPermisoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    permisos?: RolPermisoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type FotografoUpsertWithoutUsuarioInput = {
    update: XOR<FotografoUpdateWithoutUsuarioInput, FotografoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FotografoCreateWithoutUsuarioInput, FotografoUncheckedCreateWithoutUsuarioInput>
    where?: FotografoWhereInput
  }

  export type FotografoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: FotografoWhereInput
    data: XOR<FotografoUpdateWithoutUsuarioInput, FotografoUncheckedUpdateWithoutUsuarioInput>
  }

  export type FotografoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    reservas?: ReservaUpdateManyWithoutFotografoNestedInput
    galeria?: GaleriaUpdateManyWithoutFotografoNestedInput
    unavailabilities?: UnavailabilityUpdateManyWithoutFotografoNestedInput
    servicios?: FotografoServicioUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    reservas?: ReservaUncheckedUpdateManyWithoutFotografoNestedInput
    galeria?: GaleriaUncheckedUpdateManyWithoutFotografoNestedInput
    unavailabilities?: UnavailabilityUncheckedUpdateManyWithoutFotografoNestedInput
    servicios?: FotografoServicioUncheckedUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoCreateWithoutGaleriaInput = {
    id?: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    usuario: UsuarioCreateNestedOneWithoutFotografoInput
    reservas?: ReservaCreateNestedManyWithoutFotografoInput
    unavailabilities?: UnavailabilityCreateNestedManyWithoutFotografoInput
    servicios?: FotografoServicioCreateNestedManyWithoutFotografoInput
  }

  export type FotografoUncheckedCreateWithoutGaleriaInput = {
    id?: string
    usuarioId: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    reservas?: ReservaUncheckedCreateNestedManyWithoutFotografoInput
    unavailabilities?: UnavailabilityUncheckedCreateNestedManyWithoutFotografoInput
    servicios?: FotografoServicioUncheckedCreateNestedManyWithoutFotografoInput
  }

  export type FotografoCreateOrConnectWithoutGaleriaInput = {
    where: FotografoWhereUniqueInput
    create: XOR<FotografoCreateWithoutGaleriaInput, FotografoUncheckedCreateWithoutGaleriaInput>
  }

  export type FotografoUpsertWithoutGaleriaInput = {
    update: XOR<FotografoUpdateWithoutGaleriaInput, FotografoUncheckedUpdateWithoutGaleriaInput>
    create: XOR<FotografoCreateWithoutGaleriaInput, FotografoUncheckedCreateWithoutGaleriaInput>
    where?: FotografoWhereInput
  }

  export type FotografoUpdateToOneWithWhereWithoutGaleriaInput = {
    where?: FotografoWhereInput
    data: XOR<FotografoUpdateWithoutGaleriaInput, FotografoUncheckedUpdateWithoutGaleriaInput>
  }

  export type FotografoUpdateWithoutGaleriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutFotografoNestedInput
    reservas?: ReservaUpdateManyWithoutFotografoNestedInput
    unavailabilities?: UnavailabilityUpdateManyWithoutFotografoNestedInput
    servicios?: FotografoServicioUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoUncheckedUpdateWithoutGaleriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    reservas?: ReservaUncheckedUpdateManyWithoutFotografoNestedInput
    unavailabilities?: UnavailabilityUncheckedUpdateManyWithoutFotografoNestedInput
    servicios?: FotografoServicioUncheckedUpdateManyWithoutFotografoNestedInput
  }

  export type ReservaCreateWithoutClienteInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
    fotografo: FotografoCreateNestedOneWithoutReservasInput
    photoService?: PhotoServiceCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutClienteInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    fotografoId: string
    photoServiceId?: string | null
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutClienteInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput>
  }

  export type ReservaCreateManyClienteInputEnvelope = {
    data: ReservaCreateManyClienteInput | ReservaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutClienteInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutClienteInput, ReservaUncheckedUpdateWithoutClienteInput>
    create: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutClienteInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutClienteInput, ReservaUncheckedUpdateWithoutClienteInput>
  }

  export type ReservaUpdateManyWithWhereWithoutClienteInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutClienteInput>
  }

  export type ReservaScalarWhereInput = {
    AND?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    OR?: ReservaScalarWhereInput[]
    NOT?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    id?: StringFilter<"Reserva"> | string
    fecha?: DateTimeFilter<"Reserva"> | Date | string
    horaInicio?: DateTimeFilter<"Reserva"> | Date | string
    horaFin?: DateTimeFilter<"Reserva"> | Date | string
    fotografoId?: StringFilter<"Reserva"> | string
    clienteId?: StringFilter<"Reserva"> | string
    photoServiceId?: StringNullableFilter<"Reserva"> | string | null
    estado?: BoolFilter<"Reserva"> | boolean
    precio?: FloatNullableFilter<"Reserva"> | number | null
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
  }

  export type PhotoServiceCreateWithoutCategoryInput = {
    id?: string
    name: string
    img: string
    description: string
    precio?: number
    activo?: boolean
    fotografos?: FotografoServicioCreateNestedManyWithoutServicioInput
    reservas?: ReservaCreateNestedManyWithoutPhotoServiceInput
  }

  export type PhotoServiceUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    img: string
    description: string
    precio?: number
    activo?: boolean
    fotografos?: FotografoServicioUncheckedCreateNestedManyWithoutServicioInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutPhotoServiceInput
  }

  export type PhotoServiceCreateOrConnectWithoutCategoryInput = {
    where: PhotoServiceWhereUniqueInput
    create: XOR<PhotoServiceCreateWithoutCategoryInput, PhotoServiceUncheckedCreateWithoutCategoryInput>
  }

  export type PhotoServiceCreateManyCategoryInputEnvelope = {
    data: PhotoServiceCreateManyCategoryInput | PhotoServiceCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PhotoServiceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PhotoServiceWhereUniqueInput
    update: XOR<PhotoServiceUpdateWithoutCategoryInput, PhotoServiceUncheckedUpdateWithoutCategoryInput>
    create: XOR<PhotoServiceCreateWithoutCategoryInput, PhotoServiceUncheckedCreateWithoutCategoryInput>
  }

  export type PhotoServiceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PhotoServiceWhereUniqueInput
    data: XOR<PhotoServiceUpdateWithoutCategoryInput, PhotoServiceUncheckedUpdateWithoutCategoryInput>
  }

  export type PhotoServiceUpdateManyWithWhereWithoutCategoryInput = {
    where: PhotoServiceScalarWhereInput
    data: XOR<PhotoServiceUpdateManyMutationInput, PhotoServiceUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PhotoServiceScalarWhereInput = {
    AND?: PhotoServiceScalarWhereInput | PhotoServiceScalarWhereInput[]
    OR?: PhotoServiceScalarWhereInput[]
    NOT?: PhotoServiceScalarWhereInput | PhotoServiceScalarWhereInput[]
    id?: StringFilter<"PhotoService"> | string
    name?: StringFilter<"PhotoService"> | string
    img?: StringFilter<"PhotoService"> | string
    description?: StringFilter<"PhotoService"> | string
    precio?: FloatFilter<"PhotoService"> | number
    activo?: BoolFilter<"PhotoService"> | boolean
    categoryId?: StringFilter<"PhotoService"> | string
  }

  export type UsuarioCreateWithoutFotografoInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    debeCambiar: boolean
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutFotografoInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    rolId: string
    debeCambiar: boolean
  }

  export type UsuarioCreateOrConnectWithoutFotografoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFotografoInput, UsuarioUncheckedCreateWithoutFotografoInput>
  }

  export type ReservaCreateWithoutFotografoInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutReservasInput
    photoService?: PhotoServiceCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutFotografoInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    clienteId: string
    photoServiceId?: string | null
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutFotografoInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutFotografoInput, ReservaUncheckedCreateWithoutFotografoInput>
  }

  export type ReservaCreateManyFotografoInputEnvelope = {
    data: ReservaCreateManyFotografoInput | ReservaCreateManyFotografoInput[]
    skipDuplicates?: boolean
  }

  export type GaleriaCreateWithoutFotografoInput = {
    id?: string
    nombreFoto: string
    url: string
  }

  export type GaleriaUncheckedCreateWithoutFotografoInput = {
    id?: string
    nombreFoto: string
    url: string
  }

  export type GaleriaCreateOrConnectWithoutFotografoInput = {
    where: GaleriaWhereUniqueInput
    create: XOR<GaleriaCreateWithoutFotografoInput, GaleriaUncheckedCreateWithoutFotografoInput>
  }

  export type GaleriaCreateManyFotografoInputEnvelope = {
    data: GaleriaCreateManyFotografoInput | GaleriaCreateManyFotografoInput[]
    skipDuplicates?: boolean
  }

  export type UnavailabilityCreateWithoutFotografoInput = {
    id?: string
    recurring: boolean
    weekday?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    activo?: boolean
  }

  export type UnavailabilityUncheckedCreateWithoutFotografoInput = {
    id?: string
    recurring: boolean
    weekday?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    activo?: boolean
  }

  export type UnavailabilityCreateOrConnectWithoutFotografoInput = {
    where: UnavailabilityWhereUniqueInput
    create: XOR<UnavailabilityCreateWithoutFotografoInput, UnavailabilityUncheckedCreateWithoutFotografoInput>
  }

  export type UnavailabilityCreateManyFotografoInputEnvelope = {
    data: UnavailabilityCreateManyFotografoInput | UnavailabilityCreateManyFotografoInput[]
    skipDuplicates?: boolean
  }

  export type FotografoServicioCreateWithoutFotografoInput = {
    servicio: PhotoServiceCreateNestedOneWithoutFotografosInput
  }

  export type FotografoServicioUncheckedCreateWithoutFotografoInput = {
    servicioId: string
  }

  export type FotografoServicioCreateOrConnectWithoutFotografoInput = {
    where: FotografoServicioWhereUniqueInput
    create: XOR<FotografoServicioCreateWithoutFotografoInput, FotografoServicioUncheckedCreateWithoutFotografoInput>
  }

  export type FotografoServicioCreateManyFotografoInputEnvelope = {
    data: FotografoServicioCreateManyFotografoInput | FotografoServicioCreateManyFotografoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutFotografoInput = {
    update: XOR<UsuarioUpdateWithoutFotografoInput, UsuarioUncheckedUpdateWithoutFotografoInput>
    create: XOR<UsuarioCreateWithoutFotografoInput, UsuarioUncheckedCreateWithoutFotografoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFotografoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFotografoInput, UsuarioUncheckedUpdateWithoutFotografoInput>
  }

  export type UsuarioUpdateWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    debeCambiar?: BoolFieldUpdateOperationsInput | boolean
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rolId?: StringFieldUpdateOperationsInput | string
    debeCambiar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutFotografoInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutFotografoInput, ReservaUncheckedUpdateWithoutFotografoInput>
    create: XOR<ReservaCreateWithoutFotografoInput, ReservaUncheckedCreateWithoutFotografoInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutFotografoInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutFotografoInput, ReservaUncheckedUpdateWithoutFotografoInput>
  }

  export type ReservaUpdateManyWithWhereWithoutFotografoInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutFotografoInput>
  }

  export type GaleriaUpsertWithWhereUniqueWithoutFotografoInput = {
    where: GaleriaWhereUniqueInput
    update: XOR<GaleriaUpdateWithoutFotografoInput, GaleriaUncheckedUpdateWithoutFotografoInput>
    create: XOR<GaleriaCreateWithoutFotografoInput, GaleriaUncheckedCreateWithoutFotografoInput>
  }

  export type GaleriaUpdateWithWhereUniqueWithoutFotografoInput = {
    where: GaleriaWhereUniqueInput
    data: XOR<GaleriaUpdateWithoutFotografoInput, GaleriaUncheckedUpdateWithoutFotografoInput>
  }

  export type GaleriaUpdateManyWithWhereWithoutFotografoInput = {
    where: GaleriaScalarWhereInput
    data: XOR<GaleriaUpdateManyMutationInput, GaleriaUncheckedUpdateManyWithoutFotografoInput>
  }

  export type GaleriaScalarWhereInput = {
    AND?: GaleriaScalarWhereInput | GaleriaScalarWhereInput[]
    OR?: GaleriaScalarWhereInput[]
    NOT?: GaleriaScalarWhereInput | GaleriaScalarWhereInput[]
    id?: StringFilter<"Galeria"> | string
    nombreFoto?: StringFilter<"Galeria"> | string
    url?: StringFilter<"Galeria"> | string
    fotografoId?: StringFilter<"Galeria"> | string
  }

  export type UnavailabilityUpsertWithWhereUniqueWithoutFotografoInput = {
    where: UnavailabilityWhereUniqueInput
    update: XOR<UnavailabilityUpdateWithoutFotografoInput, UnavailabilityUncheckedUpdateWithoutFotografoInput>
    create: XOR<UnavailabilityCreateWithoutFotografoInput, UnavailabilityUncheckedCreateWithoutFotografoInput>
  }

  export type UnavailabilityUpdateWithWhereUniqueWithoutFotografoInput = {
    where: UnavailabilityWhereUniqueInput
    data: XOR<UnavailabilityUpdateWithoutFotografoInput, UnavailabilityUncheckedUpdateWithoutFotografoInput>
  }

  export type UnavailabilityUpdateManyWithWhereWithoutFotografoInput = {
    where: UnavailabilityScalarWhereInput
    data: XOR<UnavailabilityUpdateManyMutationInput, UnavailabilityUncheckedUpdateManyWithoutFotografoInput>
  }

  export type UnavailabilityScalarWhereInput = {
    AND?: UnavailabilityScalarWhereInput | UnavailabilityScalarWhereInput[]
    OR?: UnavailabilityScalarWhereInput[]
    NOT?: UnavailabilityScalarWhereInput | UnavailabilityScalarWhereInput[]
    id?: StringFilter<"Unavailability"> | string
    fotografoId?: StringFilter<"Unavailability"> | string
    recurring?: BoolFilter<"Unavailability"> | boolean
    weekday?: IntNullableFilter<"Unavailability"> | number | null
    startDate?: DateTimeNullableFilter<"Unavailability"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Unavailability"> | Date | string | null
    activo?: BoolFilter<"Unavailability"> | boolean
  }

  export type FotografoServicioUpsertWithWhereUniqueWithoutFotografoInput = {
    where: FotografoServicioWhereUniqueInput
    update: XOR<FotografoServicioUpdateWithoutFotografoInput, FotografoServicioUncheckedUpdateWithoutFotografoInput>
    create: XOR<FotografoServicioCreateWithoutFotografoInput, FotografoServicioUncheckedCreateWithoutFotografoInput>
  }

  export type FotografoServicioUpdateWithWhereUniqueWithoutFotografoInput = {
    where: FotografoServicioWhereUniqueInput
    data: XOR<FotografoServicioUpdateWithoutFotografoInput, FotografoServicioUncheckedUpdateWithoutFotografoInput>
  }

  export type FotografoServicioUpdateManyWithWhereWithoutFotografoInput = {
    where: FotografoServicioScalarWhereInput
    data: XOR<FotografoServicioUpdateManyMutationInput, FotografoServicioUncheckedUpdateManyWithoutFotografoInput>
  }

  export type FotografoServicioScalarWhereInput = {
    AND?: FotografoServicioScalarWhereInput | FotografoServicioScalarWhereInput[]
    OR?: FotografoServicioScalarWhereInput[]
    NOT?: FotografoServicioScalarWhereInput | FotografoServicioScalarWhereInput[]
    fotografoId?: StringFilter<"FotografoServicio"> | string
    servicioId?: StringFilter<"FotografoServicio"> | string
  }

  export type CategoryCreateWithoutServicesInput = {
    id?: string
    name: string
    activo: boolean
  }

  export type CategoryUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    activo: boolean
  }

  export type CategoryCreateOrConnectWithoutServicesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
  }

  export type FotografoServicioCreateWithoutServicioInput = {
    fotografo: FotografoCreateNestedOneWithoutServiciosInput
  }

  export type FotografoServicioUncheckedCreateWithoutServicioInput = {
    fotografoId: string
  }

  export type FotografoServicioCreateOrConnectWithoutServicioInput = {
    where: FotografoServicioWhereUniqueInput
    create: XOR<FotografoServicioCreateWithoutServicioInput, FotografoServicioUncheckedCreateWithoutServicioInput>
  }

  export type FotografoServicioCreateManyServicioInputEnvelope = {
    data: FotografoServicioCreateManyServicioInput | FotografoServicioCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type ReservaCreateWithoutPhotoServiceInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
    fotografo: FotografoCreateNestedOneWithoutReservasInput
    cliente: ClienteCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutPhotoServiceInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    fotografoId: string
    clienteId: string
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutPhotoServiceInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutPhotoServiceInput, ReservaUncheckedCreateWithoutPhotoServiceInput>
  }

  export type ReservaCreateManyPhotoServiceInputEnvelope = {
    data: ReservaCreateManyPhotoServiceInput | ReservaCreateManyPhotoServiceInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutServicesInput = {
    update: XOR<CategoryUpdateWithoutServicesInput, CategoryUncheckedUpdateWithoutServicesInput>
    create: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutServicesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutServicesInput, CategoryUncheckedUpdateWithoutServicesInput>
  }

  export type CategoryUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FotografoServicioUpsertWithWhereUniqueWithoutServicioInput = {
    where: FotografoServicioWhereUniqueInput
    update: XOR<FotografoServicioUpdateWithoutServicioInput, FotografoServicioUncheckedUpdateWithoutServicioInput>
    create: XOR<FotografoServicioCreateWithoutServicioInput, FotografoServicioUncheckedCreateWithoutServicioInput>
  }

  export type FotografoServicioUpdateWithWhereUniqueWithoutServicioInput = {
    where: FotografoServicioWhereUniqueInput
    data: XOR<FotografoServicioUpdateWithoutServicioInput, FotografoServicioUncheckedUpdateWithoutServicioInput>
  }

  export type FotografoServicioUpdateManyWithWhereWithoutServicioInput = {
    where: FotografoServicioScalarWhereInput
    data: XOR<FotografoServicioUpdateManyMutationInput, FotografoServicioUncheckedUpdateManyWithoutServicioInput>
  }

  export type ReservaUpsertWithWhereUniqueWithoutPhotoServiceInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutPhotoServiceInput, ReservaUncheckedUpdateWithoutPhotoServiceInput>
    create: XOR<ReservaCreateWithoutPhotoServiceInput, ReservaUncheckedCreateWithoutPhotoServiceInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutPhotoServiceInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutPhotoServiceInput, ReservaUncheckedUpdateWithoutPhotoServiceInput>
  }

  export type ReservaUpdateManyWithWhereWithoutPhotoServiceInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutPhotoServiceInput>
  }

  export type FotografoCreateWithoutServiciosInput = {
    id?: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    usuario: UsuarioCreateNestedOneWithoutFotografoInput
    reservas?: ReservaCreateNestedManyWithoutFotografoInput
    galeria?: GaleriaCreateNestedManyWithoutFotografoInput
    unavailabilities?: UnavailabilityCreateNestedManyWithoutFotografoInput
  }

  export type FotografoUncheckedCreateWithoutServiciosInput = {
    id?: string
    usuarioId: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    reservas?: ReservaUncheckedCreateNestedManyWithoutFotografoInput
    galeria?: GaleriaUncheckedCreateNestedManyWithoutFotografoInput
    unavailabilities?: UnavailabilityUncheckedCreateNestedManyWithoutFotografoInput
  }

  export type FotografoCreateOrConnectWithoutServiciosInput = {
    where: FotografoWhereUniqueInput
    create: XOR<FotografoCreateWithoutServiciosInput, FotografoUncheckedCreateWithoutServiciosInput>
  }

  export type PhotoServiceCreateWithoutFotografosInput = {
    id?: string
    name: string
    img: string
    description: string
    precio?: number
    activo?: boolean
    category: CategoryCreateNestedOneWithoutServicesInput
    reservas?: ReservaCreateNestedManyWithoutPhotoServiceInput
  }

  export type PhotoServiceUncheckedCreateWithoutFotografosInput = {
    id?: string
    name: string
    img: string
    description: string
    precio?: number
    activo?: boolean
    categoryId: string
    reservas?: ReservaUncheckedCreateNestedManyWithoutPhotoServiceInput
  }

  export type PhotoServiceCreateOrConnectWithoutFotografosInput = {
    where: PhotoServiceWhereUniqueInput
    create: XOR<PhotoServiceCreateWithoutFotografosInput, PhotoServiceUncheckedCreateWithoutFotografosInput>
  }

  export type FotografoUpsertWithoutServiciosInput = {
    update: XOR<FotografoUpdateWithoutServiciosInput, FotografoUncheckedUpdateWithoutServiciosInput>
    create: XOR<FotografoCreateWithoutServiciosInput, FotografoUncheckedCreateWithoutServiciosInput>
    where?: FotografoWhereInput
  }

  export type FotografoUpdateToOneWithWhereWithoutServiciosInput = {
    where?: FotografoWhereInput
    data: XOR<FotografoUpdateWithoutServiciosInput, FotografoUncheckedUpdateWithoutServiciosInput>
  }

  export type FotografoUpdateWithoutServiciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutFotografoNestedInput
    reservas?: ReservaUpdateManyWithoutFotografoNestedInput
    galeria?: GaleriaUpdateManyWithoutFotografoNestedInput
    unavailabilities?: UnavailabilityUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoUncheckedUpdateWithoutServiciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    reservas?: ReservaUncheckedUpdateManyWithoutFotografoNestedInput
    galeria?: GaleriaUncheckedUpdateManyWithoutFotografoNestedInput
    unavailabilities?: UnavailabilityUncheckedUpdateManyWithoutFotografoNestedInput
  }

  export type PhotoServiceUpsertWithoutFotografosInput = {
    update: XOR<PhotoServiceUpdateWithoutFotografosInput, PhotoServiceUncheckedUpdateWithoutFotografosInput>
    create: XOR<PhotoServiceCreateWithoutFotografosInput, PhotoServiceUncheckedCreateWithoutFotografosInput>
    where?: PhotoServiceWhereInput
  }

  export type PhotoServiceUpdateToOneWithWhereWithoutFotografosInput = {
    where?: PhotoServiceWhereInput
    data: XOR<PhotoServiceUpdateWithoutFotografosInput, PhotoServiceUncheckedUpdateWithoutFotografosInput>
  }

  export type PhotoServiceUpdateWithoutFotografosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    reservas?: ReservaUpdateManyWithoutPhotoServiceNestedInput
  }

  export type PhotoServiceUncheckedUpdateWithoutFotografosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    reservas?: ReservaUncheckedUpdateManyWithoutPhotoServiceNestedInput
  }

  export type FotografoCreateWithoutUnavailabilitiesInput = {
    id?: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    usuario: UsuarioCreateNestedOneWithoutFotografoInput
    reservas?: ReservaCreateNestedManyWithoutFotografoInput
    galeria?: GaleriaCreateNestedManyWithoutFotografoInput
    servicios?: FotografoServicioCreateNestedManyWithoutFotografoInput
  }

  export type FotografoUncheckedCreateWithoutUnavailabilitiesInput = {
    id?: string
    usuarioId: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    reservas?: ReservaUncheckedCreateNestedManyWithoutFotografoInput
    galeria?: GaleriaUncheckedCreateNestedManyWithoutFotografoInput
    servicios?: FotografoServicioUncheckedCreateNestedManyWithoutFotografoInput
  }

  export type FotografoCreateOrConnectWithoutUnavailabilitiesInput = {
    where: FotografoWhereUniqueInput
    create: XOR<FotografoCreateWithoutUnavailabilitiesInput, FotografoUncheckedCreateWithoutUnavailabilitiesInput>
  }

  export type FotografoUpsertWithoutUnavailabilitiesInput = {
    update: XOR<FotografoUpdateWithoutUnavailabilitiesInput, FotografoUncheckedUpdateWithoutUnavailabilitiesInput>
    create: XOR<FotografoCreateWithoutUnavailabilitiesInput, FotografoUncheckedCreateWithoutUnavailabilitiesInput>
    where?: FotografoWhereInput
  }

  export type FotografoUpdateToOneWithWhereWithoutUnavailabilitiesInput = {
    where?: FotografoWhereInput
    data: XOR<FotografoUpdateWithoutUnavailabilitiesInput, FotografoUncheckedUpdateWithoutUnavailabilitiesInput>
  }

  export type FotografoUpdateWithoutUnavailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutFotografoNestedInput
    reservas?: ReservaUpdateManyWithoutFotografoNestedInput
    galeria?: GaleriaUpdateManyWithoutFotografoNestedInput
    servicios?: FotografoServicioUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoUncheckedUpdateWithoutUnavailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    reservas?: ReservaUncheckedUpdateManyWithoutFotografoNestedInput
    galeria?: GaleriaUncheckedUpdateManyWithoutFotografoNestedInput
    servicios?: FotografoServicioUncheckedUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoCreateWithoutReservasInput = {
    id?: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    usuario: UsuarioCreateNestedOneWithoutFotografoInput
    galeria?: GaleriaCreateNestedManyWithoutFotografoInput
    unavailabilities?: UnavailabilityCreateNestedManyWithoutFotografoInput
    servicios?: FotografoServicioCreateNestedManyWithoutFotografoInput
  }

  export type FotografoUncheckedCreateWithoutReservasInput = {
    id?: string
    usuarioId: string
    nombre: string
    telefono?: string | null
    bio?: string | null
    url?: string | null
    Foto: string
    disponible: boolean
    galeria?: GaleriaUncheckedCreateNestedManyWithoutFotografoInput
    unavailabilities?: UnavailabilityUncheckedCreateNestedManyWithoutFotografoInput
    servicios?: FotografoServicioUncheckedCreateNestedManyWithoutFotografoInput
  }

  export type FotografoCreateOrConnectWithoutReservasInput = {
    where: FotografoWhereUniqueInput
    create: XOR<FotografoCreateWithoutReservasInput, FotografoUncheckedCreateWithoutReservasInput>
  }

  export type ClienteCreateWithoutReservasInput = {
    id?: string
    nombre: string
    email: string
    telefono: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ClienteUncheckedCreateWithoutReservasInput = {
    id?: string
    nombre: string
    email: string
    telefono: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ClienteCreateOrConnectWithoutReservasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
  }

  export type PhotoServiceCreateWithoutReservasInput = {
    id?: string
    name: string
    img: string
    description: string
    precio?: number
    activo?: boolean
    category: CategoryCreateNestedOneWithoutServicesInput
    fotografos?: FotografoServicioCreateNestedManyWithoutServicioInput
  }

  export type PhotoServiceUncheckedCreateWithoutReservasInput = {
    id?: string
    name: string
    img: string
    description: string
    precio?: number
    activo?: boolean
    categoryId: string
    fotografos?: FotografoServicioUncheckedCreateNestedManyWithoutServicioInput
  }

  export type PhotoServiceCreateOrConnectWithoutReservasInput = {
    where: PhotoServiceWhereUniqueInput
    create: XOR<PhotoServiceCreateWithoutReservasInput, PhotoServiceUncheckedCreateWithoutReservasInput>
  }

  export type FotografoUpsertWithoutReservasInput = {
    update: XOR<FotografoUpdateWithoutReservasInput, FotografoUncheckedUpdateWithoutReservasInput>
    create: XOR<FotografoCreateWithoutReservasInput, FotografoUncheckedCreateWithoutReservasInput>
    where?: FotografoWhereInput
  }

  export type FotografoUpdateToOneWithWhereWithoutReservasInput = {
    where?: FotografoWhereInput
    data: XOR<FotografoUpdateWithoutReservasInput, FotografoUncheckedUpdateWithoutReservasInput>
  }

  export type FotografoUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutFotografoNestedInput
    galeria?: GaleriaUpdateManyWithoutFotografoNestedInput
    unavailabilities?: UnavailabilityUpdateManyWithoutFotografoNestedInput
    servicios?: FotografoServicioUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoUncheckedUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    Foto?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    galeria?: GaleriaUncheckedUpdateManyWithoutFotografoNestedInput
    unavailabilities?: UnavailabilityUncheckedUpdateManyWithoutFotografoNestedInput
    servicios?: FotografoServicioUncheckedUpdateManyWithoutFotografoNestedInput
  }

  export type ClienteUpsertWithoutReservasInput = {
    update: XOR<ClienteUpdateWithoutReservasInput, ClienteUncheckedUpdateWithoutReservasInput>
    create: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutReservasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutReservasInput, ClienteUncheckedUpdateWithoutReservasInput>
  }

  export type ClienteUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoServiceUpsertWithoutReservasInput = {
    update: XOR<PhotoServiceUpdateWithoutReservasInput, PhotoServiceUncheckedUpdateWithoutReservasInput>
    create: XOR<PhotoServiceCreateWithoutReservasInput, PhotoServiceUncheckedCreateWithoutReservasInput>
    where?: PhotoServiceWhereInput
  }

  export type PhotoServiceUpdateToOneWithWhereWithoutReservasInput = {
    where?: PhotoServiceWhereInput
    data: XOR<PhotoServiceUpdateWithoutReservasInput, PhotoServiceUncheckedUpdateWithoutReservasInput>
  }

  export type PhotoServiceUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    fotografos?: FotografoServicioUpdateManyWithoutServicioNestedInput
  }

  export type PhotoServiceUncheckedUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    fotografos?: FotografoServicioUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type RolPermisoCreateManyRolInput = {
    id?: string
    permisoId: string
    createAt?: Date | string
  }

  export type UsuarioCreateManyRolInput = {
    id?: string
    nombre: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    activo: boolean
    debeCambiar: boolean
  }

  export type RolPermisoUpdateWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    permisoId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolPermisoUncheckedUpdateManyWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    permisoId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpdateWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    debeCambiar?: BoolFieldUpdateOperationsInput | boolean
    fotografo?: FotografoUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    debeCambiar?: BoolFieldUpdateOperationsInput | boolean
    fotografo?: FotografoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    debeCambiar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolPermisoCreateManyPermisoInput = {
    id?: string
    rolId: string
    createAt?: Date | string
  }

  export type RolPermisoUpdateWithoutPermisoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
  }

  export type RolPermisoUncheckedUpdateWithoutPermisoInput = {
    id?: StringFieldUpdateOperationsInput | string
    rolId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolPermisoUncheckedUpdateManyWithoutPermisoInput = {
    id?: StringFieldUpdateOperationsInput | string
    rolId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyClienteInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    fotografoId: string
    photoServiceId?: string | null
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
  }

  export type ReservaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fotografo?: FotografoUpdateOneRequiredWithoutReservasNestedInput
    photoService?: PhotoServiceUpdateOneWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    photoServiceId?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    photoServiceId?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoServiceCreateManyCategoryInput = {
    id?: string
    name: string
    img: string
    description: string
    precio?: number
    activo?: boolean
  }

  export type PhotoServiceUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    fotografos?: FotografoServicioUpdateManyWithoutServicioNestedInput
    reservas?: ReservaUpdateManyWithoutPhotoServiceNestedInput
  }

  export type PhotoServiceUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    fotografos?: FotografoServicioUncheckedUpdateManyWithoutServicioNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutPhotoServiceNestedInput
  }

  export type PhotoServiceUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservaCreateManyFotografoInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    clienteId: string
    photoServiceId?: string | null
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
  }

  export type GaleriaCreateManyFotografoInput = {
    id?: string
    nombreFoto: string
    url: string
  }

  export type UnavailabilityCreateManyFotografoInput = {
    id?: string
    recurring: boolean
    weekday?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    activo?: boolean
  }

  export type FotografoServicioCreateManyFotografoInput = {
    servicioId: string
  }

  export type ReservaUpdateWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    photoService?: PhotoServiceUpdateOneWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    photoServiceId?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    photoServiceId?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GaleriaUpdateWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreFoto?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type GaleriaUncheckedUpdateWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreFoto?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type GaleriaUncheckedUpdateManyWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreFoto?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UnavailabilityUpdateWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    recurring?: BoolFieldUpdateOperationsInput | boolean
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnavailabilityUncheckedUpdateWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    recurring?: BoolFieldUpdateOperationsInput | boolean
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnavailabilityUncheckedUpdateManyWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    recurring?: BoolFieldUpdateOperationsInput | boolean
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FotografoServicioUpdateWithoutFotografoInput = {
    servicio?: PhotoServiceUpdateOneRequiredWithoutFotografosNestedInput
  }

  export type FotografoServicioUncheckedUpdateWithoutFotografoInput = {
    servicioId?: StringFieldUpdateOperationsInput | string
  }

  export type FotografoServicioUncheckedUpdateManyWithoutFotografoInput = {
    servicioId?: StringFieldUpdateOperationsInput | string
  }

  export type FotografoServicioCreateManyServicioInput = {
    fotografoId: string
  }

  export type ReservaCreateManyPhotoServiceInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    fotografoId: string
    clienteId: string
    estado?: boolean
    precio?: number | null
    createdAt?: Date | string
  }

  export type FotografoServicioUpdateWithoutServicioInput = {
    fotografo?: FotografoUpdateOneRequiredWithoutServiciosNestedInput
  }

  export type FotografoServicioUncheckedUpdateWithoutServicioInput = {
    fotografoId?: StringFieldUpdateOperationsInput | string
  }

  export type FotografoServicioUncheckedUpdateManyWithoutServicioInput = {
    fotografoId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservaUpdateWithoutPhotoServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fotografo?: FotografoUpdateOneRequiredWithoutReservasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutPhotoServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutPhotoServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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