export interface SpecialButtonProps {
  text: string;
}

export default function SpecialButton({text}: SpecialButtonProps) {
  return (
    <button>{text}</button>
  );
}
