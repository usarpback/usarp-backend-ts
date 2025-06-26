
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Projeto
 * 
 */
export type Projeto = $Result.DefaultSelection<Prisma.$ProjetoPayload>
/**
 * Model Brainstorming
 * 
 */
export type Brainstorming = $Result.DefaultSelection<Prisma.$BrainstormingPayload>
/**
 * Model ProjetoUsuario
 * 
 */
export type ProjetoUsuario = $Result.DefaultSelection<Prisma.$ProjetoUsuarioPayload>
/**
 * Model BrainstormingProjeto
 * 
 */
export type BrainstormingProjeto = $Result.DefaultSelection<Prisma.$BrainstormingProjetoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Genero: {
  FEMININO: 'FEMININO',
  MASCULINO: 'MASCULINO',
  NAO_BINARIO: 'NAO_BINARIO',
  PREFERE_NAO_INFORMAR: 'PREFERE_NAO_INFORMAR'
};

export type Genero = (typeof Genero)[keyof typeof Genero]


export const Perfil: {
  ESTUDANTE_GRADUACAO: 'ESTUDANTE_GRADUACAO',
  ESTUDANTE_POS_GRADUACAO: 'ESTUDANTE_POS_GRADUACAO',
  PROFESSOR: 'PROFESSOR',
  PROFISSIONAL_INDUSTRIA: 'PROFISSIONAL_INDUSTRIA'
};

export type Perfil = (typeof Perfil)[keyof typeof Perfil]


export const StatusProjeto: {
  NOVO: 'NOVO',
  DELETADO: 'DELETADO',
  ANTIGO: 'ANTIGO'
};

export type StatusProjeto = (typeof StatusProjeto)[keyof typeof StatusProjeto]


export const PapelProjeto: {
  MODERADOR: 'MODERADOR',
  PARTICIPANTE: 'PARTICIPANTE'
};

export type PapelProjeto = (typeof PapelProjeto)[keyof typeof PapelProjeto]

}

export type Genero = $Enums.Genero

export const Genero: typeof $Enums.Genero

export type Perfil = $Enums.Perfil

export const Perfil: typeof $Enums.Perfil

export type StatusProjeto = $Enums.StatusProjeto

export const StatusProjeto: typeof $Enums.StatusProjeto

export type PapelProjeto = $Enums.PapelProjeto

