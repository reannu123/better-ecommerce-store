interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-5">
        <p className="text-center text-sm text-black">
          &copy; 2024 Reannu Store, Inc. All rights reserved. {children}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
