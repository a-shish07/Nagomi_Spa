import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  const location = useLocation();



  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Wellness Spa", path: "/wellness-spa" },
        { 
          name: "Unisex Salon", 
          path: "/salon",
          hasSubMenu: true,
          subItems: [
            { name: "Men's Services", path: "/men" },
            { name: "Women's Services", path: "/women" }
          ]
        },
        { name: "Makeup", path: "/makeup" }
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-soft-lg py-4"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <motion.img
                  whileHover={{ rotate: 8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  src="/logo.jpg"
                  alt="Nagomi Logo"
                  className="w-12 h-12 rounded-full object-cover shadow-glow"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-bold text-gray-900 transition-colors duration-300">
                    NAGOMI
                  </span>
                  <span className="font-light text-xs tracking-wider text-primary-600 transition-colors duration-300">
                    SPA & WELLNESS
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navItems.map((item, index) => (
                <div 
                  key={item.name} 
                  className="relative group"
                >
                  {item.hasDropdown ? (
                    <div className="relative">
                      <motion.button 
                        className={`flex items-center gap-2 font-display font-medium transition-all duration-300 relative group ${
                          location.pathname === item.path 
                            ? 'text-primary-600' 
                            : 'text-gray-800 hover:text-primary-600'
                        }`}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                        <motion.div
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                      </motion.button>
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-4 w-72 rounded-2xl shadow-soft-lg py-4 border border-primary-200/40 bg-gradient-to-r from-primary-600 to-primary-700 text-white"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                          >
                            {item.dropdownItems.map((dropdown, dropdownIndex) => (
                              <motion.div 
                                key={dropdown.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: dropdownIndex * 0.05 }}
                                className="relative"
                                onMouseEnter={() => dropdown.hasSubMenu && setHoveredSubMenu(dropdown.name)}
                                onMouseLeave={() => dropdown.hasSubMenu && setHoveredSubMenu(null)}
                              >
                                {dropdown.hasSubMenu ? (
                                  <div className="px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium rounded-lg mx-2 flex items-center justify-between cursor-pointer">
                                    <span>{dropdown.name}</span>
                                    <ChevronRight size={16} className="text-white/70" />
                                  </div>
                                ) : (
                                  <Link
                                    to={dropdown.path}
                                    className="block px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium rounded-lg mx-2"
                                  >
                                    {dropdown.name}
                                  </Link>
                                )}
                                
                                {/* Submenu */}
                                {dropdown.hasSubMenu && hoveredSubMenu === dropdown.name && (
                                  <motion.div
                                    initial={{ opacity: 0, x: 6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 6 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute left-full top-0 ml-2 w-56 rounded-xl shadow-soft-lg py-3 border border-primary-200/40 bg-gradient-to-r from-primary-600 to-primary-700 text-white"
                                  >
                                    {dropdown.subItems.map((subItem, subIndex) => (
                                      <motion.div
                                        key={subItem.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                      >
                                        <Link
                                          to={subItem.path}
                                          className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg mx-2"
                                        >
                                          {subItem.name}
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </motion.div>
                                )}
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to={item.path}
                        className={`font-display font-medium transition-all duration-300 relative group ${
                          location.pathname === item.path 
                            ? 'text-primary-600' 
                            : 'text-gray-800 hover:text-primary-600'
                        }`}
                      >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </motion.div>
                  )}
                  
                </div>
               
              ))}
            </nav>

            {/* Book Now Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  to="/contact-us"
                  className="hidden md:inline-block btn-primary relative overflow-hidden shadow-soft-lg"
                >
                  <span className="relative z-10">Book Appointment</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
              
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-xl transition-all duration-300 text-gray-800 hover:text-primary-600 hover:bg-primary-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md shadow-soft-lg border-t border-gray-100"
            >
              <div className="container-custom py-6">
                <nav className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`block font-display font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                          location.pathname === item.path 
                            ? 'text-primary-600 bg-primary-50' 
                            : 'text-gray-800 hover:text-primary-600 hover:bg-primary-50/50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <div className="ml-6 space-y-2 mt-2">
                          {item.dropdownItems.map((dropdown, dropdownIndex) => (
                            <motion.div 
                              key={dropdown.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: (index + dropdownIndex + 1) * 0.1 }}
                            >
                              <Link
                                to={dropdown.path}
                                className="block text-gray-600 hover:text-primary-600 py-2 px-4 rounded-lg transition-all duration-200 hover:bg-primary-50/30"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdown.name}
                              </Link>
                              {dropdown.subItems && (
                                <div className="ml-4 space-y-1">
                                  {dropdown.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.path}
                                      className="block text-sm text-gray-500 hover:text-primary-600 py-1 px-3 rounded-lg transition-all duration-200"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                    className="pt-4"
                  >
                    <Link
                      to="/contact-us"
                      className="btn-primary w-full text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Book Appointment
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-24"></div>
    </>
  );
};

export default Header;