export const PapelProjeto: typeof $Enums.PapelProjeto

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projeto`: Exposes CRUD operations for the **Projeto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projetos
    * const projetos = await prisma.projeto.findMany()
    * ```
    */
  get projeto(): Prisma.ProjetoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brainstorming`: Exposes CRUD operations for the **Brainstorming** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brainstormings
    * const brainstormings = await prisma.brainstorming.findMany()
    * ```
    */
  get brainstorming(): Prisma.BrainstormingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projetoUsuario`: Exposes CRUD operations for the **ProjetoUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjetoUsuarios
    * const projetoUsuarios = await prisma.projetoUsuario.findMany()
    * ```
    */
  get projetoUsuario(): Prisma.ProjetoUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brainstormingProjeto`: Exposes CRUD operations for the **BrainstormingProjeto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrainstormingProjetos
    * const brainstormingProjetos = await prisma.brainstormingProjeto.findMany()
    * ```
    */
  get brainstormingProjeto(): Prisma.BrainstormingProjetoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Usuario: 'Usuario',
    Projeto: 'Projeto',
    Brainstorming: 'Brainstorming',
    ProjetoUsuario: 'ProjetoUsuario',
    BrainstormingProjeto: 'BrainstormingProjeto'
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
      modelProps: "usuario" | "projeto" | "brainstorming" | "projetoUsuario" | "brainstormingProjeto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
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
      Projeto: {
        payload: Prisma.$ProjetoPayload<ExtArgs>
        fields: Prisma.ProjetoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjetoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjetoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findFirst: {
            args: Prisma.ProjetoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjetoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findMany: {
            args: Prisma.ProjetoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          create: {
            args: Prisma.ProjetoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          createMany: {
            args: Prisma.ProjetoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjetoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          delete: {
            args: Prisma.ProjetoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          update: {
            args: Prisma.ProjetoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          deleteMany: {
            args: Prisma.ProjetoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjetoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjetoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          upsert: {
            args: Prisma.ProjetoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          aggregate: {
            args: Prisma.ProjetoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjeto>
          }
          groupBy: {
            args: Prisma.ProjetoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjetoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjetoCountArgs<ExtArgs>
            result: $Utils.Optional<ProjetoCountAggregateOutputType> | number
          }
        }
      }
      Brainstorming: {
        payload: Prisma.$BrainstormingPayload<ExtArgs>
        fields: Prisma.BrainstormingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrainstormingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrainstormingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingPayload>
          }
          findFirst: {
            args: Prisma.BrainstormingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrainstormingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingPayload>
          }
          findMany: {
            args: Prisma.BrainstormingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingPayload>[]
          }
          create: {
            args: Prisma.BrainstormingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingPayload>
          }
          createMany: {
            args: Prisma.BrainstormingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrainstormingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingPayload>[]
          }
          delete: {
            args: Prisma.BrainstormingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingPayload>
          }
          update: {
            args: Prisma.BrainstormingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingPayload>
          }
          deleteMany: {
            args: Prisma.BrainstormingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrainstormingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrainstormingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingPayload>[]
          }
          upsert: {
            args: Prisma.BrainstormingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingPayload>
          }
          aggregate: {
            args: Prisma.BrainstormingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrainstorming>
          }
          groupBy: {
            args: Prisma.BrainstormingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrainstormingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrainstormingCountArgs<ExtArgs>
            result: $Utils.Optional<BrainstormingCountAggregateOutputType> | number
          }
        }
      }
      ProjetoUsuario: {
        payload: Prisma.$ProjetoUsuarioPayload<ExtArgs>
        fields: Prisma.ProjetoUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjetoUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjetoUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoUsuarioPayload>
          }
          findFirst: {
            args: Prisma.ProjetoUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjetoUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoUsuarioPayload>
          }
          findMany: {
            args: Prisma.ProjetoUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoUsuarioPayload>[]
          }
          create: {
            args: Prisma.ProjetoUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoUsuarioPayload>
          }
          createMany: {
            args: Prisma.ProjetoUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjetoUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoUsuarioPayload>[]
          }
          delete: {
            args: Prisma.ProjetoUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoUsuarioPayload>
          }
          update: {
            args: Prisma.ProjetoUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.ProjetoUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjetoUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjetoUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.ProjetoUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoUsuarioPayload>
          }
          aggregate: {
            args: Prisma.ProjetoUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjetoUsuario>
          }
          groupBy: {
            args: Prisma.ProjetoUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjetoUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjetoUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<ProjetoUsuarioCountAggregateOutputType> | number
          }
        }
      }
      BrainstormingProjeto: {
        payload: Prisma.$BrainstormingProjetoPayload<ExtArgs>
        fields: Prisma.BrainstormingProjetoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrainstormingProjetoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingProjetoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrainstormingProjetoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingProjetoPayload>
          }
          findFirst: {
            args: Prisma.BrainstormingProjetoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingProjetoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrainstormingProjetoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingProjetoPayload>
          }
          findMany: {
            args: Prisma.BrainstormingProjetoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingProjetoPayload>[]
          }
          create: {
            args: Prisma.BrainstormingProjetoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingProjetoPayload>
          }
          createMany: {
            args: Prisma.BrainstormingProjetoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrainstormingProjetoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingProjetoPayload>[]
          }
          delete: {
            args: Prisma.BrainstormingProjetoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingProjetoPayload>
          }
          update: {
            args: Prisma.BrainstormingProjetoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingProjetoPayload>
          }
          deleteMany: {
            args: Prisma.BrainstormingProjetoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrainstormingProjetoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrainstormingProjetoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingProjetoPayload>[]
          }
          upsert: {
            args: Prisma.BrainstormingProjetoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrainstormingProjetoPayload>
          }
          aggregate: {
            args: Prisma.BrainstormingProjetoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrainstormingProjeto>
          }
          groupBy: {
            args: Prisma.BrainstormingProjetoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrainstormingProjetoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrainstormingProjetoCountArgs<ExtArgs>
            result: $Utils.Optional<BrainstormingProjetoCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    projeto?: ProjetoOmit
    brainstorming?: BrainstormingOmit
    projetoUsuario?: ProjetoUsuarioOmit
    brainstormingProjeto?: BrainstormingProjetoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    projetosCriados: number
    brainstormingsCriados: number
    participacoesProjeto: number
    participacoesPorEmail: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projetosCriados?: boolean | UsuarioCountOutputTypeCountProjetosCriadosArgs
    brainstormingsCriados?: boolean | UsuarioCountOutputTypeCountBrainstormingsCriadosArgs
    participacoesProjeto?: boolean | UsuarioCountOutputTypeCountParticipacoesProjetoArgs
    participacoesPorEmail?: boolean | UsuarioCountOutputTypeCountParticipacoesPorEmailArgs
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
  export type UsuarioCountOutputTypeCountProjetosCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountBrainstormingsCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrainstormingWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountParticipacoesProjetoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoUsuarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountParticipacoesPorEmailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoUsuarioWhereInput
  }


  /**
   * Count Type ProjetoCountOutputType
   */

  export type ProjetoCountOutputType = {
    membros: number
    brainstormings: number
  }

  export type ProjetoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membros?: boolean | ProjetoCountOutputTypeCountMembrosArgs
    brainstormings?: boolean | ProjetoCountOutputTypeCountBrainstormingsArgs
  }

  // Custom InputTypes
  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoCountOutputType
     */
    select?: ProjetoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeCountMembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoUsuarioWhereInput
  }

  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeCountBrainstormingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrainstormingProjetoWhereInput
  }


  /**
   * Count Type BrainstormingCountOutputType
   */

  export type BrainstormingCountOutputType = {
    projetos: number
  }

  export type BrainstormingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projetos?: boolean | BrainstormingCountOutputTypeCountProjetosArgs
  }

  // Custom InputTypes
  /**
   * BrainstormingCountOutputType without action
   */
  export type BrainstormingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingCountOutputType
     */
    select?: BrainstormingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrainstormingCountOutputType without action
   */
  export type BrainstormingCountOutputTypeCountProjetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrainstormingProjetoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    tentativasLogin: number | null
    tentativasExclusao: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    tentativasLogin: number | null
    tentativasExclusao: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nomeCompleto: string | null
    email: string | null
    senha: string | null
    genero: $Enums.Genero | null
    dataNascimento: string | null
    perfil: $Enums.Perfil | null
    organizacao: string | null
    tentativasLogin: number | null
    tentativasExclusao: number | null
    bloqueadoAte: Date | null
    tokenRedefinirSenha: string | null
    expiraRedefinirSenha: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nomeCompleto: string | null
    email: string | null
    senha: string | null
    genero: $Enums.Genero | null
    dataNascimento: string | null
    perfil: $Enums.Perfil | null
    organizacao: string | null
    tentativasLogin: number | null
    tentativasExclusao: number | null
    bloqueadoAte: Date | null
    tokenRedefinirSenha: string | null
    expiraRedefinirSenha: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nomeCompleto: number
    email: number
    senha: number
    genero: number
    dataNascimento: number
    perfil: number
    organizacao: number
    tentativasLogin: number
    tentativasExclusao: number
    bloqueadoAte: number
    tokenRedefinirSenha: number
    expiraRedefinirSenha: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    tentativasLogin?: true
    tentativasExclusao?: true
  }

  export type UsuarioSumAggregateInputType = {
    tentativasLogin?: true
    tentativasExclusao?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nomeCompleto?: true
    email?: true
    senha?: true
    genero?: true
    dataNascimento?: true
    perfil?: true
    organizacao?: true
    tentativasLogin?: true
    tentativasExclusao?: true
    bloqueadoAte?: true
    tokenRedefinirSenha?: true
    expiraRedefinirSenha?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nomeCompleto?: true
    email?: true
    senha?: true
    genero?: true
    dataNascimento?: true
    perfil?: true
    organizacao?: true
    tentativasLogin?: true
    tentativasExclusao?: true
    bloqueadoAte?: true
    tokenRedefinirSenha?: true
    expiraRedefinirSenha?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nomeCompleto?: true
    email?: true
    senha?: true
    genero?: true
    dataNascimento?: true
    perfil?: true
    organizacao?: true
    tentativasLogin?: true
    tentativasExclusao?: true
    bloqueadoAte?: true
    tokenRedefinirSenha?: true
    expiraRedefinirSenha?: true
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
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
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
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin: number
    tentativasExclusao: number
    bloqueadoAte: Date | null
    tokenRedefinirSenha: string | null
    expiraRedefinirSenha: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
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
    nomeCompleto?: boolean
    email?: boolean
    senha?: boolean
    genero?: boolean
    dataNascimento?: boolean
    perfil?: boolean
    organizacao?: boolean
    tentativasLogin?: boolean
    tentativasExclusao?: boolean
    bloqueadoAte?: boolean
    tokenRedefinirSenha?: boolean
    expiraRedefinirSenha?: boolean
    projetosCriados?: boolean | Usuario$projetosCriadosArgs<ExtArgs>
    brainstormingsCriados?: boolean | Usuario$brainstormingsCriadosArgs<ExtArgs>
    participacoesProjeto?: boolean | Usuario$participacoesProjetoArgs<ExtArgs>
    participacoesPorEmail?: boolean | Usuario$participacoesPorEmailArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    email?: boolean
    senha?: boolean
    genero?: boolean
    dataNascimento?: boolean
    perfil?: boolean
    organizacao?: boolean
    tentativasLogin?: boolean
    tentativasExclusao?: boolean
    bloqueadoAte?: boolean
    tokenRedefinirSenha?: boolean
    expiraRedefinirSenha?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    email?: boolean
    senha?: boolean
    genero?: boolean
    dataNascimento?: boolean
    perfil?: boolean
    organizacao?: boolean
    tentativasLogin?: boolean
    tentativasExclusao?: boolean
    bloqueadoAte?: boolean
    tokenRedefinirSenha?: boolean
    expiraRedefinirSenha?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nomeCompleto?: boolean
    email?: boolean
    senha?: boolean
    genero?: boolean
    dataNascimento?: boolean
    perfil?: boolean
    organizacao?: boolean
    tentativasLogin?: boolean
    tentativasExclusao?: boolean
    bloqueadoAte?: boolean
    tokenRedefinirSenha?: boolean
    expiraRedefinirSenha?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeCompleto" | "email" | "senha" | "genero" | "dataNascimento" | "perfil" | "organizacao" | "tentativasLogin" | "tentativasExclusao" | "bloqueadoAte" | "tokenRedefinirSenha" | "expiraRedefinirSenha", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projetosCriados?: boolean | Usuario$projetosCriadosArgs<ExtArgs>
    brainstormingsCriados?: boolean | Usuario$brainstormingsCriadosArgs<ExtArgs>
    participacoesProjeto?: boolean | Usuario$participacoesProjetoArgs<ExtArgs>
    participacoesPorEmail?: boolean | Usuario$participacoesPorEmailArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      /**
       * @Zod.Omit(input: true)
       */
      projetosCriados: Prisma.$ProjetoPayload<ExtArgs>[]
      /**
       * @Zod.Omit(input: true)
       */
      brainstormingsCriados: Prisma.$BrainstormingPayload<ExtArgs>[]
      /**
       * @Zod.Omit(input: true)
       */
      participacoesProjeto: Prisma.$ProjetoUsuarioPayload<ExtArgs>[]
      /**
       * @Zod.Omit(input: true)
       */
      participacoesPorEmail: Prisma.$ProjetoUsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeCompleto: string
      email: string
      senha: string
      genero: $Enums.Genero
      dataNascimento: string
      perfil: $Enums.Perfil
      organizacao: string
      tentativasLogin: number
      tentativasExclusao: number
      bloqueadoAte: Date | null
      tokenRedefinirSenha: string | null
      expiraRedefinirSenha: Date | null
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
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    projetosCriados<T extends Usuario$projetosCriadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$projetosCriadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brainstormingsCriados<T extends Usuario$brainstormingsCriadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$brainstormingsCriadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participacoesProjeto<T extends Usuario$participacoesProjetoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$participacoesProjetoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participacoesPorEmail<T extends Usuario$participacoesPorEmailArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$participacoesPorEmailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly nomeCompleto: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly genero: FieldRef<"Usuario", 'Genero'>
    readonly dataNascimento: FieldRef<"Usuario", 'String'>
    readonly perfil: FieldRef<"Usuario", 'Perfil'>
    readonly organizacao: FieldRef<"Usuario", 'String'>
    readonly tentativasLogin: FieldRef<"Usuario", 'Int'>
    readonly tentativasExclusao: FieldRef<"Usuario", 'Int'>
    readonly bloqueadoAte: FieldRef<"Usuario", 'DateTime'>
    readonly tokenRedefinirSenha: FieldRef<"Usuario", 'String'>
    readonly expiraRedefinirSenha: FieldRef<"Usuario", 'DateTime'>
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
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
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
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
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
   * Usuario.projetosCriados
   */
  export type Usuario$projetosCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    cursor?: ProjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Usuario.brainstormingsCriados
   */
  export type Usuario$brainstormingsCriadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingInclude<ExtArgs> | null
    where?: BrainstormingWhereInput
    orderBy?: BrainstormingOrderByWithRelationInput | BrainstormingOrderByWithRelationInput[]
    cursor?: BrainstormingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrainstormingScalarFieldEnum | BrainstormingScalarFieldEnum[]
  }

  /**
   * Usuario.participacoesProjeto
   */
  export type Usuario$participacoesProjetoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    where?: ProjetoUsuarioWhereInput
    orderBy?: ProjetoUsuarioOrderByWithRelationInput | ProjetoUsuarioOrderByWithRelationInput[]
    cursor?: ProjetoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetoUsuarioScalarFieldEnum | ProjetoUsuarioScalarFieldEnum[]
  }

  /**
   * Usuario.participacoesPorEmail
   */
  export type Usuario$participacoesPorEmailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    where?: ProjetoUsuarioWhereInput
    orderBy?: ProjetoUsuarioOrderByWithRelationInput | ProjetoUsuarioOrderByWithRelationInput[]
    cursor?: ProjetoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetoUsuarioScalarFieldEnum | ProjetoUsuarioScalarFieldEnum[]
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
   * Model Projeto
   */

  export type AggregateProjeto = {
    _count: ProjetoCountAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  export type ProjetoMinAggregateOutputType = {
    id: string | null
    nomeProjeto: string | null
    descricao: string | null
    criadorId: string | null
    status: $Enums.StatusProjeto | null
  }

  export type ProjetoMaxAggregateOutputType = {
    id: string | null
    nomeProjeto: string | null
    descricao: string | null
    criadorId: string | null
    status: $Enums.StatusProjeto | null
  }

  export type ProjetoCountAggregateOutputType = {
    id: number
    nomeProjeto: number
    descricao: number
    criadorId: number
    status: number
    _all: number
  }


  export type ProjetoMinAggregateInputType = {
    id?: true
    nomeProjeto?: true
    descricao?: true
    criadorId?: true
    status?: true
  }

  export type ProjetoMaxAggregateInputType = {
    id?: true
    nomeProjeto?: true
    descricao?: true
    criadorId?: true
    status?: true
  }

  export type ProjetoCountAggregateInputType = {
    id?: true
    nomeProjeto?: true
    descricao?: true
    criadorId?: true
    status?: true
    _all?: true
  }

  export type ProjetoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projeto to aggregate.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projetos
    **/
    _count?: true | ProjetoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjetoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjetoMaxAggregateInputType
  }

  export type GetProjetoAggregateType<T extends ProjetoAggregateArgs> = {
        [P in keyof T & keyof AggregateProjeto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjeto[P]>
      : GetScalarType<T[P], AggregateProjeto[P]>
  }




  export type ProjetoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithAggregationInput | ProjetoOrderByWithAggregationInput[]
    by: ProjetoScalarFieldEnum[] | ProjetoScalarFieldEnum
    having?: ProjetoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjetoCountAggregateInputType | true
    _min?: ProjetoMinAggregateInputType
    _max?: ProjetoMaxAggregateInputType
  }

  export type ProjetoGroupByOutputType = {
    id: string
    nomeProjeto: string
    descricao: string | null
    criadorId: string
    status: $Enums.StatusProjeto
    _count: ProjetoCountAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  type GetProjetoGroupByPayload<T extends ProjetoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjetoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjetoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
            : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
        }
      >
    >


  export type ProjetoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeProjeto?: boolean
    descricao?: boolean
    criadorId?: boolean
    status?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
    membros?: boolean | Projeto$membrosArgs<ExtArgs>
    brainstormings?: boolean | Projeto$brainstormingsArgs<ExtArgs>
    _count?: boolean | ProjetoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeProjeto?: boolean
    descricao?: boolean
    criadorId?: boolean
    status?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeProjeto?: boolean
    descricao?: boolean
    criadorId?: boolean
    status?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectScalar = {
    id?: boolean
    nomeProjeto?: boolean
    descricao?: boolean
    criadorId?: boolean
    status?: boolean
  }

  export type ProjetoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeProjeto" | "descricao" | "criadorId" | "status", ExtArgs["result"]["projeto"]>
  export type ProjetoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
    membros?: boolean | Projeto$membrosArgs<ExtArgs>
    brainstormings?: boolean | Projeto$brainstormingsArgs<ExtArgs>
    _count?: boolean | ProjetoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjetoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ProjetoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ProjetoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projeto"
    objects: {
      criador: Prisma.$UsuarioPayload<ExtArgs>
      /**
       * @Zod.Omit(input: true)
       */
      membros: Prisma.$ProjetoUsuarioPayload<ExtArgs>[]
      /**
       * @Zod.Omit(input: true)
       */
      brainstormings: Prisma.$BrainstormingProjetoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeProjeto: string
      descricao: string | null
      criadorId: string
      status: $Enums.StatusProjeto
    }, ExtArgs["result"]["projeto"]>
    composites: {}
  }

  type ProjetoGetPayload<S extends boolean | null | undefined | ProjetoDefaultArgs> = $Result.GetResult<Prisma.$ProjetoPayload, S>

  type ProjetoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjetoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjetoCountAggregateInputType | true
    }

  export interface ProjetoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projeto'], meta: { name: 'Projeto' } }
    /**
     * Find zero or one Projeto that matches the filter.
     * @param {ProjetoFindUniqueArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjetoFindUniqueArgs>(args: SelectSubset<T, ProjetoFindUniqueArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projeto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjetoFindUniqueOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjetoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjetoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjetoFindFirstArgs>(args?: SelectSubset<T, ProjetoFindFirstArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjetoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjetoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projetos
     * const projetos = await prisma.projeto.findMany()
     * 
     * // Get first 10 Projetos
     * const projetos = await prisma.projeto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projetoWithIdOnly = await prisma.projeto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjetoFindManyArgs>(args?: SelectSubset<T, ProjetoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projeto.
     * @param {ProjetoCreateArgs} args - Arguments to create a Projeto.
     * @example
     * // Create one Projeto
     * const Projeto = await prisma.projeto.create({
     *   data: {
     *     // ... data to create a Projeto
     *   }
     * })
     * 
     */
    create<T extends ProjetoCreateArgs>(args: SelectSubset<T, ProjetoCreateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projetos.
     * @param {ProjetoCreateManyArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjetoCreateManyArgs>(args?: SelectSubset<T, ProjetoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projetos and returns the data saved in the database.
     * @param {ProjetoCreateManyAndReturnArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjetoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjetoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projeto.
     * @param {ProjetoDeleteArgs} args - Arguments to delete one Projeto.
     * @example
     * // Delete one Projeto
     * const Projeto = await prisma.projeto.delete({
     *   where: {
     *     // ... filter to delete one Projeto
     *   }
     * })
     * 
     */
    delete<T extends ProjetoDeleteArgs>(args: SelectSubset<T, ProjetoDeleteArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projeto.
     * @param {ProjetoUpdateArgs} args - Arguments to update one Projeto.
     * @example
     * // Update one Projeto
     * const projeto = await prisma.projeto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjetoUpdateArgs>(args: SelectSubset<T, ProjetoUpdateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projetos.
     * @param {ProjetoDeleteManyArgs} args - Arguments to filter Projetos to delete.
     * @example
     * // Delete a few Projetos
     * const { count } = await prisma.projeto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjetoDeleteManyArgs>(args?: SelectSubset<T, ProjetoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjetoUpdateManyArgs>(args: SelectSubset<T, ProjetoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos and returns the data updated in the database.
     * @param {ProjetoUpdateManyAndReturnArgs} args - Arguments to update many Projetos.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjetoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjetoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projeto.
     * @param {ProjetoUpsertArgs} args - Arguments to update or create a Projeto.
     * @example
     * // Update or create a Projeto
     * const projeto = await prisma.projeto.upsert({
     *   create: {
     *     // ... data to create a Projeto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projeto we want to update
     *   }
     * })
     */
    upsert<T extends ProjetoUpsertArgs>(args: SelectSubset<T, ProjetoUpsertArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoCountArgs} args - Arguments to filter Projetos to count.
     * @example
     * // Count the number of Projetos
     * const count = await prisma.projeto.count({
     *   where: {
     *     // ... the filter for the Projetos we want to count
     *   }
     * })
    **/
    count<T extends ProjetoCountArgs>(
      args?: Subset<T, ProjetoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjetoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjetoAggregateArgs>(args: Subset<T, ProjetoAggregateArgs>): Prisma.PrismaPromise<GetProjetoAggregateType<T>>

    /**
     * Group by Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoGroupByArgs} args - Group by arguments.
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
      T extends ProjetoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjetoGroupByArgs['orderBy'] }
        : { orderBy?: ProjetoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjetoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjetoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projeto model
   */
  readonly fields: ProjetoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projeto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjetoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    membros<T extends Projeto$membrosArgs<ExtArgs> = {}>(args?: Subset<T, Projeto$membrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brainstormings<T extends Projeto$brainstormingsArgs<ExtArgs> = {}>(args?: Subset<T, Projeto$brainstormingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Projeto model
   */
  interface ProjetoFieldRefs {
    readonly id: FieldRef<"Projeto", 'String'>
    readonly nomeProjeto: FieldRef<"Projeto", 'String'>
    readonly descricao: FieldRef<"Projeto", 'String'>
    readonly criadorId: FieldRef<"Projeto", 'String'>
    readonly status: FieldRef<"Projeto", 'StatusProjeto'>
  }
    

  // Custom InputTypes
  /**
   * Projeto findUnique
   */
  export type ProjetoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findUniqueOrThrow
   */
  export type ProjetoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findFirst
   */
  export type ProjetoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findFirstOrThrow
   */
  export type ProjetoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findMany
   */
  export type ProjetoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projetos to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto create
   */
  export type ProjetoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The data needed to create a Projeto.
     */
    data: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
  }

  /**
   * Projeto createMany
   */
  export type ProjetoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projeto createManyAndReturn
   */
  export type ProjetoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projeto update
   */
  export type ProjetoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The data needed to update a Projeto.
     */
    data: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
    /**
     * Choose, which Projeto to update.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto updateMany
   */
  export type ProjetoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
  }

  /**
   * Projeto updateManyAndReturn
   */
  export type ProjetoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projeto upsert
   */
  export type ProjetoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The filter to search for the Projeto to update in case it exists.
     */
    where: ProjetoWhereUniqueInput
    /**
     * In case the Projeto found by the `where` argument doesn't exist, create a new Projeto with this data.
     */
    create: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
    /**
     * In case the Projeto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
  }

  /**
   * Projeto delete
   */
  export type ProjetoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter which Projeto to delete.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto deleteMany
   */
  export type ProjetoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projetos to delete
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to delete.
     */
    limit?: number
  }

  /**
   * Projeto.membros
   */
  export type Projeto$membrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    where?: ProjetoUsuarioWhereInput
    orderBy?: ProjetoUsuarioOrderByWithRelationInput | ProjetoUsuarioOrderByWithRelationInput[]
    cursor?: ProjetoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetoUsuarioScalarFieldEnum | ProjetoUsuarioScalarFieldEnum[]
  }

  /**
   * Projeto.brainstormings
   */
  export type Projeto$brainstormingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
    where?: BrainstormingProjetoWhereInput
    orderBy?: BrainstormingProjetoOrderByWithRelationInput | BrainstormingProjetoOrderByWithRelationInput[]
    cursor?: BrainstormingProjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrainstormingProjetoScalarFieldEnum | BrainstormingProjetoScalarFieldEnum[]
  }

  /**
   * Projeto without action
   */
  export type ProjetoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
  }


  /**
   * Model Brainstorming
   */

  export type AggregateBrainstorming = {
    _count: BrainstormingCountAggregateOutputType | null
    _min: BrainstormingMinAggregateOutputType | null
    _max: BrainstormingMaxAggregateOutputType | null
  }

  export type BrainstormingMinAggregateOutputType = {
    id: string | null
    criadorId: string | null
    titulo: string | null
    projetoRelacionado: string | null
    data: string | null
    horario: string | null
    historiasUsuario: string | null
  }

  export type BrainstormingMaxAggregateOutputType = {
    id: string | null
    criadorId: string | null
    titulo: string | null
    projetoRelacionado: string | null
    data: string | null
    horario: string | null
    historiasUsuario: string | null
  }

  export type BrainstormingCountAggregateOutputType = {
    id: number
    criadorId: number
    titulo: number
    projetoRelacionado: number
    data: number
    horario: number
    historiasUsuario: number
    _all: number
  }


  export type BrainstormingMinAggregateInputType = {
    id?: true
    criadorId?: true
    titulo?: true
    projetoRelacionado?: true
    data?: true
    horario?: true
    historiasUsuario?: true
  }

  export type BrainstormingMaxAggregateInputType = {
    id?: true
    criadorId?: true
    titulo?: true
    projetoRelacionado?: true
    data?: true
    horario?: true
    historiasUsuario?: true
  }

  export type BrainstormingCountAggregateInputType = {
    id?: true
    criadorId?: true
    titulo?: true
    projetoRelacionado?: true
    data?: true
    horario?: true
    historiasUsuario?: true
    _all?: true
  }

  export type BrainstormingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brainstorming to aggregate.
     */
    where?: BrainstormingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brainstormings to fetch.
     */
    orderBy?: BrainstormingOrderByWithRelationInput | BrainstormingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrainstormingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brainstormings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brainstormings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brainstormings
    **/
    _count?: true | BrainstormingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrainstormingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrainstormingMaxAggregateInputType
  }

  export type GetBrainstormingAggregateType<T extends BrainstormingAggregateArgs> = {
        [P in keyof T & keyof AggregateBrainstorming]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrainstorming[P]>
      : GetScalarType<T[P], AggregateBrainstorming[P]>
  }




  export type BrainstormingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrainstormingWhereInput
    orderBy?: BrainstormingOrderByWithAggregationInput | BrainstormingOrderByWithAggregationInput[]
    by: BrainstormingScalarFieldEnum[] | BrainstormingScalarFieldEnum
    having?: BrainstormingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrainstormingCountAggregateInputType | true
    _min?: BrainstormingMinAggregateInputType
    _max?: BrainstormingMaxAggregateInputType
  }

  export type BrainstormingGroupByOutputType = {
    id: string
    criadorId: string
    titulo: string
    projetoRelacionado: string
    data: string
    horario: string
    historiasUsuario: string
    _count: BrainstormingCountAggregateOutputType | null
    _min: BrainstormingMinAggregateOutputType | null
    _max: BrainstormingMaxAggregateOutputType | null
  }

  type GetBrainstormingGroupByPayload<T extends BrainstormingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrainstormingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrainstormingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrainstormingGroupByOutputType[P]>
            : GetScalarType<T[P], BrainstormingGroupByOutputType[P]>
        }
      >
    >


  export type BrainstormingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criadorId?: boolean
    titulo?: boolean
    projetoRelacionado?: boolean
    data?: boolean
    horario?: boolean
    historiasUsuario?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
    projetos?: boolean | Brainstorming$projetosArgs<ExtArgs>
    _count?: boolean | BrainstormingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brainstorming"]>

  export type BrainstormingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criadorId?: boolean
    titulo?: boolean
    projetoRelacionado?: boolean
    data?: boolean
    horario?: boolean
    historiasUsuario?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brainstorming"]>

  export type BrainstormingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criadorId?: boolean
    titulo?: boolean
    projetoRelacionado?: boolean
    data?: boolean
    horario?: boolean
    historiasUsuario?: boolean
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brainstorming"]>

  export type BrainstormingSelectScalar = {
    id?: boolean
    criadorId?: boolean
    titulo?: boolean
    projetoRelacionado?: boolean
    data?: boolean
    horario?: boolean
    historiasUsuario?: boolean
  }

  export type BrainstormingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "criadorId" | "titulo" | "projetoRelacionado" | "data" | "horario" | "historiasUsuario", ExtArgs["result"]["brainstorming"]>
  export type BrainstormingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
    projetos?: boolean | Brainstorming$projetosArgs<ExtArgs>
    _count?: boolean | BrainstormingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrainstormingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type BrainstormingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $BrainstormingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brainstorming"
    objects: {
      criador: Prisma.$UsuarioPayload<ExtArgs>
      /**
       * @Zod.Omit(input: true)
       */
      projetos: Prisma.$BrainstormingProjetoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      criadorId: string
      titulo: string
      projetoRelacionado: string
      data: string
      horario: string
      historiasUsuario: string
    }, ExtArgs["result"]["brainstorming"]>
    composites: {}
  }

  type BrainstormingGetPayload<S extends boolean | null | undefined | BrainstormingDefaultArgs> = $Result.GetResult<Prisma.$BrainstormingPayload, S>

  type BrainstormingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrainstormingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrainstormingCountAggregateInputType | true
    }

  export interface BrainstormingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brainstorming'], meta: { name: 'Brainstorming' } }
    /**
     * Find zero or one Brainstorming that matches the filter.
     * @param {BrainstormingFindUniqueArgs} args - Arguments to find a Brainstorming
     * @example
     * // Get one Brainstorming
     * const brainstorming = await prisma.brainstorming.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrainstormingFindUniqueArgs>(args: SelectSubset<T, BrainstormingFindUniqueArgs<ExtArgs>>): Prisma__BrainstormingClient<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brainstorming that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrainstormingFindUniqueOrThrowArgs} args - Arguments to find a Brainstorming
     * @example
     * // Get one Brainstorming
     * const brainstorming = await prisma.brainstorming.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrainstormingFindUniqueOrThrowArgs>(args: SelectSubset<T, BrainstormingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrainstormingClient<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brainstorming that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingFindFirstArgs} args - Arguments to find a Brainstorming
     * @example
     * // Get one Brainstorming
     * const brainstorming = await prisma.brainstorming.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrainstormingFindFirstArgs>(args?: SelectSubset<T, BrainstormingFindFirstArgs<ExtArgs>>): Prisma__BrainstormingClient<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brainstorming that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingFindFirstOrThrowArgs} args - Arguments to find a Brainstorming
     * @example
     * // Get one Brainstorming
     * const brainstorming = await prisma.brainstorming.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrainstormingFindFirstOrThrowArgs>(args?: SelectSubset<T, BrainstormingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrainstormingClient<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brainstormings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brainstormings
     * const brainstormings = await prisma.brainstorming.findMany()
     * 
     * // Get first 10 Brainstormings
     * const brainstormings = await prisma.brainstorming.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brainstormingWithIdOnly = await prisma.brainstorming.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrainstormingFindManyArgs>(args?: SelectSubset<T, BrainstormingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brainstorming.
     * @param {BrainstormingCreateArgs} args - Arguments to create a Brainstorming.
     * @example
     * // Create one Brainstorming
     * const Brainstorming = await prisma.brainstorming.create({
     *   data: {
     *     // ... data to create a Brainstorming
     *   }
     * })
     * 
     */
    create<T extends BrainstormingCreateArgs>(args: SelectSubset<T, BrainstormingCreateArgs<ExtArgs>>): Prisma__BrainstormingClient<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brainstormings.
     * @param {BrainstormingCreateManyArgs} args - Arguments to create many Brainstormings.
     * @example
     * // Create many Brainstormings
     * const brainstorming = await prisma.brainstorming.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrainstormingCreateManyArgs>(args?: SelectSubset<T, BrainstormingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brainstormings and returns the data saved in the database.
     * @param {BrainstormingCreateManyAndReturnArgs} args - Arguments to create many Brainstormings.
     * @example
     * // Create many Brainstormings
     * const brainstorming = await prisma.brainstorming.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brainstormings and only return the `id`
     * const brainstormingWithIdOnly = await prisma.brainstorming.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrainstormingCreateManyAndReturnArgs>(args?: SelectSubset<T, BrainstormingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brainstorming.
     * @param {BrainstormingDeleteArgs} args - Arguments to delete one Brainstorming.
     * @example
     * // Delete one Brainstorming
     * const Brainstorming = await prisma.brainstorming.delete({
     *   where: {
     *     // ... filter to delete one Brainstorming
     *   }
     * })
     * 
     */
    delete<T extends BrainstormingDeleteArgs>(args: SelectSubset<T, BrainstormingDeleteArgs<ExtArgs>>): Prisma__BrainstormingClient<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brainstorming.
     * @param {BrainstormingUpdateArgs} args - Arguments to update one Brainstorming.
     * @example
     * // Update one Brainstorming
     * const brainstorming = await prisma.brainstorming.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrainstormingUpdateArgs>(args: SelectSubset<T, BrainstormingUpdateArgs<ExtArgs>>): Prisma__BrainstormingClient<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brainstormings.
     * @param {BrainstormingDeleteManyArgs} args - Arguments to filter Brainstormings to delete.
     * @example
     * // Delete a few Brainstormings
     * const { count } = await prisma.brainstorming.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrainstormingDeleteManyArgs>(args?: SelectSubset<T, BrainstormingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brainstormings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brainstormings
     * const brainstorming = await prisma.brainstorming.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrainstormingUpdateManyArgs>(args: SelectSubset<T, BrainstormingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brainstormings and returns the data updated in the database.
     * @param {BrainstormingUpdateManyAndReturnArgs} args - Arguments to update many Brainstormings.
     * @example
     * // Update many Brainstormings
     * const brainstorming = await prisma.brainstorming.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brainstormings and only return the `id`
     * const brainstormingWithIdOnly = await prisma.brainstorming.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrainstormingUpdateManyAndReturnArgs>(args: SelectSubset<T, BrainstormingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brainstorming.
     * @param {BrainstormingUpsertArgs} args - Arguments to update or create a Brainstorming.
     * @example
     * // Update or create a Brainstorming
     * const brainstorming = await prisma.brainstorming.upsert({
     *   create: {
     *     // ... data to create a Brainstorming
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brainstorming we want to update
     *   }
     * })
     */
    upsert<T extends BrainstormingUpsertArgs>(args: SelectSubset<T, BrainstormingUpsertArgs<ExtArgs>>): Prisma__BrainstormingClient<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brainstormings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingCountArgs} args - Arguments to filter Brainstormings to count.
     * @example
     * // Count the number of Brainstormings
     * const count = await prisma.brainstorming.count({
     *   where: {
     *     // ... the filter for the Brainstormings we want to count
     *   }
     * })
    **/
    count<T extends BrainstormingCountArgs>(
      args?: Subset<T, BrainstormingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrainstormingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brainstorming.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrainstormingAggregateArgs>(args: Subset<T, BrainstormingAggregateArgs>): Prisma.PrismaPromise<GetBrainstormingAggregateType<T>>

    /**
     * Group by Brainstorming.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingGroupByArgs} args - Group by arguments.
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
      T extends BrainstormingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrainstormingGroupByArgs['orderBy'] }
        : { orderBy?: BrainstormingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrainstormingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrainstormingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brainstorming model
   */
  readonly fields: BrainstormingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brainstorming.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrainstormingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projetos<T extends Brainstorming$projetosArgs<ExtArgs> = {}>(args?: Subset<T, Brainstorming$projetosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brainstorming model
   */
  interface BrainstormingFieldRefs {
    readonly id: FieldRef<"Brainstorming", 'String'>
    readonly criadorId: FieldRef<"Brainstorming", 'String'>
    readonly titulo: FieldRef<"Brainstorming", 'String'>
    readonly projetoRelacionado: FieldRef<"Brainstorming", 'String'>
    readonly data: FieldRef<"Brainstorming", 'String'>
    readonly horario: FieldRef<"Brainstorming", 'String'>
    readonly historiasUsuario: FieldRef<"Brainstorming", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brainstorming findUnique
   */
  export type BrainstormingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingInclude<ExtArgs> | null
    /**
     * Filter, which Brainstorming to fetch.
     */
    where: BrainstormingWhereUniqueInput
  }

  /**
   * Brainstorming findUniqueOrThrow
   */
  export type BrainstormingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingInclude<ExtArgs> | null
    /**
     * Filter, which Brainstorming to fetch.
     */
    where: BrainstormingWhereUniqueInput
  }

  /**
   * Brainstorming findFirst
   */
  export type BrainstormingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingInclude<ExtArgs> | null
    /**
     * Filter, which Brainstorming to fetch.
     */
    where?: BrainstormingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brainstormings to fetch.
     */
    orderBy?: BrainstormingOrderByWithRelationInput | BrainstormingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brainstormings.
     */
    cursor?: BrainstormingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brainstormings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brainstormings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brainstormings.
     */
    distinct?: BrainstormingScalarFieldEnum | BrainstormingScalarFieldEnum[]
  }

  /**
   * Brainstorming findFirstOrThrow
   */
  export type BrainstormingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingInclude<ExtArgs> | null
    /**
     * Filter, which Brainstorming to fetch.
     */
    where?: BrainstormingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brainstormings to fetch.
     */
    orderBy?: BrainstormingOrderByWithRelationInput | BrainstormingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brainstormings.
     */
    cursor?: BrainstormingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brainstormings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brainstormings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brainstormings.
     */
    distinct?: BrainstormingScalarFieldEnum | BrainstormingScalarFieldEnum[]
  }

  /**
   * Brainstorming findMany
   */
  export type BrainstormingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingInclude<ExtArgs> | null
    /**
     * Filter, which Brainstormings to fetch.
     */
    where?: BrainstormingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brainstormings to fetch.
     */
    orderBy?: BrainstormingOrderByWithRelationInput | BrainstormingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brainstormings.
     */
    cursor?: BrainstormingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brainstormings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brainstormings.
     */
    skip?: number
    distinct?: BrainstormingScalarFieldEnum | BrainstormingScalarFieldEnum[]
  }

  /**
   * Brainstorming create
   */
  export type BrainstormingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingInclude<ExtArgs> | null
    /**
     * The data needed to create a Brainstorming.
     */
    data: XOR<BrainstormingCreateInput, BrainstormingUncheckedCreateInput>
  }

  /**
   * Brainstorming createMany
   */
  export type BrainstormingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brainstormings.
     */
    data: BrainstormingCreateManyInput | BrainstormingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brainstorming createManyAndReturn
   */
  export type BrainstormingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * The data used to create many Brainstormings.
     */
    data: BrainstormingCreateManyInput | BrainstormingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brainstorming update
   */
  export type BrainstormingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingInclude<ExtArgs> | null
    /**
     * The data needed to update a Brainstorming.
     */
    data: XOR<BrainstormingUpdateInput, BrainstormingUncheckedUpdateInput>
    /**
     * Choose, which Brainstorming to update.
     */
    where: BrainstormingWhereUniqueInput
  }

  /**
   * Brainstorming updateMany
   */
  export type BrainstormingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brainstormings.
     */
    data: XOR<BrainstormingUpdateManyMutationInput, BrainstormingUncheckedUpdateManyInput>
    /**
     * Filter which Brainstormings to update
     */
    where?: BrainstormingWhereInput
    /**
     * Limit how many Brainstormings to update.
     */
    limit?: number
  }

  /**
   * Brainstorming updateManyAndReturn
   */
  export type BrainstormingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * The data used to update Brainstormings.
     */
    data: XOR<BrainstormingUpdateManyMutationInput, BrainstormingUncheckedUpdateManyInput>
    /**
     * Filter which Brainstormings to update
     */
    where?: BrainstormingWhereInput
    /**
     * Limit how many Brainstormings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brainstorming upsert
   */
  export type BrainstormingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingInclude<ExtArgs> | null
    /**
     * The filter to search for the Brainstorming to update in case it exists.
     */
    where: BrainstormingWhereUniqueInput
    /**
     * In case the Brainstorming found by the `where` argument doesn't exist, create a new Brainstorming with this data.
     */
    create: XOR<BrainstormingCreateInput, BrainstormingUncheckedCreateInput>
    /**
     * In case the Brainstorming was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrainstormingUpdateInput, BrainstormingUncheckedUpdateInput>
  }

  /**
   * Brainstorming delete
   */
  export type BrainstormingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingInclude<ExtArgs> | null
    /**
     * Filter which Brainstorming to delete.
     */
    where: BrainstormingWhereUniqueInput
  }

  /**
   * Brainstorming deleteMany
   */
  export type BrainstormingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brainstormings to delete
     */
    where?: BrainstormingWhereInput
    /**
     * Limit how many Brainstormings to delete.
     */
    limit?: number
  }

  /**
   * Brainstorming.projetos
   */
  export type Brainstorming$projetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
    where?: BrainstormingProjetoWhereInput
    orderBy?: BrainstormingProjetoOrderByWithRelationInput | BrainstormingProjetoOrderByWithRelationInput[]
    cursor?: BrainstormingProjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrainstormingProjetoScalarFieldEnum | BrainstormingProjetoScalarFieldEnum[]
  }

  /**
   * Brainstorming without action
   */
  export type BrainstormingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brainstorming
     */
    select?: BrainstormingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brainstorming
     */
    omit?: BrainstormingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingInclude<ExtArgs> | null
  }


  /**
   * Model ProjetoUsuario
   */

  export type AggregateProjetoUsuario = {
    _count: ProjetoUsuarioCountAggregateOutputType | null
    _min: ProjetoUsuarioMinAggregateOutputType | null
    _max: ProjetoUsuarioMaxAggregateOutputType | null
  }

  export type ProjetoUsuarioMinAggregateOutputType = {
    id: string | null
    projetoId: string | null
    membroId: string | null
    nomeMembro: string | null
    emailMembro: string | null
    papelNoProjeto: $Enums.PapelProjeto | null
  }

  export type ProjetoUsuarioMaxAggregateOutputType = {
    id: string | null
    projetoId: string | null
    membroId: string | null
    nomeMembro: string | null
    emailMembro: string | null
    papelNoProjeto: $Enums.PapelProjeto | null
  }

  export type ProjetoUsuarioCountAggregateOutputType = {
    id: number
    projetoId: number
    membroId: number
    nomeMembro: number
    emailMembro: number
    papelNoProjeto: number
    _all: number
  }


  export type ProjetoUsuarioMinAggregateInputType = {
    id?: true
    projetoId?: true
    membroId?: true
    nomeMembro?: true
    emailMembro?: true
    papelNoProjeto?: true
  }

  export type ProjetoUsuarioMaxAggregateInputType = {
    id?: true
    projetoId?: true
    membroId?: true
    nomeMembro?: true
    emailMembro?: true
    papelNoProjeto?: true
  }

  export type ProjetoUsuarioCountAggregateInputType = {
    id?: true
    projetoId?: true
    membroId?: true
    nomeMembro?: true
    emailMembro?: true
    papelNoProjeto?: true
    _all?: true
  }

  export type ProjetoUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjetoUsuario to aggregate.
     */
    where?: ProjetoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjetoUsuarios to fetch.
     */
    orderBy?: ProjetoUsuarioOrderByWithRelationInput | ProjetoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjetoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjetoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjetoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjetoUsuarios
    **/
    _count?: true | ProjetoUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjetoUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjetoUsuarioMaxAggregateInputType
  }

  export type GetProjetoUsuarioAggregateType<T extends ProjetoUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateProjetoUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjetoUsuario[P]>
      : GetScalarType<T[P], AggregateProjetoUsuario[P]>
  }




  export type ProjetoUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoUsuarioWhereInput
    orderBy?: ProjetoUsuarioOrderByWithAggregationInput | ProjetoUsuarioOrderByWithAggregationInput[]
    by: ProjetoUsuarioScalarFieldEnum[] | ProjetoUsuarioScalarFieldEnum
    having?: ProjetoUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjetoUsuarioCountAggregateInputType | true
    _min?: ProjetoUsuarioMinAggregateInputType
    _max?: ProjetoUsuarioMaxAggregateInputType
  }

  export type ProjetoUsuarioGroupByOutputType = {
    id: string
    projetoId: string
    membroId: string
    nomeMembro: string
    emailMembro: string
    papelNoProjeto: $Enums.PapelProjeto
    _count: ProjetoUsuarioCountAggregateOutputType | null
    _min: ProjetoUsuarioMinAggregateOutputType | null
    _max: ProjetoUsuarioMaxAggregateOutputType | null
  }

  type GetProjetoUsuarioGroupByPayload<T extends ProjetoUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjetoUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjetoUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjetoUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], ProjetoUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type ProjetoUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projetoId?: boolean
    membroId?: boolean
    nomeMembro?: boolean
    emailMembro?: boolean
    papelNoProjeto?: boolean
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    membro?: boolean | UsuarioDefaultArgs<ExtArgs>
    membroPorEmail?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projetoUsuario"]>

  export type ProjetoUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projetoId?: boolean
    membroId?: boolean
    nomeMembro?: boolean
    emailMembro?: boolean
    papelNoProjeto?: boolean
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    membro?: boolean | UsuarioDefaultArgs<ExtArgs>
    membroPorEmail?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projetoUsuario"]>

  export type ProjetoUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projetoId?: boolean
    membroId?: boolean
    nomeMembro?: boolean
    emailMembro?: boolean
    papelNoProjeto?: boolean
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    membro?: boolean | UsuarioDefaultArgs<ExtArgs>
    membroPorEmail?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projetoUsuario"]>

  export type ProjetoUsuarioSelectScalar = {
    id?: boolean
    projetoId?: boolean
    membroId?: boolean
    nomeMembro?: boolean
    emailMembro?: boolean
    papelNoProjeto?: boolean
  }

  export type ProjetoUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projetoId" | "membroId" | "nomeMembro" | "emailMembro" | "papelNoProjeto", ExtArgs["result"]["projetoUsuario"]>
  export type ProjetoUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    membro?: boolean | UsuarioDefaultArgs<ExtArgs>
    membroPorEmail?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ProjetoUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    membro?: boolean | UsuarioDefaultArgs<ExtArgs>
    membroPorEmail?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ProjetoUsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    membro?: boolean | UsuarioDefaultArgs<ExtArgs>
    membroPorEmail?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ProjetoUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjetoUsuario"
    objects: {
      projeto: Prisma.$ProjetoPayload<ExtArgs>
      /**
       * @Zod.Omit(input: true)
       */
      membro: Prisma.$UsuarioPayload<ExtArgs>
      /**
       * @Zod.Omit(input: true)
       */
      membroPorEmail: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projetoId: string
      membroId: string
      nomeMembro: string
      emailMembro: string
      papelNoProjeto: $Enums.PapelProjeto
    }, ExtArgs["result"]["projetoUsuario"]>
    composites: {}
  }

  type ProjetoUsuarioGetPayload<S extends boolean | null | undefined | ProjetoUsuarioDefaultArgs> = $Result.GetResult<Prisma.$ProjetoUsuarioPayload, S>

  type ProjetoUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjetoUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjetoUsuarioCountAggregateInputType | true
    }

  export interface ProjetoUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjetoUsuario'], meta: { name: 'ProjetoUsuario' } }
    /**
     * Find zero or one ProjetoUsuario that matches the filter.
     * @param {ProjetoUsuarioFindUniqueArgs} args - Arguments to find a ProjetoUsuario
     * @example
     * // Get one ProjetoUsuario
     * const projetoUsuario = await prisma.projetoUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjetoUsuarioFindUniqueArgs>(args: SelectSubset<T, ProjetoUsuarioFindUniqueArgs<ExtArgs>>): Prisma__ProjetoUsuarioClient<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjetoUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjetoUsuarioFindUniqueOrThrowArgs} args - Arguments to find a ProjetoUsuario
     * @example
     * // Get one ProjetoUsuario
     * const projetoUsuario = await prisma.projetoUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjetoUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjetoUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjetoUsuarioClient<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjetoUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUsuarioFindFirstArgs} args - Arguments to find a ProjetoUsuario
     * @example
     * // Get one ProjetoUsuario
     * const projetoUsuario = await prisma.projetoUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjetoUsuarioFindFirstArgs>(args?: SelectSubset<T, ProjetoUsuarioFindFirstArgs<ExtArgs>>): Prisma__ProjetoUsuarioClient<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjetoUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUsuarioFindFirstOrThrowArgs} args - Arguments to find a ProjetoUsuario
     * @example
     * // Get one ProjetoUsuario
     * const projetoUsuario = await prisma.projetoUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjetoUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjetoUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjetoUsuarioClient<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjetoUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjetoUsuarios
     * const projetoUsuarios = await prisma.projetoUsuario.findMany()
     * 
     * // Get first 10 ProjetoUsuarios
     * const projetoUsuarios = await prisma.projetoUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projetoUsuarioWithIdOnly = await prisma.projetoUsuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjetoUsuarioFindManyArgs>(args?: SelectSubset<T, ProjetoUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjetoUsuario.
     * @param {ProjetoUsuarioCreateArgs} args - Arguments to create a ProjetoUsuario.
     * @example
     * // Create one ProjetoUsuario
     * const ProjetoUsuario = await prisma.projetoUsuario.create({
     *   data: {
     *     // ... data to create a ProjetoUsuario
     *   }
     * })
     * 
     */
    create<T extends ProjetoUsuarioCreateArgs>(args: SelectSubset<T, ProjetoUsuarioCreateArgs<ExtArgs>>): Prisma__ProjetoUsuarioClient<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjetoUsuarios.
     * @param {ProjetoUsuarioCreateManyArgs} args - Arguments to create many ProjetoUsuarios.
     * @example
     * // Create many ProjetoUsuarios
     * const projetoUsuario = await prisma.projetoUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjetoUsuarioCreateManyArgs>(args?: SelectSubset<T, ProjetoUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjetoUsuarios and returns the data saved in the database.
     * @param {ProjetoUsuarioCreateManyAndReturnArgs} args - Arguments to create many ProjetoUsuarios.
     * @example
     * // Create many ProjetoUsuarios
     * const projetoUsuario = await prisma.projetoUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjetoUsuarios and only return the `id`
     * const projetoUsuarioWithIdOnly = await prisma.projetoUsuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjetoUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjetoUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjetoUsuario.
     * @param {ProjetoUsuarioDeleteArgs} args - Arguments to delete one ProjetoUsuario.
     * @example
     * // Delete one ProjetoUsuario
     * const ProjetoUsuario = await prisma.projetoUsuario.delete({
     *   where: {
     *     // ... filter to delete one ProjetoUsuario
     *   }
     * })
     * 
     */
    delete<T extends ProjetoUsuarioDeleteArgs>(args: SelectSubset<T, ProjetoUsuarioDeleteArgs<ExtArgs>>): Prisma__ProjetoUsuarioClient<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjetoUsuario.
     * @param {ProjetoUsuarioUpdateArgs} args - Arguments to update one ProjetoUsuario.
     * @example
     * // Update one ProjetoUsuario
     * const projetoUsuario = await prisma.projetoUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjetoUsuarioUpdateArgs>(args: SelectSubset<T, ProjetoUsuarioUpdateArgs<ExtArgs>>): Prisma__ProjetoUsuarioClient<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjetoUsuarios.
     * @param {ProjetoUsuarioDeleteManyArgs} args - Arguments to filter ProjetoUsuarios to delete.
     * @example
     * // Delete a few ProjetoUsuarios
     * const { count } = await prisma.projetoUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjetoUsuarioDeleteManyArgs>(args?: SelectSubset<T, ProjetoUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjetoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjetoUsuarios
     * const projetoUsuario = await prisma.projetoUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjetoUsuarioUpdateManyArgs>(args: SelectSubset<T, ProjetoUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjetoUsuarios and returns the data updated in the database.
     * @param {ProjetoUsuarioUpdateManyAndReturnArgs} args - Arguments to update many ProjetoUsuarios.
     * @example
     * // Update many ProjetoUsuarios
     * const projetoUsuario = await prisma.projetoUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjetoUsuarios and only return the `id`
     * const projetoUsuarioWithIdOnly = await prisma.projetoUsuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjetoUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjetoUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjetoUsuario.
     * @param {ProjetoUsuarioUpsertArgs} args - Arguments to update or create a ProjetoUsuario.
     * @example
     * // Update or create a ProjetoUsuario
     * const projetoUsuario = await prisma.projetoUsuario.upsert({
     *   create: {
     *     // ... data to create a ProjetoUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjetoUsuario we want to update
     *   }
     * })
     */
    upsert<T extends ProjetoUsuarioUpsertArgs>(args: SelectSubset<T, ProjetoUsuarioUpsertArgs<ExtArgs>>): Prisma__ProjetoUsuarioClient<$Result.GetResult<Prisma.$ProjetoUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjetoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUsuarioCountArgs} args - Arguments to filter ProjetoUsuarios to count.
     * @example
     * // Count the number of ProjetoUsuarios
     * const count = await prisma.projetoUsuario.count({
     *   where: {
     *     // ... the filter for the ProjetoUsuarios we want to count
     *   }
     * })
    **/
    count<T extends ProjetoUsuarioCountArgs>(
      args?: Subset<T, ProjetoUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjetoUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjetoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjetoUsuarioAggregateArgs>(args: Subset<T, ProjetoUsuarioAggregateArgs>): Prisma.PrismaPromise<GetProjetoUsuarioAggregateType<T>>

    /**
     * Group by ProjetoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUsuarioGroupByArgs} args - Group by arguments.
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
      T extends ProjetoUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjetoUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: ProjetoUsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjetoUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjetoUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjetoUsuario model
   */
  readonly fields: ProjetoUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjetoUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjetoUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projeto<T extends ProjetoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjetoDefaultArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    membro<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    membroPorEmail<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjetoUsuario model
   */
  interface ProjetoUsuarioFieldRefs {
    readonly id: FieldRef<"ProjetoUsuario", 'String'>
    readonly projetoId: FieldRef<"ProjetoUsuario", 'String'>
    readonly membroId: FieldRef<"ProjetoUsuario", 'String'>
    readonly nomeMembro: FieldRef<"ProjetoUsuario", 'String'>
    readonly emailMembro: FieldRef<"ProjetoUsuario", 'String'>
    readonly papelNoProjeto: FieldRef<"ProjetoUsuario", 'PapelProjeto'>
  }
    

  // Custom InputTypes
  /**
   * ProjetoUsuario findUnique
   */
  export type ProjetoUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProjetoUsuario to fetch.
     */
    where: ProjetoUsuarioWhereUniqueInput
  }

  /**
   * ProjetoUsuario findUniqueOrThrow
   */
  export type ProjetoUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProjetoUsuario to fetch.
     */
    where: ProjetoUsuarioWhereUniqueInput
  }

  /**
   * ProjetoUsuario findFirst
   */
  export type ProjetoUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProjetoUsuario to fetch.
     */
    where?: ProjetoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjetoUsuarios to fetch.
     */
    orderBy?: ProjetoUsuarioOrderByWithRelationInput | ProjetoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjetoUsuarios.
     */
    cursor?: ProjetoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjetoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjetoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjetoUsuarios.
     */
    distinct?: ProjetoUsuarioScalarFieldEnum | ProjetoUsuarioScalarFieldEnum[]
  }

  /**
   * ProjetoUsuario findFirstOrThrow
   */
  export type ProjetoUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProjetoUsuario to fetch.
     */
    where?: ProjetoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjetoUsuarios to fetch.
     */
    orderBy?: ProjetoUsuarioOrderByWithRelationInput | ProjetoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjetoUsuarios.
     */
    cursor?: ProjetoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjetoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjetoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjetoUsuarios.
     */
    distinct?: ProjetoUsuarioScalarFieldEnum | ProjetoUsuarioScalarFieldEnum[]
  }

  /**
   * ProjetoUsuario findMany
   */
  export type ProjetoUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProjetoUsuarios to fetch.
     */
    where?: ProjetoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjetoUsuarios to fetch.
     */
    orderBy?: ProjetoUsuarioOrderByWithRelationInput | ProjetoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjetoUsuarios.
     */
    cursor?: ProjetoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjetoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjetoUsuarios.
     */
    skip?: number
    distinct?: ProjetoUsuarioScalarFieldEnum | ProjetoUsuarioScalarFieldEnum[]
  }

  /**
   * ProjetoUsuario create
   */
  export type ProjetoUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjetoUsuario.
     */
    data: XOR<ProjetoUsuarioCreateInput, ProjetoUsuarioUncheckedCreateInput>
  }

  /**
   * ProjetoUsuario createMany
   */
  export type ProjetoUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjetoUsuarios.
     */
    data: ProjetoUsuarioCreateManyInput | ProjetoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjetoUsuario createManyAndReturn
   */
  export type ProjetoUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many ProjetoUsuarios.
     */
    data: ProjetoUsuarioCreateManyInput | ProjetoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjetoUsuario update
   */
  export type ProjetoUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjetoUsuario.
     */
    data: XOR<ProjetoUsuarioUpdateInput, ProjetoUsuarioUncheckedUpdateInput>
    /**
     * Choose, which ProjetoUsuario to update.
     */
    where: ProjetoUsuarioWhereUniqueInput
  }

  /**
   * ProjetoUsuario updateMany
   */
  export type ProjetoUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjetoUsuarios.
     */
    data: XOR<ProjetoUsuarioUpdateManyMutationInput, ProjetoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which ProjetoUsuarios to update
     */
    where?: ProjetoUsuarioWhereInput
    /**
     * Limit how many ProjetoUsuarios to update.
     */
    limit?: number
  }

  /**
   * ProjetoUsuario updateManyAndReturn
   */
  export type ProjetoUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update ProjetoUsuarios.
     */
    data: XOR<ProjetoUsuarioUpdateManyMutationInput, ProjetoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which ProjetoUsuarios to update
     */
    where?: ProjetoUsuarioWhereInput
    /**
     * Limit how many ProjetoUsuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjetoUsuario upsert
   */
  export type ProjetoUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjetoUsuario to update in case it exists.
     */
    where: ProjetoUsuarioWhereUniqueInput
    /**
     * In case the ProjetoUsuario found by the `where` argument doesn't exist, create a new ProjetoUsuario with this data.
     */
    create: XOR<ProjetoUsuarioCreateInput, ProjetoUsuarioUncheckedCreateInput>
    /**
     * In case the ProjetoUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjetoUsuarioUpdateInput, ProjetoUsuarioUncheckedUpdateInput>
  }

  /**
   * ProjetoUsuario delete
   */
  export type ProjetoUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
    /**
     * Filter which ProjetoUsuario to delete.
     */
    where: ProjetoUsuarioWhereUniqueInput
  }

  /**
   * ProjetoUsuario deleteMany
   */
  export type ProjetoUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjetoUsuarios to delete
     */
    where?: ProjetoUsuarioWhereInput
    /**
     * Limit how many ProjetoUsuarios to delete.
     */
    limit?: number
  }

  /**
   * ProjetoUsuario without action
   */
  export type ProjetoUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoUsuario
     */
    select?: ProjetoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjetoUsuario
     */
    omit?: ProjetoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoUsuarioInclude<ExtArgs> | null
  }


  /**
   * Model BrainstormingProjeto
   */

  export type AggregateBrainstormingProjeto = {
    _count: BrainstormingProjetoCountAggregateOutputType | null
    _min: BrainstormingProjetoMinAggregateOutputType | null
    _max: BrainstormingProjetoMaxAggregateOutputType | null
  }

  export type BrainstormingProjetoMinAggregateOutputType = {
    projetoId: string | null
    brainstormingId: string | null
  }

  export type BrainstormingProjetoMaxAggregateOutputType = {
    projetoId: string | null
    brainstormingId: string | null
  }

  export type BrainstormingProjetoCountAggregateOutputType = {
    projetoId: number
    brainstormingId: number
    _all: number
  }


  export type BrainstormingProjetoMinAggregateInputType = {
    projetoId?: true
    brainstormingId?: true
  }

  export type BrainstormingProjetoMaxAggregateInputType = {
    projetoId?: true
    brainstormingId?: true
  }

  export type BrainstormingProjetoCountAggregateInputType = {
    projetoId?: true
    brainstormingId?: true
    _all?: true
  }

  export type BrainstormingProjetoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrainstormingProjeto to aggregate.
     */
    where?: BrainstormingProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrainstormingProjetos to fetch.
     */
    orderBy?: BrainstormingProjetoOrderByWithRelationInput | BrainstormingProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrainstormingProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrainstormingProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrainstormingProjetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrainstormingProjetos
    **/
    _count?: true | BrainstormingProjetoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrainstormingProjetoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrainstormingProjetoMaxAggregateInputType
  }

  export type GetBrainstormingProjetoAggregateType<T extends BrainstormingProjetoAggregateArgs> = {
        [P in keyof T & keyof AggregateBrainstormingProjeto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrainstormingProjeto[P]>
      : GetScalarType<T[P], AggregateBrainstormingProjeto[P]>
  }




  export type BrainstormingProjetoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrainstormingProjetoWhereInput
    orderBy?: BrainstormingProjetoOrderByWithAggregationInput | BrainstormingProjetoOrderByWithAggregationInput[]
    by: BrainstormingProjetoScalarFieldEnum[] | BrainstormingProjetoScalarFieldEnum
    having?: BrainstormingProjetoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrainstormingProjetoCountAggregateInputType | true
    _min?: BrainstormingProjetoMinAggregateInputType
    _max?: BrainstormingProjetoMaxAggregateInputType
  }

  export type BrainstormingProjetoGroupByOutputType = {
    projetoId: string
    brainstormingId: string
    _count: BrainstormingProjetoCountAggregateOutputType | null
    _min: BrainstormingProjetoMinAggregateOutputType | null
    _max: BrainstormingProjetoMaxAggregateOutputType | null
  }

  type GetBrainstormingProjetoGroupByPayload<T extends BrainstormingProjetoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrainstormingProjetoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrainstormingProjetoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrainstormingProjetoGroupByOutputType[P]>
            : GetScalarType<T[P], BrainstormingProjetoGroupByOutputType[P]>
        }
      >
    >


  export type BrainstormingProjetoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projetoId?: boolean
    brainstormingId?: boolean
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    brainstorming?: boolean | BrainstormingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brainstormingProjeto"]>

  export type BrainstormingProjetoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projetoId?: boolean
    brainstormingId?: boolean
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    brainstorming?: boolean | BrainstormingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brainstormingProjeto"]>

  export type BrainstormingProjetoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projetoId?: boolean
    brainstormingId?: boolean
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    brainstorming?: boolean | BrainstormingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brainstormingProjeto"]>

  export type BrainstormingProjetoSelectScalar = {
    projetoId?: boolean
    brainstormingId?: boolean
  }

  export type BrainstormingProjetoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projetoId" | "brainstormingId", ExtArgs["result"]["brainstormingProjeto"]>
  export type BrainstormingProjetoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    brainstorming?: boolean | BrainstormingDefaultArgs<ExtArgs>
  }
  export type BrainstormingProjetoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    brainstorming?: boolean | BrainstormingDefaultArgs<ExtArgs>
  }
  export type BrainstormingProjetoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
    brainstorming?: boolean | BrainstormingDefaultArgs<ExtArgs>
  }

  export type $BrainstormingProjetoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrainstormingProjeto"
    objects: {
      /**
       * @Zod.Omit(input: true)
       */
      projeto: Prisma.$ProjetoPayload<ExtArgs>
      /**
       * @Zod.Omit(input: true)
       */
      brainstorming: Prisma.$BrainstormingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projetoId: string
      brainstormingId: string
    }, ExtArgs["result"]["brainstormingProjeto"]>
    composites: {}
  }

  type BrainstormingProjetoGetPayload<S extends boolean | null | undefined | BrainstormingProjetoDefaultArgs> = $Result.GetResult<Prisma.$BrainstormingProjetoPayload, S>

  type BrainstormingProjetoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrainstormingProjetoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrainstormingProjetoCountAggregateInputType | true
    }

  export interface BrainstormingProjetoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrainstormingProjeto'], meta: { name: 'BrainstormingProjeto' } }
    /**
     * Find zero or one BrainstormingProjeto that matches the filter.
     * @param {BrainstormingProjetoFindUniqueArgs} args - Arguments to find a BrainstormingProjeto
     * @example
     * // Get one BrainstormingProjeto
     * const brainstormingProjeto = await prisma.brainstormingProjeto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrainstormingProjetoFindUniqueArgs>(args: SelectSubset<T, BrainstormingProjetoFindUniqueArgs<ExtArgs>>): Prisma__BrainstormingProjetoClient<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BrainstormingProjeto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrainstormingProjetoFindUniqueOrThrowArgs} args - Arguments to find a BrainstormingProjeto
     * @example
     * // Get one BrainstormingProjeto
     * const brainstormingProjeto = await prisma.brainstormingProjeto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrainstormingProjetoFindUniqueOrThrowArgs>(args: SelectSubset<T, BrainstormingProjetoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrainstormingProjetoClient<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrainstormingProjeto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingProjetoFindFirstArgs} args - Arguments to find a BrainstormingProjeto
     * @example
     * // Get one BrainstormingProjeto
     * const brainstormingProjeto = await prisma.brainstormingProjeto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrainstormingProjetoFindFirstArgs>(args?: SelectSubset<T, BrainstormingProjetoFindFirstArgs<ExtArgs>>): Prisma__BrainstormingProjetoClient<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrainstormingProjeto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingProjetoFindFirstOrThrowArgs} args - Arguments to find a BrainstormingProjeto
     * @example
     * // Get one BrainstormingProjeto
     * const brainstormingProjeto = await prisma.brainstormingProjeto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrainstormingProjetoFindFirstOrThrowArgs>(args?: SelectSubset<T, BrainstormingProjetoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrainstormingProjetoClient<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrainstormingProjetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingProjetoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrainstormingProjetos
     * const brainstormingProjetos = await prisma.brainstormingProjeto.findMany()
     * 
     * // Get first 10 BrainstormingProjetos
     * const brainstormingProjetos = await prisma.brainstormingProjeto.findMany({ take: 10 })
     * 
     * // Only select the `projetoId`
     * const brainstormingProjetoWithProjetoIdOnly = await prisma.brainstormingProjeto.findMany({ select: { projetoId: true } })
     * 
     */
    findMany<T extends BrainstormingProjetoFindManyArgs>(args?: SelectSubset<T, BrainstormingProjetoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BrainstormingProjeto.
     * @param {BrainstormingProjetoCreateArgs} args - Arguments to create a BrainstormingProjeto.
     * @example
     * // Create one BrainstormingProjeto
     * const BrainstormingProjeto = await prisma.brainstormingProjeto.create({
     *   data: {
     *     // ... data to create a BrainstormingProjeto
     *   }
     * })
     * 
     */
    create<T extends BrainstormingProjetoCreateArgs>(args: SelectSubset<T, BrainstormingProjetoCreateArgs<ExtArgs>>): Prisma__BrainstormingProjetoClient<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BrainstormingProjetos.
     * @param {BrainstormingProjetoCreateManyArgs} args - Arguments to create many BrainstormingProjetos.
     * @example
     * // Create many BrainstormingProjetos
     * const brainstormingProjeto = await prisma.brainstormingProjeto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrainstormingProjetoCreateManyArgs>(args?: SelectSubset<T, BrainstormingProjetoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BrainstormingProjetos and returns the data saved in the database.
     * @param {BrainstormingProjetoCreateManyAndReturnArgs} args - Arguments to create many BrainstormingProjetos.
     * @example
     * // Create many BrainstormingProjetos
     * const brainstormingProjeto = await prisma.brainstormingProjeto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BrainstormingProjetos and only return the `projetoId`
     * const brainstormingProjetoWithProjetoIdOnly = await prisma.brainstormingProjeto.createManyAndReturn({
     *   select: { projetoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrainstormingProjetoCreateManyAndReturnArgs>(args?: SelectSubset<T, BrainstormingProjetoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BrainstormingProjeto.
     * @param {BrainstormingProjetoDeleteArgs} args - Arguments to delete one BrainstormingProjeto.
     * @example
     * // Delete one BrainstormingProjeto
     * const BrainstormingProjeto = await prisma.brainstormingProjeto.delete({
     *   where: {
     *     // ... filter to delete one BrainstormingProjeto
     *   }
     * })
     * 
     */
    delete<T extends BrainstormingProjetoDeleteArgs>(args: SelectSubset<T, BrainstormingProjetoDeleteArgs<ExtArgs>>): Prisma__BrainstormingProjetoClient<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BrainstormingProjeto.
     * @param {BrainstormingProjetoUpdateArgs} args - Arguments to update one BrainstormingProjeto.
     * @example
     * // Update one BrainstormingProjeto
     * const brainstormingProjeto = await prisma.brainstormingProjeto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrainstormingProjetoUpdateArgs>(args: SelectSubset<T, BrainstormingProjetoUpdateArgs<ExtArgs>>): Prisma__BrainstormingProjetoClient<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BrainstormingProjetos.
     * @param {BrainstormingProjetoDeleteManyArgs} args - Arguments to filter BrainstormingProjetos to delete.
     * @example
     * // Delete a few BrainstormingProjetos
     * const { count } = await prisma.brainstormingProjeto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrainstormingProjetoDeleteManyArgs>(args?: SelectSubset<T, BrainstormingProjetoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrainstormingProjetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingProjetoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrainstormingProjetos
     * const brainstormingProjeto = await prisma.brainstormingProjeto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrainstormingProjetoUpdateManyArgs>(args: SelectSubset<T, BrainstormingProjetoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrainstormingProjetos and returns the data updated in the database.
     * @param {BrainstormingProjetoUpdateManyAndReturnArgs} args - Arguments to update many BrainstormingProjetos.
     * @example
     * // Update many BrainstormingProjetos
     * const brainstormingProjeto = await prisma.brainstormingProjeto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BrainstormingProjetos and only return the `projetoId`
     * const brainstormingProjetoWithProjetoIdOnly = await prisma.brainstormingProjeto.updateManyAndReturn({
     *   select: { projetoId: true },
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
    updateManyAndReturn<T extends BrainstormingProjetoUpdateManyAndReturnArgs>(args: SelectSubset<T, BrainstormingProjetoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BrainstormingProjeto.
     * @param {BrainstormingProjetoUpsertArgs} args - Arguments to update or create a BrainstormingProjeto.
     * @example
     * // Update or create a BrainstormingProjeto
     * const brainstormingProjeto = await prisma.brainstormingProjeto.upsert({
     *   create: {
     *     // ... data to create a BrainstormingProjeto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrainstormingProjeto we want to update
     *   }
     * })
     */
    upsert<T extends BrainstormingProjetoUpsertArgs>(args: SelectSubset<T, BrainstormingProjetoUpsertArgs<ExtArgs>>): Prisma__BrainstormingProjetoClient<$Result.GetResult<Prisma.$BrainstormingProjetoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BrainstormingProjetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingProjetoCountArgs} args - Arguments to filter BrainstormingProjetos to count.
     * @example
     * // Count the number of BrainstormingProjetos
     * const count = await prisma.brainstormingProjeto.count({
     *   where: {
     *     // ... the filter for the BrainstormingProjetos we want to count
     *   }
     * })
    **/
    count<T extends BrainstormingProjetoCountArgs>(
      args?: Subset<T, BrainstormingProjetoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrainstormingProjetoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrainstormingProjeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingProjetoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrainstormingProjetoAggregateArgs>(args: Subset<T, BrainstormingProjetoAggregateArgs>): Prisma.PrismaPromise<GetBrainstormingProjetoAggregateType<T>>

    /**
     * Group by BrainstormingProjeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrainstormingProjetoGroupByArgs} args - Group by arguments.
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
      T extends BrainstormingProjetoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrainstormingProjetoGroupByArgs['orderBy'] }
        : { orderBy?: BrainstormingProjetoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrainstormingProjetoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrainstormingProjetoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrainstormingProjeto model
   */
  readonly fields: BrainstormingProjetoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrainstormingProjeto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrainstormingProjetoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projeto<T extends ProjetoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjetoDefaultArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brainstorming<T extends BrainstormingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrainstormingDefaultArgs<ExtArgs>>): Prisma__BrainstormingClient<$Result.GetResult<Prisma.$BrainstormingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BrainstormingProjeto model
   */
  interface BrainstormingProjetoFieldRefs {
    readonly projetoId: FieldRef<"BrainstormingProjeto", 'String'>
    readonly brainstormingId: FieldRef<"BrainstormingProjeto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BrainstormingProjeto findUnique
   */
  export type BrainstormingProjetoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
    /**
     * Filter, which BrainstormingProjeto to fetch.
     */
    where: BrainstormingProjetoWhereUniqueInput
  }

  /**
   * BrainstormingProjeto findUniqueOrThrow
   */
  export type BrainstormingProjetoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
    /**
     * Filter, which BrainstormingProjeto to fetch.
     */
    where: BrainstormingProjetoWhereUniqueInput
  }

  /**
   * BrainstormingProjeto findFirst
   */
  export type BrainstormingProjetoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
    /**
     * Filter, which BrainstormingProjeto to fetch.
     */
    where?: BrainstormingProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrainstormingProjetos to fetch.
     */
    orderBy?: BrainstormingProjetoOrderByWithRelationInput | BrainstormingProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrainstormingProjetos.
     */
    cursor?: BrainstormingProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrainstormingProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrainstormingProjetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrainstormingProjetos.
     */
    distinct?: BrainstormingProjetoScalarFieldEnum | BrainstormingProjetoScalarFieldEnum[]
  }

  /**
   * BrainstormingProjeto findFirstOrThrow
   */
  export type BrainstormingProjetoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
    /**
     * Filter, which BrainstormingProjeto to fetch.
     */
    where?: BrainstormingProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrainstormingProjetos to fetch.
     */
    orderBy?: BrainstormingProjetoOrderByWithRelationInput | BrainstormingProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrainstormingProjetos.
     */
    cursor?: BrainstormingProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrainstormingProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrainstormingProjetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrainstormingProjetos.
     */
    distinct?: BrainstormingProjetoScalarFieldEnum | BrainstormingProjetoScalarFieldEnum[]
  }

  /**
   * BrainstormingProjeto findMany
   */
  export type BrainstormingProjetoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
    /**
     * Filter, which BrainstormingProjetos to fetch.
     */
    where?: BrainstormingProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrainstormingProjetos to fetch.
     */
    orderBy?: BrainstormingProjetoOrderByWithRelationInput | BrainstormingProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrainstormingProjetos.
     */
    cursor?: BrainstormingProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrainstormingProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrainstormingProjetos.
     */
    skip?: number
    distinct?: BrainstormingProjetoScalarFieldEnum | BrainstormingProjetoScalarFieldEnum[]
  }

  /**
   * BrainstormingProjeto create
   */
  export type BrainstormingProjetoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
    /**
     * The data needed to create a BrainstormingProjeto.
     */
    data: XOR<BrainstormingProjetoCreateInput, BrainstormingProjetoUncheckedCreateInput>
  }

  /**
   * BrainstormingProjeto createMany
   */
  export type BrainstormingProjetoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrainstormingProjetos.
     */
    data: BrainstormingProjetoCreateManyInput | BrainstormingProjetoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BrainstormingProjeto createManyAndReturn
   */
  export type BrainstormingProjetoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * The data used to create many BrainstormingProjetos.
     */
    data: BrainstormingProjetoCreateManyInput | BrainstormingProjetoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrainstormingProjeto update
   */
  export type BrainstormingProjetoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
    /**
     * The data needed to update a BrainstormingProjeto.
     */
    data: XOR<BrainstormingProjetoUpdateInput, BrainstormingProjetoUncheckedUpdateInput>
    /**
     * Choose, which BrainstormingProjeto to update.
     */
    where: BrainstormingProjetoWhereUniqueInput
  }

  /**
   * BrainstormingProjeto updateMany
   */
  export type BrainstormingProjetoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrainstormingProjetos.
     */
    data: XOR<BrainstormingProjetoUpdateManyMutationInput, BrainstormingProjetoUncheckedUpdateManyInput>
    /**
     * Filter which BrainstormingProjetos to update
     */
    where?: BrainstormingProjetoWhereInput
    /**
     * Limit how many BrainstormingProjetos to update.
     */
    limit?: number
  }

  /**
   * BrainstormingProjeto updateManyAndReturn
   */
  export type BrainstormingProjetoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * The data used to update BrainstormingProjetos.
     */
    data: XOR<BrainstormingProjetoUpdateManyMutationInput, BrainstormingProjetoUncheckedUpdateManyInput>
    /**
     * Filter which BrainstormingProjetos to update
     */
    where?: BrainstormingProjetoWhereInput
    /**
     * Limit how many BrainstormingProjetos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrainstormingProjeto upsert
   */
  export type BrainstormingProjetoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
    /**
     * The filter to search for the BrainstormingProjeto to update in case it exists.
     */
    where: BrainstormingProjetoWhereUniqueInput
    /**
     * In case the BrainstormingProjeto found by the `where` argument doesn't exist, create a new BrainstormingProjeto with this data.
     */
    create: XOR<BrainstormingProjetoCreateInput, BrainstormingProjetoUncheckedCreateInput>
    /**
     * In case the BrainstormingProjeto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrainstormingProjetoUpdateInput, BrainstormingProjetoUncheckedUpdateInput>
  }

  /**
   * BrainstormingProjeto delete
   */
  export type BrainstormingProjetoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
    /**
     * Filter which BrainstormingProjeto to delete.
     */
    where: BrainstormingProjetoWhereUniqueInput
  }

  /**
   * BrainstormingProjeto deleteMany
   */
  export type BrainstormingProjetoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrainstormingProjetos to delete
     */
    where?: BrainstormingProjetoWhereInput
    /**
     * Limit how many BrainstormingProjetos to delete.
     */
    limit?: number
  }

  /**
   * BrainstormingProjeto without action
   */
  export type BrainstormingProjetoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrainstormingProjeto
     */
    select?: BrainstormingProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrainstormingProjeto
     */
    omit?: BrainstormingProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrainstormingProjetoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nomeCompleto: 'nomeCompleto',
    email: 'email',
    senha: 'senha',
    genero: 'genero',
    dataNascimento: 'dataNascimento',
    perfil: 'perfil',
    organizacao: 'organizacao',
    tentativasLogin: 'tentativasLogin',
    tentativasExclusao: 'tentativasExclusao',
    bloqueadoAte: 'bloqueadoAte',
    tokenRedefinirSenha: 'tokenRedefinirSenha',
    expiraRedefinirSenha: 'expiraRedefinirSenha'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ProjetoScalarFieldEnum: {
    id: 'id',
    nomeProjeto: 'nomeProjeto',
    descricao: 'descricao',
    criadorId: 'criadorId',
    status: 'status'
  };

  export type ProjetoScalarFieldEnum = (typeof ProjetoScalarFieldEnum)[keyof typeof ProjetoScalarFieldEnum]


  export const BrainstormingScalarFieldEnum: {
    id: 'id',
    criadorId: 'criadorId',
    titulo: 'titulo',
    projetoRelacionado: 'projetoRelacionado',
    data: 'data',
    horario: 'horario',
    historiasUsuario: 'historiasUsuario'
  };

  export type BrainstormingScalarFieldEnum = (typeof BrainstormingScalarFieldEnum)[keyof typeof BrainstormingScalarFieldEnum]


  export const ProjetoUsuarioScalarFieldEnum: {
    id: 'id',
    projetoId: 'projetoId',
    membroId: 'membroId',
    nomeMembro: 'nomeMembro',
    emailMembro: 'emailMembro',
    papelNoProjeto: 'papelNoProjeto'
  };

  export type ProjetoUsuarioScalarFieldEnum = (typeof ProjetoUsuarioScalarFieldEnum)[keyof typeof ProjetoUsuarioScalarFieldEnum]


  export const BrainstormingProjetoScalarFieldEnum: {
    projetoId: 'projetoId',
    brainstormingId: 'brainstormingId'
  };

  export type BrainstormingProjetoScalarFieldEnum = (typeof BrainstormingProjetoScalarFieldEnum)[keyof typeof BrainstormingProjetoScalarFieldEnum]


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
   * Reference to a field of type 'Genero'
   */
  export type EnumGeneroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genero'>
    


  /**
   * Reference to a field of type 'Genero[]'
   */
  export type ListEnumGeneroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genero[]'>
    


  /**
   * Reference to a field of type 'Perfil'
   */
  export type EnumPerfilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Perfil'>
    


  /**
   * Reference to a field of type 'Perfil[]'
   */
  export type ListEnumPerfilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Perfil[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusProjeto'
   */
  export type EnumStatusProjetoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusProjeto'>
    


  /**
   * Reference to a field of type 'StatusProjeto[]'
   */
  export type ListEnumStatusProjetoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusProjeto[]'>
    


  /**
   * Reference to a field of type 'PapelProjeto'
   */
  export type EnumPapelProjetoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PapelProjeto'>
    


  /**
   * Reference to a field of type 'PapelProjeto[]'
   */
  export type ListEnumPapelProjetoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PapelProjeto[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nomeCompleto?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    genero?: EnumGeneroFilter<"Usuario"> | $Enums.Genero
    dataNascimento?: StringFilter<"Usuario"> | string
    perfil?: EnumPerfilFilter<"Usuario"> | $Enums.Perfil
    organizacao?: StringFilter<"Usuario"> | string
    tentativasLogin?: IntFilter<"Usuario"> | number
    tentativasExclusao?: IntFilter<"Usuario"> | number
    bloqueadoAte?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    tokenRedefinirSenha?: StringNullableFilter<"Usuario"> | string | null
    expiraRedefinirSenha?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    projetosCriados?: ProjetoListRelationFilter
    brainstormingsCriados?: BrainstormingListRelationFilter
    participacoesProjeto?: ProjetoUsuarioListRelationFilter
    participacoesPorEmail?: ProjetoUsuarioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    genero?: SortOrder
    dataNascimento?: SortOrder
    perfil?: SortOrder
    organizacao?: SortOrder
    tentativasLogin?: SortOrder
    tentativasExclusao?: SortOrder
    bloqueadoAte?: SortOrderInput | SortOrder
    tokenRedefinirSenha?: SortOrderInput | SortOrder
    expiraRedefinirSenha?: SortOrderInput | SortOrder
    projetosCriados?: ProjetoOrderByRelationAggregateInput
    brainstormingsCriados?: BrainstormingOrderByRelationAggregateInput
    participacoesProjeto?: ProjetoUsuarioOrderByRelationAggregateInput
    participacoesPorEmail?: ProjetoUsuarioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nomeCompleto?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    genero?: EnumGeneroFilter<"Usuario"> | $Enums.Genero
    dataNascimento?: StringFilter<"Usuario"> | string
    perfil?: EnumPerfilFilter<"Usuario"> | $Enums.Perfil
    organizacao?: StringFilter<"Usuario"> | string
    tentativasLogin?: IntFilter<"Usuario"> | number
    tentativasExclusao?: IntFilter<"Usuario"> | number
    bloqueadoAte?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    tokenRedefinirSenha?: StringNullableFilter<"Usuario"> | string | null
    expiraRedefinirSenha?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    projetosCriados?: ProjetoListRelationFilter
    brainstormingsCriados?: BrainstormingListRelationFilter
    participacoesProjeto?: ProjetoUsuarioListRelationFilter
    participacoesPorEmail?: ProjetoUsuarioListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    genero?: SortOrder
    dataNascimento?: SortOrder
    perfil?: SortOrder
    organizacao?: SortOrder
    tentativasLogin?: SortOrder
    tentativasExclusao?: SortOrder
    bloqueadoAte?: SortOrderInput | SortOrder
    tokenRedefinirSenha?: SortOrderInput | SortOrder
    expiraRedefinirSenha?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nomeCompleto?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    genero?: EnumGeneroWithAggregatesFilter<"Usuario"> | $Enums.Genero
    dataNascimento?: StringWithAggregatesFilter<"Usuario"> | string
    perfil?: EnumPerfilWithAggregatesFilter<"Usuario"> | $Enums.Perfil
    organizacao?: StringWithAggregatesFilter<"Usuario"> | string
    tentativasLogin?: IntWithAggregatesFilter<"Usuario"> | number
    tentativasExclusao?: IntWithAggregatesFilter<"Usuario"> | number
    bloqueadoAte?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    tokenRedefinirSenha?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    expiraRedefinirSenha?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
  }

  export type ProjetoWhereInput = {
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    id?: StringFilter<"Projeto"> | string
    nomeProjeto?: StringFilter<"Projeto"> | string
    descricao?: StringNullableFilter<"Projeto"> | string | null
    criadorId?: StringFilter<"Projeto"> | string
    status?: EnumStatusProjetoFilter<"Projeto"> | $Enums.StatusProjeto
    criador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    membros?: ProjetoUsuarioListRelationFilter
    brainstormings?: BrainstormingProjetoListRelationFilter
  }

  export type ProjetoOrderByWithRelationInput = {
    id?: SortOrder
    nomeProjeto?: SortOrder
    descricao?: SortOrderInput | SortOrder
    criadorId?: SortOrder
    status?: SortOrder
    criador?: UsuarioOrderByWithRelationInput
    membros?: ProjetoUsuarioOrderByRelationAggregateInput
    brainstormings?: BrainstormingProjetoOrderByRelationAggregateInput
  }

  export type ProjetoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nomeProjeto?: string
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    descricao?: StringNullableFilter<"Projeto"> | string | null
    criadorId?: StringFilter<"Projeto"> | string
    status?: EnumStatusProjetoFilter<"Projeto"> | $Enums.StatusProjeto
    criador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    membros?: ProjetoUsuarioListRelationFilter
    brainstormings?: BrainstormingProjetoListRelationFilter
  }, "id" | "nomeProjeto">

  export type ProjetoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeProjeto?: SortOrder
    descricao?: SortOrderInput | SortOrder
    criadorId?: SortOrder
    status?: SortOrder
    _count?: ProjetoCountOrderByAggregateInput
    _max?: ProjetoMaxOrderByAggregateInput
    _min?: ProjetoMinOrderByAggregateInput
  }

  export type ProjetoScalarWhereWithAggregatesInput = {
    AND?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    OR?: ProjetoScalarWhereWithAggregatesInput[]
    NOT?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Projeto"> | string
    nomeProjeto?: StringWithAggregatesFilter<"Projeto"> | string
    descricao?: StringNullableWithAggregatesFilter<"Projeto"> | string | null
    criadorId?: StringWithAggregatesFilter<"Projeto"> | string
    status?: EnumStatusProjetoWithAggregatesFilter<"Projeto"> | $Enums.StatusProjeto
  }

  export type BrainstormingWhereInput = {
    AND?: BrainstormingWhereInput | BrainstormingWhereInput[]
    OR?: BrainstormingWhereInput[]
    NOT?: BrainstormingWhereInput | BrainstormingWhereInput[]
    id?: StringFilter<"Brainstorming"> | string
    criadorId?: StringFilter<"Brainstorming"> | string
    titulo?: StringFilter<"Brainstorming"> | string
    projetoRelacionado?: StringFilter<"Brainstorming"> | string
    data?: StringFilter<"Brainstorming"> | string
    horario?: StringFilter<"Brainstorming"> | string
    historiasUsuario?: StringFilter<"Brainstorming"> | string
    criador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    projetos?: BrainstormingProjetoListRelationFilter
  }

  export type BrainstormingOrderByWithRelationInput = {
    id?: SortOrder
    criadorId?: SortOrder
    titulo?: SortOrder
    projetoRelacionado?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    historiasUsuario?: SortOrder
    criador?: UsuarioOrderByWithRelationInput
    projetos?: BrainstormingProjetoOrderByRelationAggregateInput
  }

  export type BrainstormingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BrainstormingWhereInput | BrainstormingWhereInput[]
    OR?: BrainstormingWhereInput[]
    NOT?: BrainstormingWhereInput | BrainstormingWhereInput[]
    criadorId?: StringFilter<"Brainstorming"> | string
    titulo?: StringFilter<"Brainstorming"> | string
    projetoRelacionado?: StringFilter<"Brainstorming"> | string
    data?: StringFilter<"Brainstorming"> | string
    horario?: StringFilter<"Brainstorming"> | string
    historiasUsuario?: StringFilter<"Brainstorming"> | string
    criador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    projetos?: BrainstormingProjetoListRelationFilter
  }, "id">

  export type BrainstormingOrderByWithAggregationInput = {
    id?: SortOrder
    criadorId?: SortOrder
    titulo?: SortOrder
    projetoRelacionado?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    historiasUsuario?: SortOrder
    _count?: BrainstormingCountOrderByAggregateInput
    _max?: BrainstormingMaxOrderByAggregateInput
    _min?: BrainstormingMinOrderByAggregateInput
  }

  export type BrainstormingScalarWhereWithAggregatesInput = {
    AND?: BrainstormingScalarWhereWithAggregatesInput | BrainstormingScalarWhereWithAggregatesInput[]
    OR?: BrainstormingScalarWhereWithAggregatesInput[]
    NOT?: BrainstormingScalarWhereWithAggregatesInput | BrainstormingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brainstorming"> | string
    criadorId?: StringWithAggregatesFilter<"Brainstorming"> | string
    titulo?: StringWithAggregatesFilter<"Brainstorming"> | string
    projetoRelacionado?: StringWithAggregatesFilter<"Brainstorming"> | string
    data?: StringWithAggregatesFilter<"Brainstorming"> | string
    horario?: StringWithAggregatesFilter<"Brainstorming"> | string
    historiasUsuario?: StringWithAggregatesFilter<"Brainstorming"> | string
  }

  export type ProjetoUsuarioWhereInput = {
    AND?: ProjetoUsuarioWhereInput | ProjetoUsuarioWhereInput[]
    OR?: ProjetoUsuarioWhereInput[]
    NOT?: ProjetoUsuarioWhereInput | ProjetoUsuarioWhereInput[]
    id?: StringFilter<"ProjetoUsuario"> | string
    projetoId?: StringFilter<"ProjetoUsuario"> | string
    membroId?: StringFilter<"ProjetoUsuario"> | string
    nomeMembro?: StringFilter<"ProjetoUsuario"> | string
    emailMembro?: StringFilter<"ProjetoUsuario"> | string
    papelNoProjeto?: EnumPapelProjetoFilter<"ProjetoUsuario"> | $Enums.PapelProjeto
    projeto?: XOR<ProjetoScalarRelationFilter, ProjetoWhereInput>
    membro?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    membroPorEmail?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ProjetoUsuarioOrderByWithRelationInput = {
    id?: SortOrder
    projetoId?: SortOrder
    membroId?: SortOrder
    nomeMembro?: SortOrder
    emailMembro?: SortOrder
    papelNoProjeto?: SortOrder
    projeto?: ProjetoOrderByWithRelationInput
    membro?: UsuarioOrderByWithRelationInput
    membroPorEmail?: UsuarioOrderByWithRelationInput
  }

  export type ProjetoUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjetoUsuarioWhereInput | ProjetoUsuarioWhereInput[]
    OR?: ProjetoUsuarioWhereInput[]
    NOT?: ProjetoUsuarioWhereInput | ProjetoUsuarioWhereInput[]
    projetoId?: StringFilter<"ProjetoUsuario"> | string
    membroId?: StringFilter<"ProjetoUsuario"> | string
    nomeMembro?: StringFilter<"ProjetoUsuario"> | string
    emailMembro?: StringFilter<"ProjetoUsuario"> | string
    papelNoProjeto?: EnumPapelProjetoFilter<"ProjetoUsuario"> | $Enums.PapelProjeto
    projeto?: XOR<ProjetoScalarRelationFilter, ProjetoWhereInput>
    membro?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    membroPorEmail?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ProjetoUsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    projetoId?: SortOrder
    membroId?: SortOrder
    nomeMembro?: SortOrder
    emailMembro?: SortOrder
    papelNoProjeto?: SortOrder
    _count?: ProjetoUsuarioCountOrderByAggregateInput
    _max?: ProjetoUsuarioMaxOrderByAggregateInput
    _min?: ProjetoUsuarioMinOrderByAggregateInput
  }

  export type ProjetoUsuarioScalarWhereWithAggregatesInput = {
    AND?: ProjetoUsuarioScalarWhereWithAggregatesInput | ProjetoUsuarioScalarWhereWithAggregatesInput[]
    OR?: ProjetoUsuarioScalarWhereWithAggregatesInput[]
    NOT?: ProjetoUsuarioScalarWhereWithAggregatesInput | ProjetoUsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjetoUsuario"> | string
    projetoId?: StringWithAggregatesFilter<"ProjetoUsuario"> | string
    membroId?: StringWithAggregatesFilter<"ProjetoUsuario"> | string
    nomeMembro?: StringWithAggregatesFilter<"ProjetoUsuario"> | string
    emailMembro?: StringWithAggregatesFilter<"ProjetoUsuario"> | string
    papelNoProjeto?: EnumPapelProjetoWithAggregatesFilter<"ProjetoUsuario"> | $Enums.PapelProjeto
  }

  export type BrainstormingProjetoWhereInput = {
    AND?: BrainstormingProjetoWhereInput | BrainstormingProjetoWhereInput[]
    OR?: BrainstormingProjetoWhereInput[]
    NOT?: BrainstormingProjetoWhereInput | BrainstormingProjetoWhereInput[]
    projetoId?: StringFilter<"BrainstormingProjeto"> | string
    brainstormingId?: StringFilter<"BrainstormingProjeto"> | string
    projeto?: XOR<ProjetoScalarRelationFilter, ProjetoWhereInput>
    brainstorming?: XOR<BrainstormingScalarRelationFilter, BrainstormingWhereInput>
  }

  export type BrainstormingProjetoOrderByWithRelationInput = {
    projetoId?: SortOrder
    brainstormingId?: SortOrder
    projeto?: ProjetoOrderByWithRelationInput
    brainstorming?: BrainstormingOrderByWithRelationInput
  }

  export type BrainstormingProjetoWhereUniqueInput = Prisma.AtLeast<{
    projetoId_brainstormingId?: BrainstormingProjetoProjetoIdBrainstormingIdCompoundUniqueInput
    AND?: BrainstormingProjetoWhereInput | BrainstormingProjetoWhereInput[]
    OR?: BrainstormingProjetoWhereInput[]
    NOT?: BrainstormingProjetoWhereInput | BrainstormingProjetoWhereInput[]
    projetoId?: StringFilter<"BrainstormingProjeto"> | string
    brainstormingId?: StringFilter<"BrainstormingProjeto"> | string
    projeto?: XOR<ProjetoScalarRelationFilter, ProjetoWhereInput>
    brainstorming?: XOR<BrainstormingScalarRelationFilter, BrainstormingWhereInput>
  }, "projetoId_brainstormingId">

  export type BrainstormingProjetoOrderByWithAggregationInput = {
    projetoId?: SortOrder
    brainstormingId?: SortOrder
    _count?: BrainstormingProjetoCountOrderByAggregateInput
    _max?: BrainstormingProjetoMaxOrderByAggregateInput
    _min?: BrainstormingProjetoMinOrderByAggregateInput
  }

  export type BrainstormingProjetoScalarWhereWithAggregatesInput = {
    AND?: BrainstormingProjetoScalarWhereWithAggregatesInput | BrainstormingProjetoScalarWhereWithAggregatesInput[]
    OR?: BrainstormingProjetoScalarWhereWithAggregatesInput[]
    NOT?: BrainstormingProjetoScalarWhereWithAggregatesInput | BrainstormingProjetoScalarWhereWithAggregatesInput[]
    projetoId?: StringWithAggregatesFilter<"BrainstormingProjeto"> | string
    brainstormingId?: StringWithAggregatesFilter<"BrainstormingProjeto"> | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin?: number
    tentativasExclusao?: number
    bloqueadoAte?: Date | string | null
    tokenRedefinirSenha?: string | null
    expiraRedefinirSenha?: Date | string | null
    projetosCriados?: ProjetoCreateNestedManyWithoutCriadorInput
    brainstormingsCriados?: BrainstormingCreateNestedManyWithoutCriadorInput
    participacoesProjeto?: ProjetoUsuarioCreateNestedManyWithoutMembroInput
    participacoesPorEmail?: ProjetoUsuarioCreateNestedManyWithoutMembroPorEmailInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin?: number
    tentativasExclusao?: number
    bloqueadoAte?: Date | string | null
    tokenRedefinirSenha?: string | null
    expiraRedefinirSenha?: Date | string | null
    projetosCriados?: ProjetoUncheckedCreateNestedManyWithoutCriadorInput
    brainstormingsCriados?: BrainstormingUncheckedCreateNestedManyWithoutCriadorInput
    participacoesProjeto?: ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroInput
    participacoesPorEmail?: ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroPorEmailInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projetosCriados?: ProjetoUpdateManyWithoutCriadorNestedInput
    brainstormingsCriados?: BrainstormingUpdateManyWithoutCriadorNestedInput
    participacoesProjeto?: ProjetoUsuarioUpdateManyWithoutMembroNestedInput
    participacoesPorEmail?: ProjetoUsuarioUpdateManyWithoutMembroPorEmailNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projetosCriados?: ProjetoUncheckedUpdateManyWithoutCriadorNestedInput
    brainstormingsCriados?: BrainstormingUncheckedUpdateManyWithoutCriadorNestedInput
    participacoesProjeto?: ProjetoUsuarioUncheckedUpdateManyWithoutMembroNestedInput
    participacoesPorEmail?: ProjetoUsuarioUncheckedUpdateManyWithoutMembroPorEmailNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin?: number
    tentativasExclusao?: number
    bloqueadoAte?: Date | string | null
    tokenRedefinirSenha?: string | null
    expiraRedefinirSenha?: Date | string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjetoCreateInput = {
    id?: string
    nomeProjeto: string
    descricao?: string | null
    status?: $Enums.StatusProjeto
    criador: UsuarioCreateNestedOneWithoutProjetosCriadosInput
    membros?: ProjetoUsuarioCreateNestedManyWithoutProjetoInput
    brainstormings?: BrainstormingProjetoCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoUncheckedCreateInput = {
    id?: string
    nomeProjeto: string
    descricao?: string | null
    criadorId: string
    status?: $Enums.StatusProjeto
    membros?: ProjetoUsuarioUncheckedCreateNestedManyWithoutProjetoInput
    brainstormings?: BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusProjetoFieldUpdateOperationsInput | $Enums.StatusProjeto
    criador?: UsuarioUpdateOneRequiredWithoutProjetosCriadosNestedInput
    membros?: ProjetoUsuarioUpdateManyWithoutProjetoNestedInput
    brainstormings?: BrainstormingProjetoUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusProjetoFieldUpdateOperationsInput | $Enums.StatusProjeto
    membros?: ProjetoUsuarioUncheckedUpdateManyWithoutProjetoNestedInput
    brainstormings?: BrainstormingProjetoUncheckedUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoCreateManyInput = {
    id?: string
    nomeProjeto: string
    descricao?: string | null
    criadorId: string
    status?: $Enums.StatusProjeto
  }

  export type ProjetoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusProjetoFieldUpdateOperationsInput | $Enums.StatusProjeto
  }

  export type ProjetoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusProjetoFieldUpdateOperationsInput | $Enums.StatusProjeto
  }

  export type BrainstormingCreateInput = {
    id?: string
    titulo: string
    projetoRelacionado: string
    data: string
    horario: string
    historiasUsuario: string
    criador: UsuarioCreateNestedOneWithoutBrainstormingsCriadosInput
    projetos?: BrainstormingProjetoCreateNestedManyWithoutBrainstormingInput
  }

  export type BrainstormingUncheckedCreateInput = {
    id?: string
    criadorId: string
    titulo: string
    projetoRelacionado: string
    data: string
    horario: string
    historiasUsuario: string
    projetos?: BrainstormingProjetoUncheckedCreateNestedManyWithoutBrainstormingInput
  }

  export type BrainstormingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    projetoRelacionado?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    historiasUsuario?: StringFieldUpdateOperationsInput | string
    criador?: UsuarioUpdateOneRequiredWithoutBrainstormingsCriadosNestedInput
    projetos?: BrainstormingProjetoUpdateManyWithoutBrainstormingNestedInput
  }

  export type BrainstormingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadorId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    projetoRelacionado?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    historiasUsuario?: StringFieldUpdateOperationsInput | string
    projetos?: BrainstormingProjetoUncheckedUpdateManyWithoutBrainstormingNestedInput
  }

  export type BrainstormingCreateManyInput = {
    id?: string
    criadorId: string
    titulo: string
    projetoRelacionado: string
    data: string
    horario: string
    historiasUsuario: string
  }

  export type BrainstormingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    projetoRelacionado?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    historiasUsuario?: StringFieldUpdateOperationsInput | string
  }

  export type BrainstormingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadorId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    projetoRelacionado?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    historiasUsuario?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoUsuarioCreateInput = {
    id?: string
    nomeMembro: string
    papelNoProjeto: $Enums.PapelProjeto
    projeto: ProjetoCreateNestedOneWithoutMembrosInput
    membro: UsuarioCreateNestedOneWithoutParticipacoesProjetoInput
    membroPorEmail: UsuarioCreateNestedOneWithoutParticipacoesPorEmailInput
  }

  export type ProjetoUsuarioUncheckedCreateInput = {
    id?: string
    projetoId: string
    membroId: string
    nomeMembro: string
    emailMembro: string
    papelNoProjeto: $Enums.PapelProjeto
  }

  export type ProjetoUsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
    projeto?: ProjetoUpdateOneRequiredWithoutMembrosNestedInput
    membro?: UsuarioUpdateOneRequiredWithoutParticipacoesProjetoNestedInput
    membroPorEmail?: UsuarioUpdateOneRequiredWithoutParticipacoesPorEmailNestedInput
  }

  export type ProjetoUsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projetoId?: StringFieldUpdateOperationsInput | string
    membroId?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    emailMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
  }

  export type ProjetoUsuarioCreateManyInput = {
    id?: string
    projetoId: string
    membroId: string
    nomeMembro: string
    emailMembro: string
    papelNoProjeto: $Enums.PapelProjeto
  }

  export type ProjetoUsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
  }

  export type ProjetoUsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projetoId?: StringFieldUpdateOperationsInput | string
    membroId?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    emailMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
  }

  export type BrainstormingProjetoCreateInput = {
    projeto: ProjetoCreateNestedOneWithoutBrainstormingsInput
    brainstorming: BrainstormingCreateNestedOneWithoutProjetosInput
  }

  export type BrainstormingProjetoUncheckedCreateInput = {
    projetoId: string
    brainstormingId: string
  }

  export type BrainstormingProjetoUpdateInput = {
    projeto?: ProjetoUpdateOneRequiredWithoutBrainstormingsNestedInput
    brainstorming?: BrainstormingUpdateOneRequiredWithoutProjetosNestedInput
  }

  export type BrainstormingProjetoUncheckedUpdateInput = {
    projetoId?: StringFieldUpdateOperationsInput | string
    brainstormingId?: StringFieldUpdateOperationsInput | string
  }

  export type BrainstormingProjetoCreateManyInput = {
    projetoId: string
    brainstormingId: string
  }

  export type BrainstormingProjetoUpdateManyMutationInput = {

  }

  export type BrainstormingProjetoUncheckedUpdateManyInput = {
    projetoId?: StringFieldUpdateOperationsInput | string
    brainstormingId?: StringFieldUpdateOperationsInput | string
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

  export type EnumGeneroFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroFilter<$PrismaModel> | $Enums.Genero
  }

  export type EnumPerfilFilter<$PrismaModel = never> = {
    equals?: $Enums.Perfil | EnumPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.Perfil[] | ListEnumPerfilFieldRefInput<$PrismaModel>
    notIn?: $Enums.Perfil[] | ListEnumPerfilFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilFilter<$PrismaModel> | $Enums.Perfil
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

  export type ProjetoListRelationFilter = {
    every?: ProjetoWhereInput
    some?: ProjetoWhereInput
    none?: ProjetoWhereInput
  }

  export type BrainstormingListRelationFilter = {
    every?: BrainstormingWhereInput
    some?: BrainstormingWhereInput
    none?: BrainstormingWhereInput
  }

  export type ProjetoUsuarioListRelationFilter = {
    every?: ProjetoUsuarioWhereInput
    some?: ProjetoUsuarioWhereInput
    none?: ProjetoUsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjetoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrainstormingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjetoUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    genero?: SortOrder
    dataNascimento?: SortOrder
    perfil?: SortOrder
    organizacao?: SortOrder
    tentativasLogin?: SortOrder
    tentativasExclusao?: SortOrder
    bloqueadoAte?: SortOrder
    tokenRedefinirSenha?: SortOrder
    expiraRedefinirSenha?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    tentativasLogin?: SortOrder
    tentativasExclusao?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    genero?: SortOrder
    dataNascimento?: SortOrder
    perfil?: SortOrder
    organizacao?: SortOrder
    tentativasLogin?: SortOrder
    tentativasExclusao?: SortOrder
    bloqueadoAte?: SortOrder
    tokenRedefinirSenha?: SortOrder
    expiraRedefinirSenha?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    genero?: SortOrder
    dataNascimento?: SortOrder
    perfil?: SortOrder
    organizacao?: SortOrder
    tentativasLogin?: SortOrder
    tentativasExclusao?: SortOrder
    bloqueadoAte?: SortOrder
    tokenRedefinirSenha?: SortOrder
    expiraRedefinirSenha?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    tentativasLogin?: SortOrder
    tentativasExclusao?: SortOrder
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

  export type EnumGeneroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroWithAggregatesFilter<$PrismaModel> | $Enums.Genero
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeneroFilter<$PrismaModel>
    _max?: NestedEnumGeneroFilter<$PrismaModel>
  }

  export type EnumPerfilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Perfil | EnumPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.Perfil[] | ListEnumPerfilFieldRefInput<$PrismaModel>
    notIn?: $Enums.Perfil[] | ListEnumPerfilFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilWithAggregatesFilter<$PrismaModel> | $Enums.Perfil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPerfilFilter<$PrismaModel>
    _max?: NestedEnumPerfilFilter<$PrismaModel>
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

  export type EnumStatusProjetoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProjeto | EnumStatusProjetoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProjeto[] | ListEnumStatusProjetoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProjeto[] | ListEnumStatusProjetoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusProjetoFilter<$PrismaModel> | $Enums.StatusProjeto
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type BrainstormingProjetoListRelationFilter = {
    every?: BrainstormingProjetoWhereInput
    some?: BrainstormingProjetoWhereInput
    none?: BrainstormingProjetoWhereInput
  }

  export type BrainstormingProjetoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjetoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeProjeto?: SortOrder
    descricao?: SortOrder
    criadorId?: SortOrder
    status?: SortOrder
  }

  export type ProjetoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeProjeto?: SortOrder
    descricao?: SortOrder
    criadorId?: SortOrder
    status?: SortOrder
  }

  export type ProjetoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeProjeto?: SortOrder
    descricao?: SortOrder
    criadorId?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusProjetoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProjeto | EnumStatusProjetoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProjeto[] | ListEnumStatusProjetoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProjeto[] | ListEnumStatusProjetoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusProjetoWithAggregatesFilter<$PrismaModel> | $Enums.StatusProjeto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusProjetoFilter<$PrismaModel>
    _max?: NestedEnumStatusProjetoFilter<$PrismaModel>
  }

  export type BrainstormingCountOrderByAggregateInput = {
    id?: SortOrder
    criadorId?: SortOrder
    titulo?: SortOrder
    projetoRelacionado?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    historiasUsuario?: SortOrder
  }

  export type BrainstormingMaxOrderByAggregateInput = {
    id?: SortOrder
    criadorId?: SortOrder
    titulo?: SortOrder
    projetoRelacionado?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    historiasUsuario?: SortOrder
  }

  export type BrainstormingMinOrderByAggregateInput = {
    id?: SortOrder
    criadorId?: SortOrder
    titulo?: SortOrder
    projetoRelacionado?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    historiasUsuario?: SortOrder
  }

  export type EnumPapelProjetoFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelProjeto | EnumPapelProjetoFieldRefInput<$PrismaModel>
    in?: $Enums.PapelProjeto[] | ListEnumPapelProjetoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PapelProjeto[] | ListEnumPapelProjetoFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelProjetoFilter<$PrismaModel> | $Enums.PapelProjeto
  }

  export type ProjetoScalarRelationFilter = {
    is?: ProjetoWhereInput
    isNot?: ProjetoWhereInput
  }

  export type ProjetoUsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    projetoId?: SortOrder
    membroId?: SortOrder
    nomeMembro?: SortOrder
    emailMembro?: SortOrder
    papelNoProjeto?: SortOrder
  }

  export type ProjetoUsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    projetoId?: SortOrder
    membroId?: SortOrder
    nomeMembro?: SortOrder
    emailMembro?: SortOrder
    papelNoProjeto?: SortOrder
  }

  export type ProjetoUsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    projetoId?: SortOrder
    membroId?: SortOrder
    nomeMembro?: SortOrder
    emailMembro?: SortOrder
    papelNoProjeto?: SortOrder
  }

  export type EnumPapelProjetoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelProjeto | EnumPapelProjetoFieldRefInput<$PrismaModel>
    in?: $Enums.PapelProjeto[] | ListEnumPapelProjetoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PapelProjeto[] | ListEnumPapelProjetoFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelProjetoWithAggregatesFilter<$PrismaModel> | $Enums.PapelProjeto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPapelProjetoFilter<$PrismaModel>
    _max?: NestedEnumPapelProjetoFilter<$PrismaModel>
  }

  export type BrainstormingScalarRelationFilter = {
    is?: BrainstormingWhereInput
    isNot?: BrainstormingWhereInput
  }

  export type BrainstormingProjetoProjetoIdBrainstormingIdCompoundUniqueInput = {
    projetoId: string
    brainstormingId: string
  }

  export type BrainstormingProjetoCountOrderByAggregateInput = {
    projetoId?: SortOrder
    brainstormingId?: SortOrder
  }

  export type BrainstormingProjetoMaxOrderByAggregateInput = {
    projetoId?: SortOrder
    brainstormingId?: SortOrder
  }

  export type BrainstormingProjetoMinOrderByAggregateInput = {
    projetoId?: SortOrder
    brainstormingId?: SortOrder
  }

  export type ProjetoCreateNestedManyWithoutCriadorInput = {
    create?: XOR<ProjetoCreateWithoutCriadorInput, ProjetoUncheckedCreateWithoutCriadorInput> | ProjetoCreateWithoutCriadorInput[] | ProjetoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutCriadorInput | ProjetoCreateOrConnectWithoutCriadorInput[]
    createMany?: ProjetoCreateManyCriadorInputEnvelope
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type BrainstormingCreateNestedManyWithoutCriadorInput = {
    create?: XOR<BrainstormingCreateWithoutCriadorInput, BrainstormingUncheckedCreateWithoutCriadorInput> | BrainstormingCreateWithoutCriadorInput[] | BrainstormingUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: BrainstormingCreateOrConnectWithoutCriadorInput | BrainstormingCreateOrConnectWithoutCriadorInput[]
    createMany?: BrainstormingCreateManyCriadorInputEnvelope
    connect?: BrainstormingWhereUniqueInput | BrainstormingWhereUniqueInput[]
  }

  export type ProjetoUsuarioCreateNestedManyWithoutMembroInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutMembroInput, ProjetoUsuarioUncheckedCreateWithoutMembroInput> | ProjetoUsuarioCreateWithoutMembroInput[] | ProjetoUsuarioUncheckedCreateWithoutMembroInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutMembroInput | ProjetoUsuarioCreateOrConnectWithoutMembroInput[]
    createMany?: ProjetoUsuarioCreateManyMembroInputEnvelope
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
  }

  export type ProjetoUsuarioCreateNestedManyWithoutMembroPorEmailInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutMembroPorEmailInput, ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput> | ProjetoUsuarioCreateWithoutMembroPorEmailInput[] | ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput | ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput[]
    createMany?: ProjetoUsuarioCreateManyMembroPorEmailInputEnvelope
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
  }

  export type ProjetoUncheckedCreateNestedManyWithoutCriadorInput = {
    create?: XOR<ProjetoCreateWithoutCriadorInput, ProjetoUncheckedCreateWithoutCriadorInput> | ProjetoCreateWithoutCriadorInput[] | ProjetoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutCriadorInput | ProjetoCreateOrConnectWithoutCriadorInput[]
    createMany?: ProjetoCreateManyCriadorInputEnvelope
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type BrainstormingUncheckedCreateNestedManyWithoutCriadorInput = {
    create?: XOR<BrainstormingCreateWithoutCriadorInput, BrainstormingUncheckedCreateWithoutCriadorInput> | BrainstormingCreateWithoutCriadorInput[] | BrainstormingUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: BrainstormingCreateOrConnectWithoutCriadorInput | BrainstormingCreateOrConnectWithoutCriadorInput[]
    createMany?: BrainstormingCreateManyCriadorInputEnvelope
    connect?: BrainstormingWhereUniqueInput | BrainstormingWhereUniqueInput[]
  }

  export type ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutMembroInput, ProjetoUsuarioUncheckedCreateWithoutMembroInput> | ProjetoUsuarioCreateWithoutMembroInput[] | ProjetoUsuarioUncheckedCreateWithoutMembroInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutMembroInput | ProjetoUsuarioCreateOrConnectWithoutMembroInput[]
    createMany?: ProjetoUsuarioCreateManyMembroInputEnvelope
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
  }

  export type ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroPorEmailInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutMembroPorEmailInput, ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput> | ProjetoUsuarioCreateWithoutMembroPorEmailInput[] | ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput | ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput[]
    createMany?: ProjetoUsuarioCreateManyMembroPorEmailInputEnvelope
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGeneroFieldUpdateOperationsInput = {
    set?: $Enums.Genero
  }

  export type EnumPerfilFieldUpdateOperationsInput = {
    set?: $Enums.Perfil
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjetoUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<ProjetoCreateWithoutCriadorInput, ProjetoUncheckedCreateWithoutCriadorInput> | ProjetoCreateWithoutCriadorInput[] | ProjetoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutCriadorInput | ProjetoCreateOrConnectWithoutCriadorInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutCriadorInput | ProjetoUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: ProjetoCreateManyCriadorInputEnvelope
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutCriadorInput | ProjetoUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutCriadorInput | ProjetoUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type BrainstormingUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<BrainstormingCreateWithoutCriadorInput, BrainstormingUncheckedCreateWithoutCriadorInput> | BrainstormingCreateWithoutCriadorInput[] | BrainstormingUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: BrainstormingCreateOrConnectWithoutCriadorInput | BrainstormingCreateOrConnectWithoutCriadorInput[]
    upsert?: BrainstormingUpsertWithWhereUniqueWithoutCriadorInput | BrainstormingUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: BrainstormingCreateManyCriadorInputEnvelope
    set?: BrainstormingWhereUniqueInput | BrainstormingWhereUniqueInput[]
    disconnect?: BrainstormingWhereUniqueInput | BrainstormingWhereUniqueInput[]
    delete?: BrainstormingWhereUniqueInput | BrainstormingWhereUniqueInput[]
    connect?: BrainstormingWhereUniqueInput | BrainstormingWhereUniqueInput[]
    update?: BrainstormingUpdateWithWhereUniqueWithoutCriadorInput | BrainstormingUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: BrainstormingUpdateManyWithWhereWithoutCriadorInput | BrainstormingUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: BrainstormingScalarWhereInput | BrainstormingScalarWhereInput[]
  }

  export type ProjetoUsuarioUpdateManyWithoutMembroNestedInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutMembroInput, ProjetoUsuarioUncheckedCreateWithoutMembroInput> | ProjetoUsuarioCreateWithoutMembroInput[] | ProjetoUsuarioUncheckedCreateWithoutMembroInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutMembroInput | ProjetoUsuarioCreateOrConnectWithoutMembroInput[]
    upsert?: ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroInput | ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroInput[]
    createMany?: ProjetoUsuarioCreateManyMembroInputEnvelope
    set?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    disconnect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    delete?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    update?: ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroInput | ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroInput[]
    updateMany?: ProjetoUsuarioUpdateManyWithWhereWithoutMembroInput | ProjetoUsuarioUpdateManyWithWhereWithoutMembroInput[]
    deleteMany?: ProjetoUsuarioScalarWhereInput | ProjetoUsuarioScalarWhereInput[]
  }

  export type ProjetoUsuarioUpdateManyWithoutMembroPorEmailNestedInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutMembroPorEmailInput, ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput> | ProjetoUsuarioCreateWithoutMembroPorEmailInput[] | ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput | ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput[]
    upsert?: ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroPorEmailInput | ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroPorEmailInput[]
    createMany?: ProjetoUsuarioCreateManyMembroPorEmailInputEnvelope
    set?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    disconnect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    delete?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    update?: ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroPorEmailInput | ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroPorEmailInput[]
    updateMany?: ProjetoUsuarioUpdateManyWithWhereWithoutMembroPorEmailInput | ProjetoUsuarioUpdateManyWithWhereWithoutMembroPorEmailInput[]
    deleteMany?: ProjetoUsuarioScalarWhereInput | ProjetoUsuarioScalarWhereInput[]
  }

  export type ProjetoUncheckedUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<ProjetoCreateWithoutCriadorInput, ProjetoUncheckedCreateWithoutCriadorInput> | ProjetoCreateWithoutCriadorInput[] | ProjetoUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutCriadorInput | ProjetoCreateOrConnectWithoutCriadorInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutCriadorInput | ProjetoUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: ProjetoCreateManyCriadorInputEnvelope
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutCriadorInput | ProjetoUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutCriadorInput | ProjetoUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type BrainstormingUncheckedUpdateManyWithoutCriadorNestedInput = {
    create?: XOR<BrainstormingCreateWithoutCriadorInput, BrainstormingUncheckedCreateWithoutCriadorInput> | BrainstormingCreateWithoutCriadorInput[] | BrainstormingUncheckedCreateWithoutCriadorInput[]
    connectOrCreate?: BrainstormingCreateOrConnectWithoutCriadorInput | BrainstormingCreateOrConnectWithoutCriadorInput[]
    upsert?: BrainstormingUpsertWithWhereUniqueWithoutCriadorInput | BrainstormingUpsertWithWhereUniqueWithoutCriadorInput[]
    createMany?: BrainstormingCreateManyCriadorInputEnvelope
    set?: BrainstormingWhereUniqueInput | BrainstormingWhereUniqueInput[]
    disconnect?: BrainstormingWhereUniqueInput | BrainstormingWhereUniqueInput[]
    delete?: BrainstormingWhereUniqueInput | BrainstormingWhereUniqueInput[]
    connect?: BrainstormingWhereUniqueInput | BrainstormingWhereUniqueInput[]
    update?: BrainstormingUpdateWithWhereUniqueWithoutCriadorInput | BrainstormingUpdateWithWhereUniqueWithoutCriadorInput[]
    updateMany?: BrainstormingUpdateManyWithWhereWithoutCriadorInput | BrainstormingUpdateManyWithWhereWithoutCriadorInput[]
    deleteMany?: BrainstormingScalarWhereInput | BrainstormingScalarWhereInput[]
  }

  export type ProjetoUsuarioUncheckedUpdateManyWithoutMembroNestedInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutMembroInput, ProjetoUsuarioUncheckedCreateWithoutMembroInput> | ProjetoUsuarioCreateWithoutMembroInput[] | ProjetoUsuarioUncheckedCreateWithoutMembroInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutMembroInput | ProjetoUsuarioCreateOrConnectWithoutMembroInput[]
    upsert?: ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroInput | ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroInput[]
    createMany?: ProjetoUsuarioCreateManyMembroInputEnvelope
    set?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    disconnect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    delete?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    update?: ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroInput | ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroInput[]
    updateMany?: ProjetoUsuarioUpdateManyWithWhereWithoutMembroInput | ProjetoUsuarioUpdateManyWithWhereWithoutMembroInput[]
    deleteMany?: ProjetoUsuarioScalarWhereInput | ProjetoUsuarioScalarWhereInput[]
  }

  export type ProjetoUsuarioUncheckedUpdateManyWithoutMembroPorEmailNestedInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutMembroPorEmailInput, ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput> | ProjetoUsuarioCreateWithoutMembroPorEmailInput[] | ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput | ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput[]
    upsert?: ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroPorEmailInput | ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroPorEmailInput[]
    createMany?: ProjetoUsuarioCreateManyMembroPorEmailInputEnvelope
    set?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    disconnect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    delete?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    update?: ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroPorEmailInput | ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroPorEmailInput[]
    updateMany?: ProjetoUsuarioUpdateManyWithWhereWithoutMembroPorEmailInput | ProjetoUsuarioUpdateManyWithWhereWithoutMembroPorEmailInput[]
    deleteMany?: ProjetoUsuarioScalarWhereInput | ProjetoUsuarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutProjetosCriadosInput = {
    create?: XOR<UsuarioCreateWithoutProjetosCriadosInput, UsuarioUncheckedCreateWithoutProjetosCriadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProjetosCriadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProjetoUsuarioCreateNestedManyWithoutProjetoInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutProjetoInput, ProjetoUsuarioUncheckedCreateWithoutProjetoInput> | ProjetoUsuarioCreateWithoutProjetoInput[] | ProjetoUsuarioUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutProjetoInput | ProjetoUsuarioCreateOrConnectWithoutProjetoInput[]
    createMany?: ProjetoUsuarioCreateManyProjetoInputEnvelope
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
  }

  export type BrainstormingProjetoCreateNestedManyWithoutProjetoInput = {
    create?: XOR<BrainstormingProjetoCreateWithoutProjetoInput, BrainstormingProjetoUncheckedCreateWithoutProjetoInput> | BrainstormingProjetoCreateWithoutProjetoInput[] | BrainstormingProjetoUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: BrainstormingProjetoCreateOrConnectWithoutProjetoInput | BrainstormingProjetoCreateOrConnectWithoutProjetoInput[]
    createMany?: BrainstormingProjetoCreateManyProjetoInputEnvelope
    connect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
  }

  export type ProjetoUsuarioUncheckedCreateNestedManyWithoutProjetoInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutProjetoInput, ProjetoUsuarioUncheckedCreateWithoutProjetoInput> | ProjetoUsuarioCreateWithoutProjetoInput[] | ProjetoUsuarioUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutProjetoInput | ProjetoUsuarioCreateOrConnectWithoutProjetoInput[]
    createMany?: ProjetoUsuarioCreateManyProjetoInputEnvelope
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
  }

  export type BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInput = {
    create?: XOR<BrainstormingProjetoCreateWithoutProjetoInput, BrainstormingProjetoUncheckedCreateWithoutProjetoInput> | BrainstormingProjetoCreateWithoutProjetoInput[] | BrainstormingProjetoUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: BrainstormingProjetoCreateOrConnectWithoutProjetoInput | BrainstormingProjetoCreateOrConnectWithoutProjetoInput[]
    createMany?: BrainstormingProjetoCreateManyProjetoInputEnvelope
    connect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
  }

  export type EnumStatusProjetoFieldUpdateOperationsInput = {
    set?: $Enums.StatusProjeto
  }

  export type UsuarioUpdateOneRequiredWithoutProjetosCriadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutProjetosCriadosInput, UsuarioUncheckedCreateWithoutProjetosCriadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProjetosCriadosInput
    upsert?: UsuarioUpsertWithoutProjetosCriadosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProjetosCriadosInput, UsuarioUpdateWithoutProjetosCriadosInput>, UsuarioUncheckedUpdateWithoutProjetosCriadosInput>
  }

  export type ProjetoUsuarioUpdateManyWithoutProjetoNestedInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutProjetoInput, ProjetoUsuarioUncheckedCreateWithoutProjetoInput> | ProjetoUsuarioCreateWithoutProjetoInput[] | ProjetoUsuarioUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutProjetoInput | ProjetoUsuarioCreateOrConnectWithoutProjetoInput[]
    upsert?: ProjetoUsuarioUpsertWithWhereUniqueWithoutProjetoInput | ProjetoUsuarioUpsertWithWhereUniqueWithoutProjetoInput[]
    createMany?: ProjetoUsuarioCreateManyProjetoInputEnvelope
    set?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    disconnect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    delete?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    update?: ProjetoUsuarioUpdateWithWhereUniqueWithoutProjetoInput | ProjetoUsuarioUpdateWithWhereUniqueWithoutProjetoInput[]
    updateMany?: ProjetoUsuarioUpdateManyWithWhereWithoutProjetoInput | ProjetoUsuarioUpdateManyWithWhereWithoutProjetoInput[]
    deleteMany?: ProjetoUsuarioScalarWhereInput | ProjetoUsuarioScalarWhereInput[]
  }

  export type BrainstormingProjetoUpdateManyWithoutProjetoNestedInput = {
    create?: XOR<BrainstormingProjetoCreateWithoutProjetoInput, BrainstormingProjetoUncheckedCreateWithoutProjetoInput> | BrainstormingProjetoCreateWithoutProjetoInput[] | BrainstormingProjetoUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: BrainstormingProjetoCreateOrConnectWithoutProjetoInput | BrainstormingProjetoCreateOrConnectWithoutProjetoInput[]
    upsert?: BrainstormingProjetoUpsertWithWhereUniqueWithoutProjetoInput | BrainstormingProjetoUpsertWithWhereUniqueWithoutProjetoInput[]
    createMany?: BrainstormingProjetoCreateManyProjetoInputEnvelope
    set?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    disconnect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    delete?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    connect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    update?: BrainstormingProjetoUpdateWithWhereUniqueWithoutProjetoInput | BrainstormingProjetoUpdateWithWhereUniqueWithoutProjetoInput[]
    updateMany?: BrainstormingProjetoUpdateManyWithWhereWithoutProjetoInput | BrainstormingProjetoUpdateManyWithWhereWithoutProjetoInput[]
    deleteMany?: BrainstormingProjetoScalarWhereInput | BrainstormingProjetoScalarWhereInput[]
  }

  export type ProjetoUsuarioUncheckedUpdateManyWithoutProjetoNestedInput = {
    create?: XOR<ProjetoUsuarioCreateWithoutProjetoInput, ProjetoUsuarioUncheckedCreateWithoutProjetoInput> | ProjetoUsuarioCreateWithoutProjetoInput[] | ProjetoUsuarioUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: ProjetoUsuarioCreateOrConnectWithoutProjetoInput | ProjetoUsuarioCreateOrConnectWithoutProjetoInput[]
    upsert?: ProjetoUsuarioUpsertWithWhereUniqueWithoutProjetoInput | ProjetoUsuarioUpsertWithWhereUniqueWithoutProjetoInput[]
    createMany?: ProjetoUsuarioCreateManyProjetoInputEnvelope
    set?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    disconnect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    delete?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    connect?: ProjetoUsuarioWhereUniqueInput | ProjetoUsuarioWhereUniqueInput[]
    update?: ProjetoUsuarioUpdateWithWhereUniqueWithoutProjetoInput | ProjetoUsuarioUpdateWithWhereUniqueWithoutProjetoInput[]
    updateMany?: ProjetoUsuarioUpdateManyWithWhereWithoutProjetoInput | ProjetoUsuarioUpdateManyWithWhereWithoutProjetoInput[]
    deleteMany?: ProjetoUsuarioScalarWhereInput | ProjetoUsuarioScalarWhereInput[]
  }

  export type BrainstormingProjetoUncheckedUpdateManyWithoutProjetoNestedInput = {
    create?: XOR<BrainstormingProjetoCreateWithoutProjetoInput, BrainstormingProjetoUncheckedCreateWithoutProjetoInput> | BrainstormingProjetoCreateWithoutProjetoInput[] | BrainstormingProjetoUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: BrainstormingProjetoCreateOrConnectWithoutProjetoInput | BrainstormingProjetoCreateOrConnectWithoutProjetoInput[]
    upsert?: BrainstormingProjetoUpsertWithWhereUniqueWithoutProjetoInput | BrainstormingProjetoUpsertWithWhereUniqueWithoutProjetoInput[]
    createMany?: BrainstormingProjetoCreateManyProjetoInputEnvelope
    set?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    disconnect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    delete?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    connect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    update?: BrainstormingProjetoUpdateWithWhereUniqueWithoutProjetoInput | BrainstormingProjetoUpdateWithWhereUniqueWithoutProjetoInput[]
    updateMany?: BrainstormingProjetoUpdateManyWithWhereWithoutProjetoInput | BrainstormingProjetoUpdateManyWithWhereWithoutProjetoInput[]
    deleteMany?: BrainstormingProjetoScalarWhereInput | BrainstormingProjetoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutBrainstormingsCriadosInput = {
    create?: XOR<UsuarioCreateWithoutBrainstormingsCriadosInput, UsuarioUncheckedCreateWithoutBrainstormingsCriadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBrainstormingsCriadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BrainstormingProjetoCreateNestedManyWithoutBrainstormingInput = {
    create?: XOR<BrainstormingProjetoCreateWithoutBrainstormingInput, BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput> | BrainstormingProjetoCreateWithoutBrainstormingInput[] | BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput[]
    connectOrCreate?: BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput | BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput[]
    createMany?: BrainstormingProjetoCreateManyBrainstormingInputEnvelope
    connect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
  }

  export type BrainstormingProjetoUncheckedCreateNestedManyWithoutBrainstormingInput = {
    create?: XOR<BrainstormingProjetoCreateWithoutBrainstormingInput, BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput> | BrainstormingProjetoCreateWithoutBrainstormingInput[] | BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput[]
    connectOrCreate?: BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput | BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput[]
    createMany?: BrainstormingProjetoCreateManyBrainstormingInputEnvelope
    connect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutBrainstormingsCriadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutBrainstormingsCriadosInput, UsuarioUncheckedCreateWithoutBrainstormingsCriadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutBrainstormingsCriadosInput
    upsert?: UsuarioUpsertWithoutBrainstormingsCriadosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutBrainstormingsCriadosInput, UsuarioUpdateWithoutBrainstormingsCriadosInput>, UsuarioUncheckedUpdateWithoutBrainstormingsCriadosInput>
  }

  export type BrainstormingProjetoUpdateManyWithoutBrainstormingNestedInput = {
    create?: XOR<BrainstormingProjetoCreateWithoutBrainstormingInput, BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput> | BrainstormingProjetoCreateWithoutBrainstormingInput[] | BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput[]
    connectOrCreate?: BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput | BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput[]
    upsert?: BrainstormingProjetoUpsertWithWhereUniqueWithoutBrainstormingInput | BrainstormingProjetoUpsertWithWhereUniqueWithoutBrainstormingInput[]
    createMany?: BrainstormingProjetoCreateManyBrainstormingInputEnvelope
    set?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    disconnect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    delete?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    connect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    update?: BrainstormingProjetoUpdateWithWhereUniqueWithoutBrainstormingInput | BrainstormingProjetoUpdateWithWhereUniqueWithoutBrainstormingInput[]
    updateMany?: BrainstormingProjetoUpdateManyWithWhereWithoutBrainstormingInput | BrainstormingProjetoUpdateManyWithWhereWithoutBrainstormingInput[]
    deleteMany?: BrainstormingProjetoScalarWhereInput | BrainstormingProjetoScalarWhereInput[]
  }

  export type BrainstormingProjetoUncheckedUpdateManyWithoutBrainstormingNestedInput = {
    create?: XOR<BrainstormingProjetoCreateWithoutBrainstormingInput, BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput> | BrainstormingProjetoCreateWithoutBrainstormingInput[] | BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput[]
    connectOrCreate?: BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput | BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput[]
    upsert?: BrainstormingProjetoUpsertWithWhereUniqueWithoutBrainstormingInput | BrainstormingProjetoUpsertWithWhereUniqueWithoutBrainstormingInput[]
    createMany?: BrainstormingProjetoCreateManyBrainstormingInputEnvelope
    set?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    disconnect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    delete?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    connect?: BrainstormingProjetoWhereUniqueInput | BrainstormingProjetoWhereUniqueInput[]
    update?: BrainstormingProjetoUpdateWithWhereUniqueWithoutBrainstormingInput | BrainstormingProjetoUpdateWithWhereUniqueWithoutBrainstormingInput[]
    updateMany?: BrainstormingProjetoUpdateManyWithWhereWithoutBrainstormingInput | BrainstormingProjetoUpdateManyWithWhereWithoutBrainstormingInput[]
    deleteMany?: BrainstormingProjetoScalarWhereInput | BrainstormingProjetoScalarWhereInput[]
  }

  export type ProjetoCreateNestedOneWithoutMembrosInput = {
    create?: XOR<ProjetoCreateWithoutMembrosInput, ProjetoUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: ProjetoCreateOrConnectWithoutMembrosInput
    connect?: ProjetoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutParticipacoesProjetoInput = {
    create?: XOR<UsuarioCreateWithoutParticipacoesProjetoInput, UsuarioUncheckedCreateWithoutParticipacoesProjetoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParticipacoesProjetoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutParticipacoesPorEmailInput = {
    create?: XOR<UsuarioCreateWithoutParticipacoesPorEmailInput, UsuarioUncheckedCreateWithoutParticipacoesPorEmailInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParticipacoesPorEmailInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumPapelProjetoFieldUpdateOperationsInput = {
    set?: $Enums.PapelProjeto
  }

  export type ProjetoUpdateOneRequiredWithoutMembrosNestedInput = {
    create?: XOR<ProjetoCreateWithoutMembrosInput, ProjetoUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: ProjetoCreateOrConnectWithoutMembrosInput
    upsert?: ProjetoUpsertWithoutMembrosInput
    connect?: ProjetoWhereUniqueInput
    update?: XOR<XOR<ProjetoUpdateToOneWithWhereWithoutMembrosInput, ProjetoUpdateWithoutMembrosInput>, ProjetoUncheckedUpdateWithoutMembrosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutParticipacoesProjetoNestedInput = {
    create?: XOR<UsuarioCreateWithoutParticipacoesProjetoInput, UsuarioUncheckedCreateWithoutParticipacoesProjetoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParticipacoesProjetoInput
    upsert?: UsuarioUpsertWithoutParticipacoesProjetoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutParticipacoesProjetoInput, UsuarioUpdateWithoutParticipacoesProjetoInput>, UsuarioUncheckedUpdateWithoutParticipacoesProjetoInput>
  }

  export type UsuarioUpdateOneRequiredWithoutParticipacoesPorEmailNestedInput = {
    create?: XOR<UsuarioCreateWithoutParticipacoesPorEmailInput, UsuarioUncheckedCreateWithoutParticipacoesPorEmailInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParticipacoesPorEmailInput
    upsert?: UsuarioUpsertWithoutParticipacoesPorEmailInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutParticipacoesPorEmailInput, UsuarioUpdateWithoutParticipacoesPorEmailInput>, UsuarioUncheckedUpdateWithoutParticipacoesPorEmailInput>
  }

  export type ProjetoCreateNestedOneWithoutBrainstormingsInput = {
    create?: XOR<ProjetoCreateWithoutBrainstormingsInput, ProjetoUncheckedCreateWithoutBrainstormingsInput>
    connectOrCreate?: ProjetoCreateOrConnectWithoutBrainstormingsInput
    connect?: ProjetoWhereUniqueInput
  }

  export type BrainstormingCreateNestedOneWithoutProjetosInput = {
    create?: XOR<BrainstormingCreateWithoutProjetosInput, BrainstormingUncheckedCreateWithoutProjetosInput>
    connectOrCreate?: BrainstormingCreateOrConnectWithoutProjetosInput
    connect?: BrainstormingWhereUniqueInput
  }

  export type ProjetoUpdateOneRequiredWithoutBrainstormingsNestedInput = {
    create?: XOR<ProjetoCreateWithoutBrainstormingsInput, ProjetoUncheckedCreateWithoutBrainstormingsInput>
    connectOrCreate?: ProjetoCreateOrConnectWithoutBrainstormingsInput
    upsert?: ProjetoUpsertWithoutBrainstormingsInput
    connect?: ProjetoWhereUniqueInput
    update?: XOR<XOR<ProjetoUpdateToOneWithWhereWithoutBrainstormingsInput, ProjetoUpdateWithoutBrainstormingsInput>, ProjetoUncheckedUpdateWithoutBrainstormingsInput>
  }

  export type BrainstormingUpdateOneRequiredWithoutProjetosNestedInput = {
    create?: XOR<BrainstormingCreateWithoutProjetosInput, BrainstormingUncheckedCreateWithoutProjetosInput>
    connectOrCreate?: BrainstormingCreateOrConnectWithoutProjetosInput
    upsert?: BrainstormingUpsertWithoutProjetosInput
    connect?: BrainstormingWhereUniqueInput
    update?: XOR<XOR<BrainstormingUpdateToOneWithWhereWithoutProjetosInput, BrainstormingUpdateWithoutProjetosInput>, BrainstormingUncheckedUpdateWithoutProjetosInput>
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

  export type NestedEnumGeneroFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroFilter<$PrismaModel> | $Enums.Genero
  }

  export type NestedEnumPerfilFilter<$PrismaModel = never> = {
    equals?: $Enums.Perfil | EnumPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.Perfil[] | ListEnumPerfilFieldRefInput<$PrismaModel>
    notIn?: $Enums.Perfil[] | ListEnumPerfilFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilFilter<$PrismaModel> | $Enums.Perfil
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

  export type NestedEnumGeneroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroWithAggregatesFilter<$PrismaModel> | $Enums.Genero
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeneroFilter<$PrismaModel>
    _max?: NestedEnumGeneroFilter<$PrismaModel>
  }

  export type NestedEnumPerfilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Perfil | EnumPerfilFieldRefInput<$PrismaModel>
    in?: $Enums.Perfil[] | ListEnumPerfilFieldRefInput<$PrismaModel>
    notIn?: $Enums.Perfil[] | ListEnumPerfilFieldRefInput<$PrismaModel>
    not?: NestedEnumPerfilWithAggregatesFilter<$PrismaModel> | $Enums.Perfil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPerfilFilter<$PrismaModel>
    _max?: NestedEnumPerfilFilter<$PrismaModel>
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

  export type NestedEnumStatusProjetoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProjeto | EnumStatusProjetoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProjeto[] | ListEnumStatusProjetoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProjeto[] | ListEnumStatusProjetoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusProjetoFilter<$PrismaModel> | $Enums.StatusProjeto
  }

  export type NestedEnumStatusProjetoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProjeto | EnumStatusProjetoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProjeto[] | ListEnumStatusProjetoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProjeto[] | ListEnumStatusProjetoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusProjetoWithAggregatesFilter<$PrismaModel> | $Enums.StatusProjeto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusProjetoFilter<$PrismaModel>
    _max?: NestedEnumStatusProjetoFilter<$PrismaModel>
  }

  export type NestedEnumPapelProjetoFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelProjeto | EnumPapelProjetoFieldRefInput<$PrismaModel>
    in?: $Enums.PapelProjeto[] | ListEnumPapelProjetoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PapelProjeto[] | ListEnumPapelProjetoFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelProjetoFilter<$PrismaModel> | $Enums.PapelProjeto
  }

  export type NestedEnumPapelProjetoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelProjeto | EnumPapelProjetoFieldRefInput<$PrismaModel>
    in?: $Enums.PapelProjeto[] | ListEnumPapelProjetoFieldRefInput<$PrismaModel>
    notIn?: $Enums.PapelProjeto[] | ListEnumPapelProjetoFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelProjetoWithAggregatesFilter<$PrismaModel> | $Enums.PapelProjeto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPapelProjetoFilter<$PrismaModel>
    _max?: NestedEnumPapelProjetoFilter<$PrismaModel>
  }

  export type ProjetoCreateWithoutCriadorInput = {
    id?: string
    nomeProjeto: string
    descricao?: string | null
    status?: $Enums.StatusProjeto
    membros?: ProjetoUsuarioCreateNestedManyWithoutProjetoInput
    brainstormings?: BrainstormingProjetoCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoUncheckedCreateWithoutCriadorInput = {
    id?: string
    nomeProjeto: string
    descricao?: string | null
    status?: $Enums.StatusProjeto
    membros?: ProjetoUsuarioUncheckedCreateNestedManyWithoutProjetoInput
    brainstormings?: BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoCreateOrConnectWithoutCriadorInput = {
    where: ProjetoWhereUniqueInput
    create: XOR<ProjetoCreateWithoutCriadorInput, ProjetoUncheckedCreateWithoutCriadorInput>
  }

  export type ProjetoCreateManyCriadorInputEnvelope = {
    data: ProjetoCreateManyCriadorInput | ProjetoCreateManyCriadorInput[]
    skipDuplicates?: boolean
  }

  export type BrainstormingCreateWithoutCriadorInput = {
    id?: string
    titulo: string
    projetoRelacionado: string
    data: string
    horario: string
    historiasUsuario: string
    projetos?: BrainstormingProjetoCreateNestedManyWithoutBrainstormingInput
  }

  export type BrainstormingUncheckedCreateWithoutCriadorInput = {
    id?: string
    titulo: string
    projetoRelacionado: string
    data: string
    horario: string
    historiasUsuario: string
    projetos?: BrainstormingProjetoUncheckedCreateNestedManyWithoutBrainstormingInput
  }

  export type BrainstormingCreateOrConnectWithoutCriadorInput = {
    where: BrainstormingWhereUniqueInput
    create: XOR<BrainstormingCreateWithoutCriadorInput, BrainstormingUncheckedCreateWithoutCriadorInput>
  }

  export type BrainstormingCreateManyCriadorInputEnvelope = {
    data: BrainstormingCreateManyCriadorInput | BrainstormingCreateManyCriadorInput[]
    skipDuplicates?: boolean
  }

  export type ProjetoUsuarioCreateWithoutMembroInput = {
    id?: string
    nomeMembro: string
    papelNoProjeto: $Enums.PapelProjeto
    projeto: ProjetoCreateNestedOneWithoutMembrosInput
    membroPorEmail: UsuarioCreateNestedOneWithoutParticipacoesPorEmailInput
  }

  export type ProjetoUsuarioUncheckedCreateWithoutMembroInput = {
    id?: string
    projetoId: string
    nomeMembro: string
    emailMembro: string
    papelNoProjeto: $Enums.PapelProjeto
  }

  export type ProjetoUsuarioCreateOrConnectWithoutMembroInput = {
    where: ProjetoUsuarioWhereUniqueInput
    create: XOR<ProjetoUsuarioCreateWithoutMembroInput, ProjetoUsuarioUncheckedCreateWithoutMembroInput>
  }

  export type ProjetoUsuarioCreateManyMembroInputEnvelope = {
    data: ProjetoUsuarioCreateManyMembroInput | ProjetoUsuarioCreateManyMembroInput[]
    skipDuplicates?: boolean
  }

  export type ProjetoUsuarioCreateWithoutMembroPorEmailInput = {
    id?: string
    nomeMembro: string
    papelNoProjeto: $Enums.PapelProjeto
    projeto: ProjetoCreateNestedOneWithoutMembrosInput
    membro: UsuarioCreateNestedOneWithoutParticipacoesProjetoInput
  }

  export type ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput = {
    id?: string
    projetoId: string
    membroId: string
    nomeMembro: string
    papelNoProjeto: $Enums.PapelProjeto
  }

  export type ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput = {
    where: ProjetoUsuarioWhereUniqueInput
    create: XOR<ProjetoUsuarioCreateWithoutMembroPorEmailInput, ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput>
  }

  export type ProjetoUsuarioCreateManyMembroPorEmailInputEnvelope = {
    data: ProjetoUsuarioCreateManyMembroPorEmailInput | ProjetoUsuarioCreateManyMembroPorEmailInput[]
    skipDuplicates?: boolean
  }

  export type ProjetoUpsertWithWhereUniqueWithoutCriadorInput = {
    where: ProjetoWhereUniqueInput
    update: XOR<ProjetoUpdateWithoutCriadorInput, ProjetoUncheckedUpdateWithoutCriadorInput>
    create: XOR<ProjetoCreateWithoutCriadorInput, ProjetoUncheckedCreateWithoutCriadorInput>
  }

  export type ProjetoUpdateWithWhereUniqueWithoutCriadorInput = {
    where: ProjetoWhereUniqueInput
    data: XOR<ProjetoUpdateWithoutCriadorInput, ProjetoUncheckedUpdateWithoutCriadorInput>
  }

  export type ProjetoUpdateManyWithWhereWithoutCriadorInput = {
    where: ProjetoScalarWhereInput
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyWithoutCriadorInput>
  }

  export type ProjetoScalarWhereInput = {
    AND?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
    OR?: ProjetoScalarWhereInput[]
    NOT?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
    id?: StringFilter<"Projeto"> | string
    nomeProjeto?: StringFilter<"Projeto"> | string
    descricao?: StringNullableFilter<"Projeto"> | string | null
    criadorId?: StringFilter<"Projeto"> | string
    status?: EnumStatusProjetoFilter<"Projeto"> | $Enums.StatusProjeto
  }

  export type BrainstormingUpsertWithWhereUniqueWithoutCriadorInput = {
    where: BrainstormingWhereUniqueInput
    update: XOR<BrainstormingUpdateWithoutCriadorInput, BrainstormingUncheckedUpdateWithoutCriadorInput>
    create: XOR<BrainstormingCreateWithoutCriadorInput, BrainstormingUncheckedCreateWithoutCriadorInput>
  }

  export type BrainstormingUpdateWithWhereUniqueWithoutCriadorInput = {
    where: BrainstormingWhereUniqueInput
    data: XOR<BrainstormingUpdateWithoutCriadorInput, BrainstormingUncheckedUpdateWithoutCriadorInput>
  }

  export type BrainstormingUpdateManyWithWhereWithoutCriadorInput = {
    where: BrainstormingScalarWhereInput
    data: XOR<BrainstormingUpdateManyMutationInput, BrainstormingUncheckedUpdateManyWithoutCriadorInput>
  }

  export type BrainstormingScalarWhereInput = {
    AND?: BrainstormingScalarWhereInput | BrainstormingScalarWhereInput[]
    OR?: BrainstormingScalarWhereInput[]
    NOT?: BrainstormingScalarWhereInput | BrainstormingScalarWhereInput[]
    id?: StringFilter<"Brainstorming"> | string
    criadorId?: StringFilter<"Brainstorming"> | string
    titulo?: StringFilter<"Brainstorming"> | string
    projetoRelacionado?: StringFilter<"Brainstorming"> | string
    data?: StringFilter<"Brainstorming"> | string
    horario?: StringFilter<"Brainstorming"> | string
    historiasUsuario?: StringFilter<"Brainstorming"> | string
  }

  export type ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroInput = {
    where: ProjetoUsuarioWhereUniqueInput
    update: XOR<ProjetoUsuarioUpdateWithoutMembroInput, ProjetoUsuarioUncheckedUpdateWithoutMembroInput>
    create: XOR<ProjetoUsuarioCreateWithoutMembroInput, ProjetoUsuarioUncheckedCreateWithoutMembroInput>
  }

  export type ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroInput = {
    where: ProjetoUsuarioWhereUniqueInput
    data: XOR<ProjetoUsuarioUpdateWithoutMembroInput, ProjetoUsuarioUncheckedUpdateWithoutMembroInput>
  }

  export type ProjetoUsuarioUpdateManyWithWhereWithoutMembroInput = {
    where: ProjetoUsuarioScalarWhereInput
    data: XOR<ProjetoUsuarioUpdateManyMutationInput, ProjetoUsuarioUncheckedUpdateManyWithoutMembroInput>
  }

  export type ProjetoUsuarioScalarWhereInput = {
    AND?: ProjetoUsuarioScalarWhereInput | ProjetoUsuarioScalarWhereInput[]
    OR?: ProjetoUsuarioScalarWhereInput[]
    NOT?: ProjetoUsuarioScalarWhereInput | ProjetoUsuarioScalarWhereInput[]
    id?: StringFilter<"ProjetoUsuario"> | string
    projetoId?: StringFilter<"ProjetoUsuario"> | string
    membroId?: StringFilter<"ProjetoUsuario"> | string
    nomeMembro?: StringFilter<"ProjetoUsuario"> | string
    emailMembro?: StringFilter<"ProjetoUsuario"> | string
    papelNoProjeto?: EnumPapelProjetoFilter<"ProjetoUsuario"> | $Enums.PapelProjeto
  }

  export type ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroPorEmailInput = {
    where: ProjetoUsuarioWhereUniqueInput
    update: XOR<ProjetoUsuarioUpdateWithoutMembroPorEmailInput, ProjetoUsuarioUncheckedUpdateWithoutMembroPorEmailInput>
    create: XOR<ProjetoUsuarioCreateWithoutMembroPorEmailInput, ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput>
  }

  export type ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroPorEmailInput = {
    where: ProjetoUsuarioWhereUniqueInput
    data: XOR<ProjetoUsuarioUpdateWithoutMembroPorEmailInput, ProjetoUsuarioUncheckedUpdateWithoutMembroPorEmailInput>
  }

  export type ProjetoUsuarioUpdateManyWithWhereWithoutMembroPorEmailInput = {
    where: ProjetoUsuarioScalarWhereInput
    data: XOR<ProjetoUsuarioUpdateManyMutationInput, ProjetoUsuarioUncheckedUpdateManyWithoutMembroPorEmailInput>
  }

  export type UsuarioCreateWithoutProjetosCriadosInput = {
    id?: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin?: number
    tentativasExclusao?: number
    bloqueadoAte?: Date | string | null
    tokenRedefinirSenha?: string | null
    expiraRedefinirSenha?: Date | string | null
    brainstormingsCriados?: BrainstormingCreateNestedManyWithoutCriadorInput
    participacoesProjeto?: ProjetoUsuarioCreateNestedManyWithoutMembroInput
    participacoesPorEmail?: ProjetoUsuarioCreateNestedManyWithoutMembroPorEmailInput
  }

  export type UsuarioUncheckedCreateWithoutProjetosCriadosInput = {
    id?: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin?: number
    tentativasExclusao?: number
    bloqueadoAte?: Date | string | null
    tokenRedefinirSenha?: string | null
    expiraRedefinirSenha?: Date | string | null
    brainstormingsCriados?: BrainstormingUncheckedCreateNestedManyWithoutCriadorInput
    participacoesProjeto?: ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroInput
    participacoesPorEmail?: ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroPorEmailInput
  }

  export type UsuarioCreateOrConnectWithoutProjetosCriadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProjetosCriadosInput, UsuarioUncheckedCreateWithoutProjetosCriadosInput>
  }

  export type ProjetoUsuarioCreateWithoutProjetoInput = {
    id?: string
    nomeMembro: string
    papelNoProjeto: $Enums.PapelProjeto
    membro: UsuarioCreateNestedOneWithoutParticipacoesProjetoInput
    membroPorEmail: UsuarioCreateNestedOneWithoutParticipacoesPorEmailInput
  }

  export type ProjetoUsuarioUncheckedCreateWithoutProjetoInput = {
    id?: string
    membroId: string
    nomeMembro: string
    emailMembro: string
    papelNoProjeto: $Enums.PapelProjeto
  }

  export type ProjetoUsuarioCreateOrConnectWithoutProjetoInput = {
    where: ProjetoUsuarioWhereUniqueInput
    create: XOR<ProjetoUsuarioCreateWithoutProjetoInput, ProjetoUsuarioUncheckedCreateWithoutProjetoInput>
  }

  export type ProjetoUsuarioCreateManyProjetoInputEnvelope = {
    data: ProjetoUsuarioCreateManyProjetoInput | ProjetoUsuarioCreateManyProjetoInput[]
    skipDuplicates?: boolean
  }

  export type BrainstormingProjetoCreateWithoutProjetoInput = {
    brainstorming: BrainstormingCreateNestedOneWithoutProjetosInput
  }

  export type BrainstormingProjetoUncheckedCreateWithoutProjetoInput = {
    brainstormingId: string
  }

  export type BrainstormingProjetoCreateOrConnectWithoutProjetoInput = {
    where: BrainstormingProjetoWhereUniqueInput
    create: XOR<BrainstormingProjetoCreateWithoutProjetoInput, BrainstormingProjetoUncheckedCreateWithoutProjetoInput>
  }

  export type BrainstormingProjetoCreateManyProjetoInputEnvelope = {
    data: BrainstormingProjetoCreateManyProjetoInput | BrainstormingProjetoCreateManyProjetoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutProjetosCriadosInput = {
    update: XOR<UsuarioUpdateWithoutProjetosCriadosInput, UsuarioUncheckedUpdateWithoutProjetosCriadosInput>
    create: XOR<UsuarioCreateWithoutProjetosCriadosInput, UsuarioUncheckedCreateWithoutProjetosCriadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProjetosCriadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProjetosCriadosInput, UsuarioUncheckedUpdateWithoutProjetosCriadosInput>
  }

  export type UsuarioUpdateWithoutProjetosCriadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    brainstormingsCriados?: BrainstormingUpdateManyWithoutCriadorNestedInput
    participacoesProjeto?: ProjetoUsuarioUpdateManyWithoutMembroNestedInput
    participacoesPorEmail?: ProjetoUsuarioUpdateManyWithoutMembroPorEmailNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProjetosCriadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    brainstormingsCriados?: BrainstormingUncheckedUpdateManyWithoutCriadorNestedInput
    participacoesProjeto?: ProjetoUsuarioUncheckedUpdateManyWithoutMembroNestedInput
    participacoesPorEmail?: ProjetoUsuarioUncheckedUpdateManyWithoutMembroPorEmailNestedInput
  }

  export type ProjetoUsuarioUpsertWithWhereUniqueWithoutProjetoInput = {
    where: ProjetoUsuarioWhereUniqueInput
    update: XOR<ProjetoUsuarioUpdateWithoutProjetoInput, ProjetoUsuarioUncheckedUpdateWithoutProjetoInput>
    create: XOR<ProjetoUsuarioCreateWithoutProjetoInput, ProjetoUsuarioUncheckedCreateWithoutProjetoInput>
  }

  export type ProjetoUsuarioUpdateWithWhereUniqueWithoutProjetoInput = {
    where: ProjetoUsuarioWhereUniqueInput
    data: XOR<ProjetoUsuarioUpdateWithoutProjetoInput, ProjetoUsuarioUncheckedUpdateWithoutProjetoInput>
  }

  export type ProjetoUsuarioUpdateManyWithWhereWithoutProjetoInput = {
    where: ProjetoUsuarioScalarWhereInput
    data: XOR<ProjetoUsuarioUpdateManyMutationInput, ProjetoUsuarioUncheckedUpdateManyWithoutProjetoInput>
  }

  export type BrainstormingProjetoUpsertWithWhereUniqueWithoutProjetoInput = {
    where: BrainstormingProjetoWhereUniqueInput
    update: XOR<BrainstormingProjetoUpdateWithoutProjetoInput, BrainstormingProjetoUncheckedUpdateWithoutProjetoInput>
    create: XOR<BrainstormingProjetoCreateWithoutProjetoInput, BrainstormingProjetoUncheckedCreateWithoutProjetoInput>
  }

  export type BrainstormingProjetoUpdateWithWhereUniqueWithoutProjetoInput = {
    where: BrainstormingProjetoWhereUniqueInput
    data: XOR<BrainstormingProjetoUpdateWithoutProjetoInput, BrainstormingProjetoUncheckedUpdateWithoutProjetoInput>
  }

  export type BrainstormingProjetoUpdateManyWithWhereWithoutProjetoInput = {
    where: BrainstormingProjetoScalarWhereInput
    data: XOR<BrainstormingProjetoUpdateManyMutationInput, BrainstormingProjetoUncheckedUpdateManyWithoutProjetoInput>
  }

  export type BrainstormingProjetoScalarWhereInput = {
    AND?: BrainstormingProjetoScalarWhereInput | BrainstormingProjetoScalarWhereInput[]
    OR?: BrainstormingProjetoScalarWhereInput[]
    NOT?: BrainstormingProjetoScalarWhereInput | BrainstormingProjetoScalarWhereInput[]
    projetoId?: StringFilter<"BrainstormingProjeto"> | string
    brainstormingId?: StringFilter<"BrainstormingProjeto"> | string
  }

  export type UsuarioCreateWithoutBrainstormingsCriadosInput = {
    id?: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin?: number
    tentativasExclusao?: number
    bloqueadoAte?: Date | string | null
    tokenRedefinirSenha?: string | null
    expiraRedefinirSenha?: Date | string | null
    projetosCriados?: ProjetoCreateNestedManyWithoutCriadorInput
    participacoesProjeto?: ProjetoUsuarioCreateNestedManyWithoutMembroInput
    participacoesPorEmail?: ProjetoUsuarioCreateNestedManyWithoutMembroPorEmailInput
  }

  export type UsuarioUncheckedCreateWithoutBrainstormingsCriadosInput = {
    id?: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin?: number
    tentativasExclusao?: number
    bloqueadoAte?: Date | string | null
    tokenRedefinirSenha?: string | null
    expiraRedefinirSenha?: Date | string | null
    projetosCriados?: ProjetoUncheckedCreateNestedManyWithoutCriadorInput
    participacoesProjeto?: ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroInput
    participacoesPorEmail?: ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroPorEmailInput
  }

  export type UsuarioCreateOrConnectWithoutBrainstormingsCriadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutBrainstormingsCriadosInput, UsuarioUncheckedCreateWithoutBrainstormingsCriadosInput>
  }

  export type BrainstormingProjetoCreateWithoutBrainstormingInput = {
    projeto: ProjetoCreateNestedOneWithoutBrainstormingsInput
  }

  export type BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput = {
    projetoId: string
  }

  export type BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput = {
    where: BrainstormingProjetoWhereUniqueInput
    create: XOR<BrainstormingProjetoCreateWithoutBrainstormingInput, BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput>
  }

  export type BrainstormingProjetoCreateManyBrainstormingInputEnvelope = {
    data: BrainstormingProjetoCreateManyBrainstormingInput | BrainstormingProjetoCreateManyBrainstormingInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutBrainstormingsCriadosInput = {
    update: XOR<UsuarioUpdateWithoutBrainstormingsCriadosInput, UsuarioUncheckedUpdateWithoutBrainstormingsCriadosInput>
    create: XOR<UsuarioCreateWithoutBrainstormingsCriadosInput, UsuarioUncheckedCreateWithoutBrainstormingsCriadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutBrainstormingsCriadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutBrainstormingsCriadosInput, UsuarioUncheckedUpdateWithoutBrainstormingsCriadosInput>
  }

  export type UsuarioUpdateWithoutBrainstormingsCriadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projetosCriados?: ProjetoUpdateManyWithoutCriadorNestedInput
    participacoesProjeto?: ProjetoUsuarioUpdateManyWithoutMembroNestedInput
    participacoesPorEmail?: ProjetoUsuarioUpdateManyWithoutMembroPorEmailNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutBrainstormingsCriadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projetosCriados?: ProjetoUncheckedUpdateManyWithoutCriadorNestedInput
    participacoesProjeto?: ProjetoUsuarioUncheckedUpdateManyWithoutMembroNestedInput
    participacoesPorEmail?: ProjetoUsuarioUncheckedUpdateManyWithoutMembroPorEmailNestedInput
  }

  export type BrainstormingProjetoUpsertWithWhereUniqueWithoutBrainstormingInput = {
    where: BrainstormingProjetoWhereUniqueInput
    update: XOR<BrainstormingProjetoUpdateWithoutBrainstormingInput, BrainstormingProjetoUncheckedUpdateWithoutBrainstormingInput>
    create: XOR<BrainstormingProjetoCreateWithoutBrainstormingInput, BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput>
  }

  export type BrainstormingProjetoUpdateWithWhereUniqueWithoutBrainstormingInput = {
    where: BrainstormingProjetoWhereUniqueInput
    data: XOR<BrainstormingProjetoUpdateWithoutBrainstormingInput, BrainstormingProjetoUncheckedUpdateWithoutBrainstormingInput>
  }

  export type BrainstormingProjetoUpdateManyWithWhereWithoutBrainstormingInput = {
    where: BrainstormingProjetoScalarWhereInput
    data: XOR<BrainstormingProjetoUpdateManyMutationInput, BrainstormingProjetoUncheckedUpdateManyWithoutBrainstormingInput>
  }

  export type ProjetoCreateWithoutMembrosInput = {
    id?: string
    nomeProjeto: string
    descricao?: string | null
    status?: $Enums.StatusProjeto
    criador: UsuarioCreateNestedOneWithoutProjetosCriadosInput
    brainstormings?: BrainstormingProjetoCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoUncheckedCreateWithoutMembrosInput = {
    id?: string
    nomeProjeto: string
    descricao?: string | null
    criadorId: string
    status?: $Enums.StatusProjeto
    brainstormings?: BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoCreateOrConnectWithoutMembrosInput = {
    where: ProjetoWhereUniqueInput
    create: XOR<ProjetoCreateWithoutMembrosInput, ProjetoUncheckedCreateWithoutMembrosInput>
  }

  export type UsuarioCreateWithoutParticipacoesProjetoInput = {
    id?: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin?: number
    tentativasExclusao?: number
    bloqueadoAte?: Date | string | null
    tokenRedefinirSenha?: string | null
    expiraRedefinirSenha?: Date | string | null
    projetosCriados?: ProjetoCreateNestedManyWithoutCriadorInput
    brainstormingsCriados?: BrainstormingCreateNestedManyWithoutCriadorInput
    participacoesPorEmail?: ProjetoUsuarioCreateNestedManyWithoutMembroPorEmailInput
  }

  export type UsuarioUncheckedCreateWithoutParticipacoesProjetoInput = {
    id?: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin?: number
    tentativasExclusao?: number
    bloqueadoAte?: Date | string | null
    tokenRedefinirSenha?: string | null
    expiraRedefinirSenha?: Date | string | null
    projetosCriados?: ProjetoUncheckedCreateNestedManyWithoutCriadorInput
    brainstormingsCriados?: BrainstormingUncheckedCreateNestedManyWithoutCriadorInput
    participacoesPorEmail?: ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroPorEmailInput
  }

  export type UsuarioCreateOrConnectWithoutParticipacoesProjetoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutParticipacoesProjetoInput, UsuarioUncheckedCreateWithoutParticipacoesProjetoInput>
  }

  export type UsuarioCreateWithoutParticipacoesPorEmailInput = {
    id?: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin?: number
    tentativasExclusao?: number
    bloqueadoAte?: Date | string | null
    tokenRedefinirSenha?: string | null
    expiraRedefinirSenha?: Date | string | null
    projetosCriados?: ProjetoCreateNestedManyWithoutCriadorInput
    brainstormingsCriados?: BrainstormingCreateNestedManyWithoutCriadorInput
    participacoesProjeto?: ProjetoUsuarioCreateNestedManyWithoutMembroInput
  }

  export type UsuarioUncheckedCreateWithoutParticipacoesPorEmailInput = {
    id?: string
    nomeCompleto: string
    email: string
    senha: string
    genero: $Enums.Genero
    dataNascimento: string
    perfil: $Enums.Perfil
    organizacao: string
    tentativasLogin?: number
    tentativasExclusao?: number
    bloqueadoAte?: Date | string | null
    tokenRedefinirSenha?: string | null
    expiraRedefinirSenha?: Date | string | null
    projetosCriados?: ProjetoUncheckedCreateNestedManyWithoutCriadorInput
    brainstormingsCriados?: BrainstormingUncheckedCreateNestedManyWithoutCriadorInput
    participacoesProjeto?: ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroInput
  }

  export type UsuarioCreateOrConnectWithoutParticipacoesPorEmailInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutParticipacoesPorEmailInput, UsuarioUncheckedCreateWithoutParticipacoesPorEmailInput>
  }

  export type ProjetoUpsertWithoutMembrosInput = {
    update: XOR<ProjetoUpdateWithoutMembrosInput, ProjetoUncheckedUpdateWithoutMembrosInput>
    create: XOR<ProjetoCreateWithoutMembrosInput, ProjetoUncheckedCreateWithoutMembrosInput>
    where?: ProjetoWhereInput
  }

  export type ProjetoUpdateToOneWithWhereWithoutMembrosInput = {
    where?: ProjetoWhereInput
    data: XOR<ProjetoUpdateWithoutMembrosInput, ProjetoUncheckedUpdateWithoutMembrosInput>
  }

  export type ProjetoUpdateWithoutMembrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusProjetoFieldUpdateOperationsInput | $Enums.StatusProjeto
    criador?: UsuarioUpdateOneRequiredWithoutProjetosCriadosNestedInput
    brainstormings?: BrainstormingProjetoUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateWithoutMembrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusProjetoFieldUpdateOperationsInput | $Enums.StatusProjeto
    brainstormings?: BrainstormingProjetoUncheckedUpdateManyWithoutProjetoNestedInput
  }

  export type UsuarioUpsertWithoutParticipacoesProjetoInput = {
    update: XOR<UsuarioUpdateWithoutParticipacoesProjetoInput, UsuarioUncheckedUpdateWithoutParticipacoesProjetoInput>
    create: XOR<UsuarioCreateWithoutParticipacoesProjetoInput, UsuarioUncheckedCreateWithoutParticipacoesProjetoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutParticipacoesProjetoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutParticipacoesProjetoInput, UsuarioUncheckedUpdateWithoutParticipacoesProjetoInput>
  }

  export type UsuarioUpdateWithoutParticipacoesProjetoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projetosCriados?: ProjetoUpdateManyWithoutCriadorNestedInput
    brainstormingsCriados?: BrainstormingUpdateManyWithoutCriadorNestedInput
    participacoesPorEmail?: ProjetoUsuarioUpdateManyWithoutMembroPorEmailNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutParticipacoesProjetoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projetosCriados?: ProjetoUncheckedUpdateManyWithoutCriadorNestedInput
    brainstormingsCriados?: BrainstormingUncheckedUpdateManyWithoutCriadorNestedInput
    participacoesPorEmail?: ProjetoUsuarioUncheckedUpdateManyWithoutMembroPorEmailNestedInput
  }

  export type UsuarioUpsertWithoutParticipacoesPorEmailInput = {
    update: XOR<UsuarioUpdateWithoutParticipacoesPorEmailInput, UsuarioUncheckedUpdateWithoutParticipacoesPorEmailInput>
    create: XOR<UsuarioCreateWithoutParticipacoesPorEmailInput, UsuarioUncheckedCreateWithoutParticipacoesPorEmailInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutParticipacoesPorEmailInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutParticipacoesPorEmailInput, UsuarioUncheckedUpdateWithoutParticipacoesPorEmailInput>
  }

  export type UsuarioUpdateWithoutParticipacoesPorEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projetosCriados?: ProjetoUpdateManyWithoutCriadorNestedInput
    brainstormingsCriados?: BrainstormingUpdateManyWithoutCriadorNestedInput
    participacoesProjeto?: ProjetoUsuarioUpdateManyWithoutMembroNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutParticipacoesPorEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataNascimento?: StringFieldUpdateOperationsInput | string
    perfil?: EnumPerfilFieldUpdateOperationsInput | $Enums.Perfil
    organizacao?: StringFieldUpdateOperationsInput | string
    tentativasLogin?: IntFieldUpdateOperationsInput | number
    tentativasExclusao?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenRedefinirSenha?: NullableStringFieldUpdateOperationsInput | string | null
    expiraRedefinirSenha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projetosCriados?: ProjetoUncheckedUpdateManyWithoutCriadorNestedInput
    brainstormingsCriados?: BrainstormingUncheckedUpdateManyWithoutCriadorNestedInput
    participacoesProjeto?: ProjetoUsuarioUncheckedUpdateManyWithoutMembroNestedInput
  }

  export type ProjetoCreateWithoutBrainstormingsInput = {
    id?: string
    nomeProjeto: string
    descricao?: string | null
    status?: $Enums.StatusProjeto
    criador: UsuarioCreateNestedOneWithoutProjetosCriadosInput
    membros?: ProjetoUsuarioCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoUncheckedCreateWithoutBrainstormingsInput = {
    id?: string
    nomeProjeto: string
    descricao?: string | null
    criadorId: string
    status?: $Enums.StatusProjeto
    membros?: ProjetoUsuarioUncheckedCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoCreateOrConnectWithoutBrainstormingsInput = {
    where: ProjetoWhereUniqueInput
    create: XOR<ProjetoCreateWithoutBrainstormingsInput, ProjetoUncheckedCreateWithoutBrainstormingsInput>
  }

  export type BrainstormingCreateWithoutProjetosInput = {
    id?: string
    titulo: string
    projetoRelacionado: string
    data: string
    horario: string
    historiasUsuario: string
    criador: UsuarioCreateNestedOneWithoutBrainstormingsCriadosInput
  }

  export type BrainstormingUncheckedCreateWithoutProjetosInput = {
    id?: string
    criadorId: string
    titulo: string
    projetoRelacionado: string
    data: string
    horario: string
    historiasUsuario: string
  }

  export type BrainstormingCreateOrConnectWithoutProjetosInput = {
    where: BrainstormingWhereUniqueInput
    create: XOR<BrainstormingCreateWithoutProjetosInput, BrainstormingUncheckedCreateWithoutProjetosInput>
  }

  export type ProjetoUpsertWithoutBrainstormingsInput = {
    update: XOR<ProjetoUpdateWithoutBrainstormingsInput, ProjetoUncheckedUpdateWithoutBrainstormingsInput>
    create: XOR<ProjetoCreateWithoutBrainstormingsInput, ProjetoUncheckedCreateWithoutBrainstormingsInput>
    where?: ProjetoWhereInput
  }

  export type ProjetoUpdateToOneWithWhereWithoutBrainstormingsInput = {
    where?: ProjetoWhereInput
    data: XOR<ProjetoUpdateWithoutBrainstormingsInput, ProjetoUncheckedUpdateWithoutBrainstormingsInput>
  }

  export type ProjetoUpdateWithoutBrainstormingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusProjetoFieldUpdateOperationsInput | $Enums.StatusProjeto
    criador?: UsuarioUpdateOneRequiredWithoutProjetosCriadosNestedInput
    membros?: ProjetoUsuarioUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateWithoutBrainstormingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusProjetoFieldUpdateOperationsInput | $Enums.StatusProjeto
    membros?: ProjetoUsuarioUncheckedUpdateManyWithoutProjetoNestedInput
  }

  export type BrainstormingUpsertWithoutProjetosInput = {
    update: XOR<BrainstormingUpdateWithoutProjetosInput, BrainstormingUncheckedUpdateWithoutProjetosInput>
    create: XOR<BrainstormingCreateWithoutProjetosInput, BrainstormingUncheckedCreateWithoutProjetosInput>
    where?: BrainstormingWhereInput
  }

  export type BrainstormingUpdateToOneWithWhereWithoutProjetosInput = {
    where?: BrainstormingWhereInput
    data: XOR<BrainstormingUpdateWithoutProjetosInput, BrainstormingUncheckedUpdateWithoutProjetosInput>
  }

  export type BrainstormingUpdateWithoutProjetosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    projetoRelacionado?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    historiasUsuario?: StringFieldUpdateOperationsInput | string
    criador?: UsuarioUpdateOneRequiredWithoutBrainstormingsCriadosNestedInput
  }

  export type BrainstormingUncheckedUpdateWithoutProjetosInput = {
    id?: StringFieldUpdateOperationsInput | string
    criadorId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    projetoRelacionado?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    historiasUsuario?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoCreateManyCriadorInput = {
    id?: string
    nomeProjeto: string
    descricao?: string | null
    status?: $Enums.StatusProjeto
  }

  export type BrainstormingCreateManyCriadorInput = {
    id?: string
    titulo: string
    projetoRelacionado: string
    data: string
    horario: string
    historiasUsuario: string
  }

  export type ProjetoUsuarioCreateManyMembroInput = {
    id?: string
    projetoId: string
    nomeMembro: string
    emailMembro: string
    papelNoProjeto: $Enums.PapelProjeto
  }

  export type ProjetoUsuarioCreateManyMembroPorEmailInput = {
    id?: string
    projetoId: string
    membroId: string
    nomeMembro: string
    papelNoProjeto: $Enums.PapelProjeto
  }

  export type ProjetoUpdateWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusProjetoFieldUpdateOperationsInput | $Enums.StatusProjeto
    membros?: ProjetoUsuarioUpdateManyWithoutProjetoNestedInput
    brainstormings?: BrainstormingProjetoUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusProjetoFieldUpdateOperationsInput | $Enums.StatusProjeto
    membros?: ProjetoUsuarioUncheckedUpdateManyWithoutProjetoNestedInput
    brainstormings?: BrainstormingProjetoUncheckedUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateManyWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusProjetoFieldUpdateOperationsInput | $Enums.StatusProjeto
  }

  export type BrainstormingUpdateWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    projetoRelacionado?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    historiasUsuario?: StringFieldUpdateOperationsInput | string
    projetos?: BrainstormingProjetoUpdateManyWithoutBrainstormingNestedInput
  }

  export type BrainstormingUncheckedUpdateWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    projetoRelacionado?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    historiasUsuario?: StringFieldUpdateOperationsInput | string
    projetos?: BrainstormingProjetoUncheckedUpdateManyWithoutBrainstormingNestedInput
  }

  export type BrainstormingUncheckedUpdateManyWithoutCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    projetoRelacionado?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    historiasUsuario?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoUsuarioUpdateWithoutMembroInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
    projeto?: ProjetoUpdateOneRequiredWithoutMembrosNestedInput
    membroPorEmail?: UsuarioUpdateOneRequiredWithoutParticipacoesPorEmailNestedInput
  }

  export type ProjetoUsuarioUncheckedUpdateWithoutMembroInput = {
    id?: StringFieldUpdateOperationsInput | string
    projetoId?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    emailMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
  }

  export type ProjetoUsuarioUncheckedUpdateManyWithoutMembroInput = {
    id?: StringFieldUpdateOperationsInput | string
    projetoId?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    emailMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
  }

  export type ProjetoUsuarioUpdateWithoutMembroPorEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
    projeto?: ProjetoUpdateOneRequiredWithoutMembrosNestedInput
    membro?: UsuarioUpdateOneRequiredWithoutParticipacoesProjetoNestedInput
  }

  export type ProjetoUsuarioUncheckedUpdateWithoutMembroPorEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    projetoId?: StringFieldUpdateOperationsInput | string
    membroId?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
  }

  export type ProjetoUsuarioUncheckedUpdateManyWithoutMembroPorEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    projetoId?: StringFieldUpdateOperationsInput | string
    membroId?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
  }

  export type ProjetoUsuarioCreateManyProjetoInput = {
    id?: string
    membroId: string
    nomeMembro: string
    emailMembro: string
    papelNoProjeto: $Enums.PapelProjeto
  }

  export type BrainstormingProjetoCreateManyProjetoInput = {
    brainstormingId: string
  }

  export type ProjetoUsuarioUpdateWithoutProjetoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
    membro?: UsuarioUpdateOneRequiredWithoutParticipacoesProjetoNestedInput
    membroPorEmail?: UsuarioUpdateOneRequiredWithoutParticipacoesPorEmailNestedInput
  }

  export type ProjetoUsuarioUncheckedUpdateWithoutProjetoInput = {
    id?: StringFieldUpdateOperationsInput | string
    membroId?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    emailMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
  }

  export type ProjetoUsuarioUncheckedUpdateManyWithoutProjetoInput = {
    id?: StringFieldUpdateOperationsInput | string
    membroId?: StringFieldUpdateOperationsInput | string
    nomeMembro?: StringFieldUpdateOperationsInput | string
    emailMembro?: StringFieldUpdateOperationsInput | string
    papelNoProjeto?: EnumPapelProjetoFieldUpdateOperationsInput | $Enums.PapelProjeto
  }

  export type BrainstormingProjetoUpdateWithoutProjetoInput = {
    brainstorming?: BrainstormingUpdateOneRequiredWithoutProjetosNestedInput
  }

  export type BrainstormingProjetoUncheckedUpdateWithoutProjetoInput = {
    brainstormingId?: StringFieldUpdateOperationsInput | string
  }

  export type BrainstormingProjetoUncheckedUpdateManyWithoutProjetoInput = {
    brainstormingId?: StringFieldUpdateOperationsInput | string
  }

  export type BrainstormingProjetoCreateManyBrainstormingInput = {
    projetoId: string
  }

  export type BrainstormingProjetoUpdateWithoutBrainstormingInput = {
    projeto?: ProjetoUpdateOneRequiredWithoutBrainstormingsNestedInput
  }

  export type BrainstormingProjetoUncheckedUpdateWithoutBrainstormingInput = {
    projetoId?: StringFieldUpdateOperationsInput | string
  }

  export type BrainstormingProjetoUncheckedUpdateManyWithoutBrainstormingInput = {
    projetoId?: StringFieldUpdateOperationsInput | string
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