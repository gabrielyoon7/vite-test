import {DOMAIN} from "./DOMAIN.ts";

export interface SignUp {
  user_id: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  name: FormDataEntryValue | null;
  phone_number: FormDataEntryValue | null;
}

const NO_SIGNAL_FROM_SERVER = "서버에서 응답이 없습니다.";
const NO_DUPLICATION_ID = "중복된 아이디가 존재합니다.";
const SIGN_UP_SUCCESS = "회원 가입이 완료됐습니다.";


function SignUpFields() {

  const signUp = async (user: SignUp) => {
    await fetch(`${DOMAIN}/fin-the-pen-web/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(async (res) => {
        const data = await res.json();
        if (data === true) {
          alert(SIGN_UP_SUCCESS);
        } else {
          alert(NO_DUPLICATION_ID);
        }
      })
      .catch((err) => {
        alert(NO_SIGNAL_FROM_SERVER);
        console.error(err);
      });
  };

  return (
    <div style={{margin:'10px', border:'1px solid blue'}}>
      <button
        onClick={()=>signUp({name: "test", user_id: "test", password: "test", phone_number: "test"})}
      >
        회원가입 (버튼 누르면 기존 레포와 동일한 로직으로 회원가입을 시도합니다.)
      </button>
    </div>
  );
}

export default SignUpFields;
