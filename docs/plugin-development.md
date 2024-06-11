# Viam - Grafana Data Source Plugin - Development Environment

Use these instructions to set up your personal plugin development environment to modify, update, enhance the plugin and create a new release.


## Development Environment Setup

**Prerequisites:**
- Docker runtime environment installed and started e.g Docker desktop

Clone the Github repository and run the following commands from the root directory.

**1. Install dependencies**

   ```bash
   npm install
   ```

**2. Build plugin in development mode and run in watch mode**

   ```bash
   npm run dev
   ```
**3. [optional] Run the tests (using Jest)**

   ```bash
   # Runs the tests and watches for changes, requires git init first
   npm run test

   # Exits after running all the tests
   npm run test:ci
   ```

**4. Spin up a Grafana instance and run the plugin inside it (using Docker)**

   ```bash
   npm run server
   ```

**5. [optional] Run the E2E tests (using Cypress)**

   ```bash
   # Spins up a Grafana instance first that we tests against
   npm run server

   # Starts the tests
   npm run e2e
   ```

**6. [optional] Run the linter**

   ```bash
   npm run lint

   # or

   npm run lint:fix
   ```

7. **Open the webbrowser at [localhost:3000](http://localhost:3000)**
    - Credentials: username: admin / password: admin


## Build a New Plugin Release

The following steps will bundle the plugin in a zip file for distribution. It is also used in some of the deployment scenarios documented in the [Readme.md](../README.md).

```
# Creates the build into the "dist" folder
npm run build

# Rename the dist folder
mv dist/ viam-datasource

# Create the zip file in the `releases`folder
zip ./releases/viam-grafana-x.x.x.zip viam-datasource -r

# Verify the zip file
zipinfo releases/viam-grafana-x.x.x.zip
```
To download/reference the zip files use the following url:

https://github.com/viam-soleng/grafana-tabulardata/raw/main/releases/viam-grafana-0.1.0.zip

Otherwise the file will be in the wrong format!

## [optional] Sign Plugin
To make sure the plugins are not altered, you also have the option of signing the plugin.
More information: [Grafana Plugin Signatures](https://grafana.com/docs/grafana/latest/administration/plugin-management/#plugin-signatures)
You can also configure your Grafana instance to allow unsigned plugins: [Allow Unsigned Plugins](https://grafana.com/docs/grafana/latest/administration/plugin-management/#allow-unsigned-plugins)



