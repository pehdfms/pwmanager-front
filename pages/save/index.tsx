import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PasswordData } from "api/types";
import { getPassword } from "api";
import { CenteredDiv } from "styles/common";
import { PasswordForm } from "components/Crud/PasswordForm";

function SavePage() {
  const router = useRouter();
  const { id } = router.query;

  const [passwordData, setPasswordData] = useState<Partial<PasswordData>>({
    url: "",
    description: "",
    password: "",
  });

  useEffect(() => {
    if (!id || Array.isArray(id)) {
      return;
    }

    const Idnumber = Number(id);

    if (isNaN(Idnumber)) {
      return;
    }

    const password = getPassword(Idnumber);
    setPasswordData(password);
  }, [id]);

  return (
    <CenteredDiv>
      <PasswordForm {...passwordData} />
    </CenteredDiv>
  );
}

export default SavePage;
