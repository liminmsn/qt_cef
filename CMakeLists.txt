cmake_minimum_required(VERSION 3.10.0)
project(cef VERSION 0.1.0 LANGUAGES C CXX)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

file(GLOB_RECURSE SRC_FILES
    CONFIGURE_DEPENDS
    "${CMAKE_SOURCE_DIR}/src/*.cpp"
    "${CMAKE_SOURCE_DIR}/src/head/*.h"
)

if(WIN32)
list(APPEND CMAKE_PREFIX_PATH "E:/Qt/6.11.1/msvc2022_64")
elseif(APPLE)
list(APPEND CMAKE_PREFIX_PATH "/opt/homebrew/opt/qt")
endif()
find_package(Qt6 REQUIRED COMPONENTS Widgets WebEngineWidgets WebChannel)

add_executable(cef 
    main.cpp
    ${SRC_FILES}
)

target_link_libraries(cef PRIVATE
    Qt6::Widgets
    Qt6::WebEngineWidgets
    Qt6::WebChannel
)

target_include_directories(cef PRIVATE
    "${CMAKE_SOURCE_DIR}/src"
)

if(APPLE)

    set(APP_ICON
        ${CMAKE_SOURCE_DIR}/assets/icon.icns
    )

    set_source_files_properties(
        ${APP_ICON}
        PROPERTIES
        MACOSX_PACKAGE_LOCATION "Resources"
    )

    # target_sources(cef PRIVATE ${APP_ICON})

    set_target_properties(cef PROPERTIES
        MACOSX_BUNDLE TRUE
        MACOSX_BUNDLE_ICON_FILE icon.icns
    )

endif()

set_target_properties(cef PROPERTIES OUTPUT_NAME "MacApp")