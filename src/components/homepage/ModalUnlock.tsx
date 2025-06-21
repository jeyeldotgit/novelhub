import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface ModalUnlockProps {
  handleCloseModal: () => void;
}

const ModalUnlock = ({ handleCloseModal }: ModalUnlockProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Unlock Full Access</h2>
          <Button
            variant={"secondary"}
            size={"icon"}
            onClick={handleCloseModal}
          >
            X
          </Button>
        </div>

        <p className="mb-4">
          To explore our entire library and access exclusive content, please
          unlock full access.
        </p>
        <div className="flex justify-end items-center gap-4">
          <Input placeholder="Lagay mo code kung tropa ka ni JL"></Input>
          <Button variant={"default"}>Unlock</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalUnlock;
