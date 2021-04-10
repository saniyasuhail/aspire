/**
 * Class representation of a user
 * 
 * @author Joshua Kissoon
 * @since 20170709
 */
export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    enabled: string;
    user_type_id: number;
    is_temporary_password:boolean;
    client_id: number;
    roles: any;
    permissions: any;
    type: any;
    selected: boolean;
    client: any;
    temporarily_invited: boolean;
    short_name: string;
    avatar_color: string;
    
    constructor() {
        this.id = 0;
        this.client = {};
        this.roles = [];
    }

    loadFromMap(data: any) {
        this.id = data.id;
        this.email = data.email;
        this.name = data.name;
        this.enabled = data.enabled;
        this.user_type_id = data.user_type_id;
        this.client_id = data.client_id;
        this.is_temporary_password = data.is_temporary_password;
        this.roles = (data.roles == null) ? [] : data.roles;
        this.permissions = (data.permissions == null) ? [] : data.permissions;
        this.type = (data.type == null) ? [] : data.type;
        this.client = data.client;
    }

    hasRole(id: number) {
        if (this.roles == null) {
            return false;
        }

        for (var role of this.roles) {
            if (role.id == id) {
                return true;
            }
        }

        return false;
    }

    hasPermission(slug: string) {
        if (this.permissions == null) {
            return false;
        }

        for (var permission of this.permissions) {
            if (permission.slug == slug) {
                return true;
            }
        }

        return false;
    }


}
