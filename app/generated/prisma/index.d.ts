
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
 * Model Fotografo
 * 
 */
export type Fotografo = $Result.DefaultSelection<Prisma.$FotografoPayload>
/**
 * Model Disponibilidad
 * 
 */
export type Disponibilidad = $Result.DefaultSelection<Prisma.$DisponibilidadPayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoReserva: {
  PENDIENTE: 'PENDIENTE',
  CONFIRMADA: 'CONFIRMADA',
  CANCELADA: 'CANCELADA'
};

export type EstadoReserva = (typeof EstadoReserva)[keyof typeof EstadoReserva]

}

export type EstadoReserva = $Enums.EstadoReserva

export const EstadoReserva: typeof $Enums.EstadoReserva

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
   * `prisma.fotografo`: Exposes CRUD operations for the **Fotografo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fotografos
    * const fotografos = await prisma.fotografo.findMany()
    * ```
    */
  get fotografo(): Prisma.FotografoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disponibilidad`: Exposes CRUD operations for the **Disponibilidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disponibilidads
    * const disponibilidads = await prisma.disponibilidad.findMany()
    * ```
    */
  get disponibilidad(): Prisma.DisponibilidadDelegate<ExtArgs, ClientOptions>;

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
    Fotografo: 'Fotografo',
    Disponibilidad: 'Disponibilidad',
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
      modelProps: "rol" | "permiso" | "rolPermiso" | "usuario" | "fotografo" | "disponibilidad" | "reserva"
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
      Disponibilidad: {
        payload: Prisma.$DisponibilidadPayload<ExtArgs>
        fields: Prisma.DisponibilidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisponibilidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisponibilidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          findFirst: {
            args: Prisma.DisponibilidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisponibilidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          findMany: {
            args: Prisma.DisponibilidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>[]
          }
          create: {
            args: Prisma.DisponibilidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          createMany: {
            args: Prisma.DisponibilidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DisponibilidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          update: {
            args: Prisma.DisponibilidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          deleteMany: {
            args: Prisma.DisponibilidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisponibilidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DisponibilidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          aggregate: {
            args: Prisma.DisponibilidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisponibilidad>
          }
          groupBy: {
            args: Prisma.DisponibilidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisponibilidadCountArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadCountAggregateOutputType> | number
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
    fotografo?: FotografoOmit
    disponibilidad?: DisponibilidadOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    reservas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | UsuarioCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type FotografoCountOutputType
   */

  export type FotografoCountOutputType = {
    reservas: number
  }

  export type FotografoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | FotografoCountOutputTypeCountReservasArgs
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
    reservas?: boolean | Usuario$reservasArgs<ExtArgs>
    fotografo?: boolean | Usuario$fotografoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
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
    reservas?: boolean | Usuario$reservasArgs<ExtArgs>
    fotografo?: boolean | Usuario$fotografoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
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
    reservas<T extends Usuario$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Usuario.reservas
   */
  export type Usuario$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    telefono: string | null
    bio: string | null
  }

  export type FotografoMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    telefono: string | null
    bio: string | null
  }

  export type FotografoCountAggregateOutputType = {
    id: number
    usuarioId: number
    telefono: number
    bio: number
    _all: number
  }


  export type FotografoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    telefono?: true
    bio?: true
  }

  export type FotografoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    telefono?: true
    bio?: true
  }

  export type FotografoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    telefono?: true
    bio?: true
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
    telefono: string | null
    bio: string | null
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
    telefono?: boolean
    bio?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    reservas?: boolean | Fotografo$reservasArgs<ExtArgs>
    _count?: boolean | FotografoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotografo"]>



  export type FotografoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    telefono?: boolean
    bio?: boolean
  }

  export type FotografoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "telefono" | "bio", ExtArgs["result"]["fotografo"]>
  export type FotografoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    reservas?: boolean | Fotografo$reservasArgs<ExtArgs>
    _count?: boolean | FotografoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FotografoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fotografo"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      telefono: string | null
      bio: string | null
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
    readonly telefono: FieldRef<"Fotografo", 'String'>
    readonly bio: FieldRef<"Fotografo", 'String'>
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
   * Model Disponibilidad
   */

  export type AggregateDisponibilidad = {
    _count: DisponibilidadCountAggregateOutputType | null
    _avg: DisponibilidadAvgAggregateOutputType | null
    _sum: DisponibilidadSumAggregateOutputType | null
    _min: DisponibilidadMinAggregateOutputType | null
    _max: DisponibilidadMaxAggregateOutputType | null
  }

  export type DisponibilidadAvgAggregateOutputType = {
    diaSemana: number | null
  }

  export type DisponibilidadSumAggregateOutputType = {
    diaSemana: number | null
  }

  export type DisponibilidadMinAggregateOutputType = {
    id: string | null
    diaSemana: number | null
    horaInicio: string | null
    horaFin: string | null
    activo: boolean | null
  }

  export type DisponibilidadMaxAggregateOutputType = {
    id: string | null
    diaSemana: number | null
    horaInicio: string | null
    horaFin: string | null
    activo: boolean | null
  }

  export type DisponibilidadCountAggregateOutputType = {
    id: number
    diaSemana: number
    horaInicio: number
    horaFin: number
    activo: number
    _all: number
  }


  export type DisponibilidadAvgAggregateInputType = {
    diaSemana?: true
  }

  export type DisponibilidadSumAggregateInputType = {
    diaSemana?: true
  }

  export type DisponibilidadMinAggregateInputType = {
    id?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
  }

  export type DisponibilidadMaxAggregateInputType = {
    id?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
  }

  export type DisponibilidadCountAggregateInputType = {
    id?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
    _all?: true
  }

  export type DisponibilidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidad to aggregate.
     */
    where?: DisponibilidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidads to fetch.
     */
    orderBy?: DisponibilidadOrderByWithRelationInput | DisponibilidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisponibilidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disponibilidads
    **/
    _count?: true | DisponibilidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisponibilidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisponibilidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisponibilidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisponibilidadMaxAggregateInputType
  }

  export type GetDisponibilidadAggregateType<T extends DisponibilidadAggregateArgs> = {
        [P in keyof T & keyof AggregateDisponibilidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisponibilidad[P]>
      : GetScalarType<T[P], AggregateDisponibilidad[P]>
  }




  export type DisponibilidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadWhereInput
    orderBy?: DisponibilidadOrderByWithAggregationInput | DisponibilidadOrderByWithAggregationInput[]
    by: DisponibilidadScalarFieldEnum[] | DisponibilidadScalarFieldEnum
    having?: DisponibilidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisponibilidadCountAggregateInputType | true
    _avg?: DisponibilidadAvgAggregateInputType
    _sum?: DisponibilidadSumAggregateInputType
    _min?: DisponibilidadMinAggregateInputType
    _max?: DisponibilidadMaxAggregateInputType
  }

  export type DisponibilidadGroupByOutputType = {
    id: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    activo: boolean
    _count: DisponibilidadCountAggregateOutputType | null
    _avg: DisponibilidadAvgAggregateOutputType | null
    _sum: DisponibilidadSumAggregateOutputType | null
    _min: DisponibilidadMinAggregateOutputType | null
    _max: DisponibilidadMaxAggregateOutputType | null
  }

  type GetDisponibilidadGroupByPayload<T extends DisponibilidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisponibilidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisponibilidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisponibilidadGroupByOutputType[P]>
            : GetScalarType<T[P], DisponibilidadGroupByOutputType[P]>
        }
      >
    >


  export type DisponibilidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
  }, ExtArgs["result"]["disponibilidad"]>



  export type DisponibilidadSelectScalar = {
    id?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
  }

  export type DisponibilidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diaSemana" | "horaInicio" | "horaFin" | "activo", ExtArgs["result"]["disponibilidad"]>

  export type $DisponibilidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disponibilidad"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      diaSemana: number
      horaInicio: string
      horaFin: string
      activo: boolean
    }, ExtArgs["result"]["disponibilidad"]>
    composites: {}
  }

  type DisponibilidadGetPayload<S extends boolean | null | undefined | DisponibilidadDefaultArgs> = $Result.GetResult<Prisma.$DisponibilidadPayload, S>

  type DisponibilidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisponibilidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisponibilidadCountAggregateInputType | true
    }

  export interface DisponibilidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disponibilidad'], meta: { name: 'Disponibilidad' } }
    /**
     * Find zero or one Disponibilidad that matches the filter.
     * @param {DisponibilidadFindUniqueArgs} args - Arguments to find a Disponibilidad
     * @example
     * // Get one Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisponibilidadFindUniqueArgs>(args: SelectSubset<T, DisponibilidadFindUniqueArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disponibilidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisponibilidadFindUniqueOrThrowArgs} args - Arguments to find a Disponibilidad
     * @example
     * // Get one Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisponibilidadFindUniqueOrThrowArgs>(args: SelectSubset<T, DisponibilidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadFindFirstArgs} args - Arguments to find a Disponibilidad
     * @example
     * // Get one Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisponibilidadFindFirstArgs>(args?: SelectSubset<T, DisponibilidadFindFirstArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadFindFirstOrThrowArgs} args - Arguments to find a Disponibilidad
     * @example
     * // Get one Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisponibilidadFindFirstOrThrowArgs>(args?: SelectSubset<T, DisponibilidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disponibilidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disponibilidads
     * const disponibilidads = await prisma.disponibilidad.findMany()
     * 
     * // Get first 10 Disponibilidads
     * const disponibilidads = await prisma.disponibilidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disponibilidadWithIdOnly = await prisma.disponibilidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisponibilidadFindManyArgs>(args?: SelectSubset<T, DisponibilidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disponibilidad.
     * @param {DisponibilidadCreateArgs} args - Arguments to create a Disponibilidad.
     * @example
     * // Create one Disponibilidad
     * const Disponibilidad = await prisma.disponibilidad.create({
     *   data: {
     *     // ... data to create a Disponibilidad
     *   }
     * })
     * 
     */
    create<T extends DisponibilidadCreateArgs>(args: SelectSubset<T, DisponibilidadCreateArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disponibilidads.
     * @param {DisponibilidadCreateManyArgs} args - Arguments to create many Disponibilidads.
     * @example
     * // Create many Disponibilidads
     * const disponibilidad = await prisma.disponibilidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisponibilidadCreateManyArgs>(args?: SelectSubset<T, DisponibilidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Disponibilidad.
     * @param {DisponibilidadDeleteArgs} args - Arguments to delete one Disponibilidad.
     * @example
     * // Delete one Disponibilidad
     * const Disponibilidad = await prisma.disponibilidad.delete({
     *   where: {
     *     // ... filter to delete one Disponibilidad
     *   }
     * })
     * 
     */
    delete<T extends DisponibilidadDeleteArgs>(args: SelectSubset<T, DisponibilidadDeleteArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disponibilidad.
     * @param {DisponibilidadUpdateArgs} args - Arguments to update one Disponibilidad.
     * @example
     * // Update one Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisponibilidadUpdateArgs>(args: SelectSubset<T, DisponibilidadUpdateArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disponibilidads.
     * @param {DisponibilidadDeleteManyArgs} args - Arguments to filter Disponibilidads to delete.
     * @example
     * // Delete a few Disponibilidads
     * const { count } = await prisma.disponibilidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisponibilidadDeleteManyArgs>(args?: SelectSubset<T, DisponibilidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disponibilidads
     * const disponibilidad = await prisma.disponibilidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisponibilidadUpdateManyArgs>(args: SelectSubset<T, DisponibilidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disponibilidad.
     * @param {DisponibilidadUpsertArgs} args - Arguments to update or create a Disponibilidad.
     * @example
     * // Update or create a Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.upsert({
     *   create: {
     *     // ... data to create a Disponibilidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disponibilidad we want to update
     *   }
     * })
     */
    upsert<T extends DisponibilidadUpsertArgs>(args: SelectSubset<T, DisponibilidadUpsertArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disponibilidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadCountArgs} args - Arguments to filter Disponibilidads to count.
     * @example
     * // Count the number of Disponibilidads
     * const count = await prisma.disponibilidad.count({
     *   where: {
     *     // ... the filter for the Disponibilidads we want to count
     *   }
     * })
    **/
    count<T extends DisponibilidadCountArgs>(
      args?: Subset<T, DisponibilidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisponibilidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disponibilidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisponibilidadAggregateArgs>(args: Subset<T, DisponibilidadAggregateArgs>): Prisma.PrismaPromise<GetDisponibilidadAggregateType<T>>

    /**
     * Group by Disponibilidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadGroupByArgs} args - Group by arguments.
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
      T extends DisponibilidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisponibilidadGroupByArgs['orderBy'] }
        : { orderBy?: DisponibilidadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisponibilidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisponibilidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disponibilidad model
   */
  readonly fields: DisponibilidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disponibilidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisponibilidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Disponibilidad model
   */
  interface DisponibilidadFieldRefs {
    readonly id: FieldRef<"Disponibilidad", 'String'>
    readonly diaSemana: FieldRef<"Disponibilidad", 'Int'>
    readonly horaInicio: FieldRef<"Disponibilidad", 'String'>
    readonly horaFin: FieldRef<"Disponibilidad", 'String'>
    readonly activo: FieldRef<"Disponibilidad", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Disponibilidad findUnique
   */
  export type DisponibilidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Filter, which Disponibilidad to fetch.
     */
    where: DisponibilidadWhereUniqueInput
  }

  /**
   * Disponibilidad findUniqueOrThrow
   */
  export type DisponibilidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Filter, which Disponibilidad to fetch.
     */
    where: DisponibilidadWhereUniqueInput
  }

  /**
   * Disponibilidad findFirst
   */
  export type DisponibilidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Filter, which Disponibilidad to fetch.
     */
    where?: DisponibilidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidads to fetch.
     */
    orderBy?: DisponibilidadOrderByWithRelationInput | DisponibilidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidads.
     */
    cursor?: DisponibilidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidads.
     */
    distinct?: DisponibilidadScalarFieldEnum | DisponibilidadScalarFieldEnum[]
  }

  /**
   * Disponibilidad findFirstOrThrow
   */
  export type DisponibilidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Filter, which Disponibilidad to fetch.
     */
    where?: DisponibilidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidads to fetch.
     */
    orderBy?: DisponibilidadOrderByWithRelationInput | DisponibilidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidads.
     */
    cursor?: DisponibilidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidads.
     */
    distinct?: DisponibilidadScalarFieldEnum | DisponibilidadScalarFieldEnum[]
  }

  /**
   * Disponibilidad findMany
   */
  export type DisponibilidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Filter, which Disponibilidads to fetch.
     */
    where?: DisponibilidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidads to fetch.
     */
    orderBy?: DisponibilidadOrderByWithRelationInput | DisponibilidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disponibilidads.
     */
    cursor?: DisponibilidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidads.
     */
    skip?: number
    distinct?: DisponibilidadScalarFieldEnum | DisponibilidadScalarFieldEnum[]
  }

  /**
   * Disponibilidad create
   */
  export type DisponibilidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * The data needed to create a Disponibilidad.
     */
    data: XOR<DisponibilidadCreateInput, DisponibilidadUncheckedCreateInput>
  }

  /**
   * Disponibilidad createMany
   */
  export type DisponibilidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disponibilidads.
     */
    data: DisponibilidadCreateManyInput | DisponibilidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disponibilidad update
   */
  export type DisponibilidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * The data needed to update a Disponibilidad.
     */
    data: XOR<DisponibilidadUpdateInput, DisponibilidadUncheckedUpdateInput>
    /**
     * Choose, which Disponibilidad to update.
     */
    where: DisponibilidadWhereUniqueInput
  }

  /**
   * Disponibilidad updateMany
   */
  export type DisponibilidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disponibilidads.
     */
    data: XOR<DisponibilidadUpdateManyMutationInput, DisponibilidadUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilidads to update
     */
    where?: DisponibilidadWhereInput
    /**
     * Limit how many Disponibilidads to update.
     */
    limit?: number
  }

  /**
   * Disponibilidad upsert
   */
  export type DisponibilidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * The filter to search for the Disponibilidad to update in case it exists.
     */
    where: DisponibilidadWhereUniqueInput
    /**
     * In case the Disponibilidad found by the `where` argument doesn't exist, create a new Disponibilidad with this data.
     */
    create: XOR<DisponibilidadCreateInput, DisponibilidadUncheckedCreateInput>
    /**
     * In case the Disponibilidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisponibilidadUpdateInput, DisponibilidadUncheckedUpdateInput>
  }

  /**
   * Disponibilidad delete
   */
  export type DisponibilidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Filter which Disponibilidad to delete.
     */
    where: DisponibilidadWhereUniqueInput
  }

  /**
   * Disponibilidad deleteMany
   */
  export type DisponibilidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidads to delete
     */
    where?: DisponibilidadWhereInput
    /**
     * Limit how many Disponibilidads to delete.
     */
    limit?: number
  }

  /**
   * Disponibilidad without action
   */
  export type DisponibilidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    nombreCliente: string | null
    emailCliente: string | null
    clienteId: string | null
    fotografoId: string | null
    pixelpayOrder: string | null
    estado: $Enums.EstadoReserva | null
    createdAt: Date | null
  }

  export type ReservaMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    nombreCliente: string | null
    emailCliente: string | null
    clienteId: string | null
    fotografoId: string | null
    pixelpayOrder: string | null
    estado: $Enums.EstadoReserva | null
    createdAt: Date | null
  }

  export type ReservaCountAggregateOutputType = {
    id: number
    fecha: number
    horaInicio: number
    horaFin: number
    nombreCliente: number
    emailCliente: number
    clienteId: number
    fotografoId: number
    pixelpayOrder: number
    estado: number
    createdAt: number
    _all: number
  }


  export type ReservaMinAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    nombreCliente?: true
    emailCliente?: true
    clienteId?: true
    fotografoId?: true
    pixelpayOrder?: true
    estado?: true
    createdAt?: true
  }

  export type ReservaMaxAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    nombreCliente?: true
    emailCliente?: true
    clienteId?: true
    fotografoId?: true
    pixelpayOrder?: true
    estado?: true
    createdAt?: true
  }

  export type ReservaCountAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    nombreCliente?: true
    emailCliente?: true
    clienteId?: true
    fotografoId?: true
    pixelpayOrder?: true
    estado?: true
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
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id: string
    fecha: Date
    horaInicio: Date
    horaFin: Date
    nombreCliente: string
    emailCliente: string
    clienteId: string
    fotografoId: string
    pixelpayOrder: string
    estado: $Enums.EstadoReserva
    createdAt: Date
    _count: ReservaCountAggregateOutputType | null
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
    nombreCliente?: boolean
    emailCliente?: boolean
    clienteId?: boolean
    fotografoId?: boolean
    pixelpayOrder?: boolean
    estado?: boolean
    createdAt?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    fotografo?: boolean | FotografoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>



  export type ReservaSelectScalar = {
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    nombreCliente?: boolean
    emailCliente?: boolean
    clienteId?: boolean
    fotografoId?: boolean
    pixelpayOrder?: boolean
    estado?: boolean
    createdAt?: boolean
  }

  export type ReservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "horaInicio" | "horaFin" | "nombreCliente" | "emailCliente" | "clienteId" | "fotografoId" | "pixelpayOrder" | "estado" | "createdAt", ExtArgs["result"]["reserva"]>
  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    fotografo?: boolean | FotografoDefaultArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      cliente: Prisma.$UsuarioPayload<ExtArgs>
      fotografo: Prisma.$FotografoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      horaInicio: Date
      horaFin: Date
      nombreCliente: string
      emailCliente: string
      clienteId: string
      fotografoId: string
      pixelpayOrder: string
      estado: $Enums.EstadoReserva
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
    cliente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reserva model
   */
  interface ReservaFieldRefs {
    readonly id: FieldRef<"Reserva", 'String'>
    readonly fecha: FieldRef<"Reserva", 'DateTime'>
    readonly horaInicio: FieldRef<"Reserva", 'DateTime'>
    readonly horaFin: FieldRef<"Reserva", 'DateTime'>
    readonly nombreCliente: FieldRef<"Reserva", 'String'>
    readonly emailCliente: FieldRef<"Reserva", 'String'>
    readonly clienteId: FieldRef<"Reserva", 'String'>
    readonly fotografoId: FieldRef<"Reserva", 'String'>
    readonly pixelpayOrder: FieldRef<"Reserva", 'String'>
    readonly estado: FieldRef<"Reserva", 'EstadoReserva'>
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


  export const FotografoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    telefono: 'telefono',
    bio: 'bio'
  };

  export type FotografoScalarFieldEnum = (typeof FotografoScalarFieldEnum)[keyof typeof FotografoScalarFieldEnum]


  export const DisponibilidadScalarFieldEnum: {
    id: 'id',
    diaSemana: 'diaSemana',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    activo: 'activo'
  };

  export type DisponibilidadScalarFieldEnum = (typeof DisponibilidadScalarFieldEnum)[keyof typeof DisponibilidadScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    nombreCliente: 'nombreCliente',
    emailCliente: 'emailCliente',
    clienteId: 'clienteId',
    fotografoId: 'fotografoId',
    pixelpayOrder: 'pixelpayOrder',
    estado: 'estado',
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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const FotografoOrderByRelevanceFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    telefono: 'telefono',
    bio: 'bio'
  };

  export type FotografoOrderByRelevanceFieldEnum = (typeof FotografoOrderByRelevanceFieldEnum)[keyof typeof FotografoOrderByRelevanceFieldEnum]


  export const DisponibilidadOrderByRelevanceFieldEnum: {
    id: 'id',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin'
  };

  export type DisponibilidadOrderByRelevanceFieldEnum = (typeof DisponibilidadOrderByRelevanceFieldEnum)[keyof typeof DisponibilidadOrderByRelevanceFieldEnum]


  export const ReservaOrderByRelevanceFieldEnum: {
    id: 'id',
    nombreCliente: 'nombreCliente',
    emailCliente: 'emailCliente',
    clienteId: 'clienteId',
    fotografoId: 'fotografoId',
    pixelpayOrder: 'pixelpayOrder'
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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'EstadoReserva'
   */
  export type EnumEstadoReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoReserva'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
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
    reservas?: ReservaListRelationFilter
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
    reservas?: ReservaOrderByRelationAggregateInput
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
    reservas?: ReservaListRelationFilter
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

  export type FotografoWhereInput = {
    AND?: FotografoWhereInput | FotografoWhereInput[]
    OR?: FotografoWhereInput[]
    NOT?: FotografoWhereInput | FotografoWhereInput[]
    id?: StringFilter<"Fotografo"> | string
    usuarioId?: StringFilter<"Fotografo"> | string
    telefono?: StringNullableFilter<"Fotografo"> | string | null
    bio?: StringNullableFilter<"Fotografo"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    reservas?: ReservaListRelationFilter
  }

  export type FotografoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    telefono?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    reservas?: ReservaOrderByRelationAggregateInput
    _relevance?: FotografoOrderByRelevanceInput
  }

  export type FotografoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    AND?: FotografoWhereInput | FotografoWhereInput[]
    OR?: FotografoWhereInput[]
    NOT?: FotografoWhereInput | FotografoWhereInput[]
    telefono?: StringNullableFilter<"Fotografo"> | string | null
    bio?: StringNullableFilter<"Fotografo"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    reservas?: ReservaListRelationFilter
  }, "id" | "usuarioId">

  export type FotografoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    telefono?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
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
    telefono?: StringNullableWithAggregatesFilter<"Fotografo"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Fotografo"> | string | null
  }

  export type DisponibilidadWhereInput = {
    AND?: DisponibilidadWhereInput | DisponibilidadWhereInput[]
    OR?: DisponibilidadWhereInput[]
    NOT?: DisponibilidadWhereInput | DisponibilidadWhereInput[]
    id?: StringFilter<"Disponibilidad"> | string
    diaSemana?: IntFilter<"Disponibilidad"> | number
    horaInicio?: StringFilter<"Disponibilidad"> | string
    horaFin?: StringFilter<"Disponibilidad"> | string
    activo?: BoolFilter<"Disponibilidad"> | boolean
  }

  export type DisponibilidadOrderByWithRelationInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    _relevance?: DisponibilidadOrderByRelevanceInput
  }

  export type DisponibilidadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisponibilidadWhereInput | DisponibilidadWhereInput[]
    OR?: DisponibilidadWhereInput[]
    NOT?: DisponibilidadWhereInput | DisponibilidadWhereInput[]
    diaSemana?: IntFilter<"Disponibilidad"> | number
    horaInicio?: StringFilter<"Disponibilidad"> | string
    horaFin?: StringFilter<"Disponibilidad"> | string
    activo?: BoolFilter<"Disponibilidad"> | boolean
  }, "id">

  export type DisponibilidadOrderByWithAggregationInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    _count?: DisponibilidadCountOrderByAggregateInput
    _avg?: DisponibilidadAvgOrderByAggregateInput
    _max?: DisponibilidadMaxOrderByAggregateInput
    _min?: DisponibilidadMinOrderByAggregateInput
    _sum?: DisponibilidadSumOrderByAggregateInput
  }

  export type DisponibilidadScalarWhereWithAggregatesInput = {
    AND?: DisponibilidadScalarWhereWithAggregatesInput | DisponibilidadScalarWhereWithAggregatesInput[]
    OR?: DisponibilidadScalarWhereWithAggregatesInput[]
    NOT?: DisponibilidadScalarWhereWithAggregatesInput | DisponibilidadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Disponibilidad"> | string
    diaSemana?: IntWithAggregatesFilter<"Disponibilidad"> | number
    horaInicio?: StringWithAggregatesFilter<"Disponibilidad"> | string
    horaFin?: StringWithAggregatesFilter<"Disponibilidad"> | string
    activo?: BoolWithAggregatesFilter<"Disponibilidad"> | boolean
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id?: StringFilter<"Reserva"> | string
    fecha?: DateTimeFilter<"Reserva"> | Date | string
    horaInicio?: DateTimeFilter<"Reserva"> | Date | string
    horaFin?: DateTimeFilter<"Reserva"> | Date | string
    nombreCliente?: StringFilter<"Reserva"> | string
    emailCliente?: StringFilter<"Reserva"> | string
    clienteId?: StringFilter<"Reserva"> | string
    fotografoId?: StringFilter<"Reserva"> | string
    pixelpayOrder?: StringFilter<"Reserva"> | string
    estado?: EnumEstadoReservaFilter<"Reserva"> | $Enums.EstadoReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    cliente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    fotografo?: XOR<FotografoScalarRelationFilter, FotografoWhereInput>
  }

  export type ReservaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    nombreCliente?: SortOrder
    emailCliente?: SortOrder
    clienteId?: SortOrder
    fotografoId?: SortOrder
    pixelpayOrder?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    cliente?: UsuarioOrderByWithRelationInput
    fotografo?: FotografoOrderByWithRelationInput
    _relevance?: ReservaOrderByRelevanceInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pixelpayOrder?: string
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    fecha?: DateTimeFilter<"Reserva"> | Date | string
    horaInicio?: DateTimeFilter<"Reserva"> | Date | string
    horaFin?: DateTimeFilter<"Reserva"> | Date | string
    nombreCliente?: StringFilter<"Reserva"> | string
    emailCliente?: StringFilter<"Reserva"> | string
    clienteId?: StringFilter<"Reserva"> | string
    fotografoId?: StringFilter<"Reserva"> | string
    estado?: EnumEstadoReservaFilter<"Reserva"> | $Enums.EstadoReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    cliente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    fotografo?: XOR<FotografoScalarRelationFilter, FotografoWhereInput>
  }, "id" | "pixelpayOrder">

  export type ReservaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    nombreCliente?: SortOrder
    emailCliente?: SortOrder
    clienteId?: SortOrder
    fotografoId?: SortOrder
    pixelpayOrder?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reserva"> | string
    fecha?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    horaInicio?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    horaFin?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    nombreCliente?: StringWithAggregatesFilter<"Reserva"> | string
    emailCliente?: StringWithAggregatesFilter<"Reserva"> | string
    clienteId?: StringWithAggregatesFilter<"Reserva"> | string
    fotografoId?: StringWithAggregatesFilter<"Reserva"> | string
    pixelpayOrder?: StringWithAggregatesFilter<"Reserva"> | string
    estado?: EnumEstadoReservaWithAggregatesFilter<"Reserva"> | $Enums.EstadoReserva
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
    reservas?: ReservaCreateNestedManyWithoutClienteInput
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
    reservas?: ReservaUncheckedCreateNestedManyWithoutClienteInput
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
    reservas?: ReservaUpdateManyWithoutClienteNestedInput
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
    reservas?: ReservaUncheckedUpdateManyWithoutClienteNestedInput
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

  export type FotografoCreateInput = {
    id?: string
    telefono?: string | null
    bio?: string | null
    usuario: UsuarioCreateNestedOneWithoutFotografoInput
    reservas?: ReservaCreateNestedManyWithoutFotografoInput
  }

  export type FotografoUncheckedCreateInput = {
    id?: string
    usuarioId: string
    telefono?: string | null
    bio?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutFotografoInput
  }

  export type FotografoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutFotografoNestedInput
    reservas?: ReservaUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoCreateManyInput = {
    id?: string
    usuarioId: string
    telefono?: string | null
    bio?: string | null
  }

  export type FotografoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FotografoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DisponibilidadCreateInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    activo?: boolean
  }

  export type DisponibilidadUncheckedCreateInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    activo?: boolean
  }

  export type DisponibilidadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DisponibilidadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DisponibilidadCreateManyInput = {
    id?: string
    diaSemana: number
    horaInicio: string
    horaFin: string
    activo?: boolean
  }

  export type DisponibilidadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DisponibilidadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservaCreateInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    nombreCliente: string
    emailCliente: string
    pixelpayOrder: string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    cliente: UsuarioCreateNestedOneWithoutReservasInput
    fotografo: FotografoCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    nombreCliente: string
    emailCliente: string
    clienteId: string
    fotografoId: string
    pixelpayOrder: string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
  }

  export type ReservaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    pixelpayOrder?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
    fotografo?: FotografoUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    pixelpayOrder?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    nombreCliente: string
    emailCliente: string
    clienteId: string
    fotografoId: string
    pixelpayOrder: string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
  }

  export type ReservaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    pixelpayOrder?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    pixelpayOrder?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
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

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type FotografoNullableScalarRelationFilter = {
    is?: FotografoWhereInput | null
    isNot?: FotografoWhereInput | null
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FotografoOrderByRelevanceInput = {
    fields: FotografoOrderByRelevanceFieldEnum | FotografoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FotografoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    telefono?: SortOrder
    bio?: SortOrder
  }

  export type FotografoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    telefono?: SortOrder
    bio?: SortOrder
  }

  export type FotografoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    telefono?: SortOrder
    bio?: SortOrder
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

  export type DisponibilidadOrderByRelevanceInput = {
    fields: DisponibilidadOrderByRelevanceFieldEnum | DisponibilidadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DisponibilidadCountOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
  }

  export type DisponibilidadAvgOrderByAggregateInput = {
    diaSemana?: SortOrder
  }

  export type DisponibilidadMaxOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
  }

  export type DisponibilidadMinOrderByAggregateInput = {
    id?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
  }

  export type DisponibilidadSumOrderByAggregateInput = {
    diaSemana?: SortOrder
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

  export type EnumEstadoReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[]
    notIn?: $Enums.EstadoReserva[]
    not?: NestedEnumEstadoReservaFilter<$PrismaModel> | $Enums.EstadoReserva
  }

  export type FotografoScalarRelationFilter = {
    is?: FotografoWhereInput
    isNot?: FotografoWhereInput
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
    nombreCliente?: SortOrder
    emailCliente?: SortOrder
    clienteId?: SortOrder
    fotografoId?: SortOrder
    pixelpayOrder?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    nombreCliente?: SortOrder
    emailCliente?: SortOrder
    clienteId?: SortOrder
    fotografoId?: SortOrder
    pixelpayOrder?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    nombreCliente?: SortOrder
    emailCliente?: SortOrder
    clienteId?: SortOrder
    fotografoId?: SortOrder
    pixelpayOrder?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEstadoReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[]
    notIn?: $Enums.EstadoReserva[]
    not?: NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoReservaFilter<$PrismaModel>
    _max?: NestedEnumEstadoReservaFilter<$PrismaModel>
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

  export type ReservaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type FotografoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FotografoCreateWithoutUsuarioInput, FotografoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutUsuarioInput
    connect?: FotografoWhereUniqueInput
  }

  export type ReservaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
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

  export type FotografoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FotografoCreateWithoutUsuarioInput, FotografoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutUsuarioInput
    upsert?: FotografoUpsertWithoutUsuarioInput
    disconnect?: FotografoWhereInput | boolean
    delete?: FotografoWhereInput | boolean
    connect?: FotografoWhereUniqueInput
    update?: XOR<XOR<FotografoUpdateToOneWithWhereWithoutUsuarioInput, FotografoUpdateWithoutUsuarioInput>, FotografoUncheckedUpdateWithoutUsuarioInput>
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

  export type FotografoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FotografoCreateWithoutUsuarioInput, FotografoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutUsuarioInput
    upsert?: FotografoUpsertWithoutUsuarioInput
    disconnect?: FotografoWhereInput | boolean
    delete?: FotografoWhereInput | boolean
    connect?: FotografoWhereUniqueInput
    update?: XOR<XOR<FotografoUpdateToOneWithWhereWithoutUsuarioInput, FotografoUpdateWithoutUsuarioInput>, FotografoUncheckedUpdateWithoutUsuarioInput>
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

  export type ReservaUncheckedCreateNestedManyWithoutFotografoInput = {
    create?: XOR<ReservaCreateWithoutFotografoInput, ReservaUncheckedCreateWithoutFotografoInput> | ReservaCreateWithoutFotografoInput[] | ReservaUncheckedCreateWithoutFotografoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutFotografoInput | ReservaCreateOrConnectWithoutFotografoInput[]
    createMany?: ReservaCreateManyFotografoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioCreateNestedOneWithoutReservasInput = {
    create?: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type FotografoCreateNestedOneWithoutReservasInput = {
    create?: XOR<FotografoCreateWithoutReservasInput, FotografoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutReservasInput
    connect?: FotografoWhereUniqueInput
  }

  export type EnumEstadoReservaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoReserva
  }

  export type UsuarioUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasInput
    upsert?: UsuarioUpsertWithoutReservasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReservasInput, UsuarioUpdateWithoutReservasInput>, UsuarioUncheckedUpdateWithoutReservasInput>
  }

  export type FotografoUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<FotografoCreateWithoutReservasInput, FotografoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: FotografoCreateOrConnectWithoutReservasInput
    upsert?: FotografoUpsertWithoutReservasInput
    connect?: FotografoWhereUniqueInput
    update?: XOR<XOR<FotografoUpdateToOneWithWhereWithoutReservasInput, FotografoUpdateWithoutReservasInput>, FotografoUncheckedUpdateWithoutReservasInput>
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

  export type NestedEnumEstadoReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[]
    notIn?: $Enums.EstadoReserva[]
    not?: NestedEnumEstadoReservaFilter<$PrismaModel> | $Enums.EstadoReserva
  }

  export type NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[]
    notIn?: $Enums.EstadoReserva[]
    not?: NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoReservaFilter<$PrismaModel>
    _max?: NestedEnumEstadoReservaFilter<$PrismaModel>
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
    reservas?: ReservaCreateNestedManyWithoutClienteInput
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
    reservas?: ReservaUncheckedCreateNestedManyWithoutClienteInput
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

  export type ReservaCreateWithoutClienteInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    nombreCliente: string
    emailCliente: string
    pixelpayOrder: string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    fotografo: FotografoCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutClienteInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    nombreCliente: string
    emailCliente: string
    fotografoId: string
    pixelpayOrder: string
    estado?: $Enums.EstadoReserva
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

  export type FotografoCreateWithoutUsuarioInput = {
    id?: string
    telefono?: string | null
    bio?: string | null
    reservas?: ReservaCreateNestedManyWithoutFotografoInput
  }

  export type FotografoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    telefono?: string | null
    bio?: string | null
    reservas?: ReservaUncheckedCreateNestedManyWithoutFotografoInput
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
    nombreCliente?: StringFilter<"Reserva"> | string
    emailCliente?: StringFilter<"Reserva"> | string
    clienteId?: StringFilter<"Reserva"> | string
    fotografoId?: StringFilter<"Reserva"> | string
    pixelpayOrder?: StringFilter<"Reserva"> | string
    estado?: EnumEstadoReservaFilter<"Reserva"> | $Enums.EstadoReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
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
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUpdateManyWithoutFotografoNestedInput
  }

  export type FotografoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reservas?: ReservaUncheckedUpdateManyWithoutFotografoNestedInput
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
    reservas?: ReservaCreateNestedManyWithoutClienteInput
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
    reservas?: ReservaUncheckedCreateNestedManyWithoutClienteInput
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
    nombreCliente: string
    emailCliente: string
    pixelpayOrder: string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    cliente: UsuarioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutFotografoInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    nombreCliente: string
    emailCliente: string
    clienteId: string
    pixelpayOrder: string
    estado?: $Enums.EstadoReserva
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
    reservas?: ReservaUpdateManyWithoutClienteNestedInput
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
    reservas?: ReservaUncheckedUpdateManyWithoutClienteNestedInput
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

  export type UsuarioCreateWithoutReservasInput = {
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

  export type UsuarioUncheckedCreateWithoutReservasInput = {
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

  export type UsuarioCreateOrConnectWithoutReservasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
  }

  export type FotografoCreateWithoutReservasInput = {
    id?: string
    telefono?: string | null
    bio?: string | null
    usuario: UsuarioCreateNestedOneWithoutFotografoInput
  }

  export type FotografoUncheckedCreateWithoutReservasInput = {
    id?: string
    usuarioId: string
    telefono?: string | null
    bio?: string | null
  }

  export type FotografoCreateOrConnectWithoutReservasInput = {
    where: FotografoWhereUniqueInput
    create: XOR<FotografoCreateWithoutReservasInput, FotografoUncheckedCreateWithoutReservasInput>
  }

  export type UsuarioUpsertWithoutReservasInput = {
    update: XOR<UsuarioUpdateWithoutReservasInput, UsuarioUncheckedUpdateWithoutReservasInput>
    create: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReservasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReservasInput, UsuarioUncheckedUpdateWithoutReservasInput>
  }

  export type UsuarioUpdateWithoutReservasInput = {
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

  export type UsuarioUncheckedUpdateWithoutReservasInput = {
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
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutFotografoNestedInput
  }

  export type FotografoUncheckedUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
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
    reservas?: ReservaUpdateManyWithoutClienteNestedInput
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
    reservas?: ReservaUncheckedUpdateManyWithoutClienteNestedInput
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
    nombreCliente: string
    emailCliente: string
    fotografoId: string
    pixelpayOrder: string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
  }

  export type ReservaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    pixelpayOrder?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fotografo?: FotografoUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    pixelpayOrder?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    fotografoId?: StringFieldUpdateOperationsInput | string
    pixelpayOrder?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyFotografoInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    nombreCliente: string
    emailCliente: string
    clienteId: string
    pixelpayOrder: string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
  }

  export type ReservaUpdateWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    pixelpayOrder?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    pixelpayOrder?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutFotografoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    pixelpayOrder?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
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