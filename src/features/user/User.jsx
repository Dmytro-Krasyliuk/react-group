import UiButton from "../../shared/ui/ui-button";

const User = () => {
  let name = "Alex";
  let text = `hello, my name is ${name} !`;
  return (
    <div>
      <img src="" alt="" />
      <UiButton text="logout" isShadow={true} />
      <UiButton text="change account" isShadow={false} />
    </div>
  );
};
export default User;
