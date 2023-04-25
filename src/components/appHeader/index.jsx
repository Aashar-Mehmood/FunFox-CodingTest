import cmpndText from "../../assets/cmpnd_text.png";
export default function AppHeader() {
  return (
    <div className="flex-1 flex justify-between items-center">
      <img src={cmpndText} alt="CMPND" />
      <h2 className="my-0 text-xl text-primary">Admin</h2>
    </div>
  );
}
