export const BASE_URL = "http://hometoitalian.com"
export const LOGIN_API = "/index/login";
export const SIGN_UP = "/index/signup"
export const FORGOTPASS_API = "/admin_forgot_password";
export const ACCOUNT_DETAILS = "/admin_detail";
export const ACCOUNT_UPDATE = "/admin_update_profile";
export const UPLOAD_IMAGE = "/admin_upload_image";
export const LOGOUT_USER = "/logout_admin";
export const OTP_VERIFY = "/index/verify_otp_user";
export const RESET_PASSWORD = "/index/reset_instructor_password"


// students
export const GET_STUDENTS = "/user_list"
export const GET_COURSE = "/course_type_list"
export const ADD_STUDENT = "/signup"
export const STU_DEATIL = "/student_detail"
export const DEL_STU = "/student_delete"
export const EDIT_STU = "/student_edit";

// Teaccher Mangenent
export const GET_TEACHERLIST = "/index/teacher_list";
export const POST_TEACHERDETAIL = "/index/teacher_detial";

// events
export const GET_EVENTS = "/admin_event_list"
export const ADD_EVENT = "/event_add"
export const EVENT_DEATIL = "/admin_event_detail"
export const DEL_EVENT = "/event_delete"
export const EDIT_EVENT = "/admin_event_edit";

// transaction
export const GET_TRANSACTION = "v1/admin/transaction";
export const DELETE_TRANSACTION = "v1/admin/transaction";

//offers
export const GET_OFFERS = "v1/admin/offers";
export const OFFER_STATUS = "v1/admin/offerStatusChange";

// notifications
export const GET_NOTIFICATION = "v1/admin/notification";
export const ADD_NOTIFICATION = "v1/admin/notification";

// role
export const EDIT_ROLE = "v1/admin/updateRole/";
export const ADD_ROLE = "v1/admin/addRole";
export const GET_ROLE = "v1/admin/getRole";
export const DELETE_ROLE = "v1/admin/deleteRole";
export const DISABLE_ROLE = "v1/admin/blockRole";

// subadmin

export const GET_SUB_ADMINS = "v1/admin/subAdmin";
export const STATUS_CHANGE = "v1/admin/subAdminstatus";

// cms
export const ADD_CMS = "/cms";
export const GET_CMS = "v1/admin/cms";

// settings
export const ADD_SETTINGS = "v1/admin/setting";
export const GET_SETTINGS = "v1/admin/setting";

//ratings
export const GET_RATINGS = "/rating";

//reports
export const GET_REPORTS = "/report";

//dashboard
export const GET_DASHBOARD = "v1/admin/dashboard";
export const GET_DASHBOARD_COINS = "v1/admin/marketOverView";
export const GET_DASHBOARD_USERS = "v1/admin/totalUser";
export const GET_DASHBOARD_REVENUE = "v1/admin/totalRevenue";

//Faq
export const GET_FAQ = "v1/admin/faq";
export const ADD_FAQ = "v1/admin/faq";

// Revenue
export const GET_PAYMENT = "/payment";
export const GET_REVENUE = "/revenue";
export const REVENUE_HISTORY = "/viewHistory";
