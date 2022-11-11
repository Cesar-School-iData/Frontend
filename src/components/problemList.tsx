import React, { useEffect, useState } from 'react'
import Problem from './problemCard'

function teste() {
  const PROBLEM_BASE_URL = "http::localhost:8080/api/?"
  const [problems, setProblems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(PROBLEM_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application / json",
          },
        });
        const problems = await response.json();
        setProblems(problems)
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className='py-44 px-14'>
      <div className="container mx-auto px-8 max-w-md h-96 bg-gray-300 rounded-3xl border border-gray-400 shadow-sm space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        {/* 
        {!loading && (
          {problems?.map((problem) => (
              <Problem problem={problem} key={problem.id} />
          ))}
        )}
        */}
        <Problem />
      </div>
    </div>
  )
}

export default teste