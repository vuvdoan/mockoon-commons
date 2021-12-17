import { Header, Route } from './route.model';
import { RouteFolder } from './routeFolder.model';

export type TLSOptionsType = 'PFX' | 'CERT';

/**
 * Node.js TLS options https://nodejs.org/dist/latest-v16.x/docs/api/tls.html#tlscreatesecurecontextoptions
 * Use pfx or cert+key.
 */
export type EnvironmentTLSOptions = {
  // TLS enabled, old `https` flag
  enabled: boolean;
  type: TLSOptionsType;
  // path to PFX or PKCS12 encoded private key and certificate
  pfxPath: string;
  // Path to cert chains in PEM format
  certPath: string;
  // Path to private keys in PEM format
  keyPath: string;
  // Path to CA certificates override
  caPath: string;
  // Password for `pfx` or `!`
  passphrase: string;
};

export type Environment = {
  uuid: string;
  lastMigration: number;
  name: string;
  port: number;
  hostname: string;
  endpointPrefix: string;
  latency: number;
  routes: Route[];
  folders: RouteFolder[];
  proxyMode: boolean;
  proxyRemovePrefix: boolean;
  proxyHost: string;
  proxyReqHeaders: Header[];
  proxyResHeaders: Header[];
  tlsOptions: EnvironmentTLSOptions;
  cors: boolean;
  headers: Header[];
};

export type Environments = Environment[];
