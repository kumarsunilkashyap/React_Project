const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white text-center p-4">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </footer>
    );
};

export default Footer;