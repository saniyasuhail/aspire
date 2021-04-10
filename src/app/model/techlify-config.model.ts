export class TechlifyConfig {
    projectKey: string;
    environment: string;
    authClientSecret: string;
    authGrantType: string;
    apiUrl: string;
    rawConfigs: any;

    constructor(data: any) {
        this.loadFromMap(data);
    }

    loadFromMap(data: any) {
        this.projectKey = data.projectKey;
        this.environment = data.environment;
        this.authClientSecret = data.authClientSecret;
        this.authGrantType = data.authGrantType;
        this.apiUrl = data.apiUrl;

        this.rawConfigs = data;
    }
}
