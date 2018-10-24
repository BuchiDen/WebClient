export const CONTACT_ERROR = {
    TYPE3_CONTACT_VERIFICATION: 3,
    TYPE3_CONTACT_DECRYPTION: 2,
    TYPE2_CONTACT_VERIFICATION: 1,
    TYPE1_CONTACT: 0
};

export const API_CUSTOM_ERROR_CODES = {
    APP_VERSION_BAD: 5003,

    API_VERSION_INVALID: 5004,
    API_VERSION_BAD: 5005,
    API_OFFLINE: 7001,

    HUMAN_VERIFICATION_REQUIRED: 9001,

    AUTH_AUTH_ACCOUNT_DISABLED: 10003,

    USER_EXISTS_USERNAME_INVALID_CHARACTERS: 12102,
    USER_EXISTS_USERNAME_SPECIAL_CHAR_START: 12103,
    USER_EXISTS_USERNAME_SPECIAL_CHAR_END: 12104,
    USER_EXISTS_USERNAME_TOO_LONG: 12105,
    USER_EXISTS_USERNAME_ALREADY_USED: 12106,

    USER_CREATE_TOKEN_INVALID: 12087,
    USER_UPDATE_SIGNATURE_TOO_LARGE: 12010,

    MESSAGE_VALIDATE_KEY_ID_NOT_ASSOCIATED: 15213,
    EVENTS_ID_INVALID: 18001,

    PAYMENTS_PAYPAL_CONNECTION_EXCEPTION: 22802,

    FILTER_CREATE_TOO_MANY_ACTIVE: 50016,

    MESSAGE_GET_NOT_EXIST: 15052,
    MESSAGE_SEARCH_QUERY_SYNTAX: 15225,
    MESSAGE_UPDATE_DRAFT_NOT_EXIST: 15033,
    MESSAGE_UPDATE_DRAFT_NOT_DRAFT: 15034,

    KEY_GET_INPUT_INVALID: 33101,
    KEY_GET_ADDRESS_MISSING: 33102,
    KEY_GET_DOMAIN_MISSING_MX: 33103,
    INCOMING_DEFAULT_UPDATE_NOT_EXIST: 35023
};

export const EVENT_ERRORS = {
    MAIL: 1,
    CONTACTS: 2
};
