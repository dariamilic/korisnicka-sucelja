"use client"

export function Footer() {

    return(
        <footer className="mt-auto bg-gray-100 text-center py-4 p-8">
            {/* Crta koja razdvaja body od footera */}
            <div className="border-t-2 border-gray-400 mt-8"></div>
        <p className="text-sm text-gray-500">
          © 2023 RestAway. All rights reserved.
        </p>
      </footer>


    );
}